

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/violinapopova/snow-background.git
    cd snow-background
    ```

2. Install dependencies:
    ```sh
    yarn
    ```

3. Start the Metro server:
    ```sh
    npx expo start
    ```

## Usage

The main component is `SnowScreen`, which displays a background image and the snow animation. The `Snow` component generates multiple `Snowflake` components, each with its own animation configuration.

### Snowflake Component

The `Snowflake` component is responsible for rendering and animating individual snowflakes. It uses the `Animated` API from React Native to create falling, rotating, and swinging animations.

### Snow Component

The `Snow` component generates a specified number of `Snowflake` components and positions them within the screen dimensions.

### SnowScreen Component

The `SnowScreen` component sets up the background image and includes the `Snow` component to display the snow animation.

## Configuration

You can configure the number of snowflakes by passing the `snowflakesCount` prop to the `Snow` component:

```tsx
<Snow snowflakesCount={200} />
