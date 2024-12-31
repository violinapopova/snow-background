import { SnowflakeConfig } from './props';

const SNOWFLAKE_TYPES = ['❄', '❅', '❆'];

export function getConfig(scene: { width: number; height: number }): SnowflakeConfig {
  const size = randomInt(5, 10);
  const opacity = randomInt(4, 10) / 10;
  const type = SNOWFLAKE_TYPES[randomInt(0, 2)];
  const xPosition = randomInt(0, scene.width);

  const fallDuration = randomInt(10000, 30000);
  const fallDelay = randomInt(500, 10000);

  const rotationDuration = randomInt(2000, 10000);
  const rotationDirection = randomInt(0, 1);

  const swingDuration = randomInt(3000, 8000);
  const swingAmplitude = randomInt(0, 30);

  return {
    size,
    opacity,
    type,
    xPosition,
    fallDelay,
    fallDuration,
    rotationDuration,
    rotationDirection,
    swingDuration,
    swingAmplitude,
  };
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}