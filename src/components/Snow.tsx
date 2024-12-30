import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import Snowflake from "./Snowflake";

const dimensions = Dimensions.get("window");

export default function Snow({ snowflakesCount = 100 }) {
    return <View 
                style={[styles.container, 
                    { width: dimensions.width, height: dimensions.height }]
                }>
                {new Array(snowflakesCount).fill(true).map((_, index) => (
                    <Snowflake key={index} scene={dimensions} />
                ))}
            </View>;
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
    },
});