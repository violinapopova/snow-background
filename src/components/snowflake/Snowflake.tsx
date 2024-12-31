import React, { useRef, useEffect, useState, useMemo } from 'react';
import {Animated, Easing} from 'react-native';
import { SnowflakeConfig, SnowflakeProps } from './props';
import { SnowflakeText } from './styles';
import { getConfig } from './utils';

const START_Y_POSITION = -50;

export default function Snowflake({ scene }: SnowflakeProps) {
  const [config, setConfig] = useState<SnowflakeConfig>(() => getConfig(scene));
  const animatedY = useRef(new Animated.Value(START_Y_POSITION)).current;
  const animatedRotation = useRef(new Animated.Value(0)).current;
  const animatedSwing = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (config) {
      runAnimation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config]);

  const runAnimation = () => {
    animatedY.setValue(START_Y_POSITION);
    animatedRotation.setValue(0);

    Animated.loop(
      Animated.timing(animatedRotation, {
        toValue: 1,
        duration: config.rotationDuration,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedSwing, {
          toValue: -1,
          duration: config.swingDuration,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(animatedSwing, {
          toValue: 1,
          duration: config.swingDuration,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    ).start();

    Animated.sequence([
      Animated.delay(config.fallDelay),
      Animated.timing(animatedY, {
        toValue: scene.height,
        duration: config.fallDuration,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start(() => {
      const newConfig = getConfig(scene);
      setConfig(newConfig);
    });
  };

  const rotate = useMemo(() => animatedRotation.interpolate({
    inputRange: [0, 1],
    outputRange: config.rotationDirection
      ? ['0deg', '360deg']
      : ['360deg', '0deg'],
  }), [animatedRotation, config.rotationDirection]);

  const translateX = useMemo(() => animatedSwing.interpolate({
    inputRange: [-1, 1],
    outputRange: [-config.swingAmplitude, config.swingAmplitude],
  }), [animatedSwing, config.swingAmplitude]);

  return (
    <SnowflakeText
      style={[
        {
          left: config.xPosition,
          fontSize: config.size,
          opacity: config.opacity,
          transform: [{translateY: animatedY}, {rotate}, {translateX}],
        },
      ]}
    >
      {config.type}
    </SnowflakeText>
  );
}


