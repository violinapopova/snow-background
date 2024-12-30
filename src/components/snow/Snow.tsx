import React, { useMemo } from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import Snowflake from "../snowflake/Snowflake";
import { SnowProps } from "./props";

const { width, height } = Dimensions.get("window");
export default function Snow({ snowflakesCount = 100 }: SnowProps) {
    const snowflakes = useMemo(
        () => new Array(snowflakesCount).fill(true).map((_, index) => (
            <Snowflake key={index} scene={{ width, height }} />
        )),
        [snowflakesCount]
    );

    return <View style={[styles.container, { width, height }]}>
                {snowflakes}
            </View>;
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
    },
});