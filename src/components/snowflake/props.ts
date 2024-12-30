export interface SnowflakeProps {
    scene: {
      width: number;
      height: number;
    };
}

export interface SnowflakeConfig {
    size: number;
    opacity: number;
    type: string;
    xPosition: number;
    fallDelay: number;
    fallDuration: number;
    rotationDuration: number;
    rotationDirection: number;
    swingDuration: number;
    swingAmplitude: number;
}