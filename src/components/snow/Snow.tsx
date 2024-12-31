import React, { useMemo } from "react";
import { Dimensions } from "react-native";
import Snowflake from "../snowflake/Snowflake";
import { SnowProps } from "./props";
import { Container } from "./styles";

const { width, height } = Dimensions.get("window");

export default function Snow({ snowflakesCount = 100 }: SnowProps) {
    const snowflakes = useMemo(
        () => new Array(snowflakesCount).fill(true).map((_, index) => (
            <Snowflake key={index} scene={{ width, height }} />
        )),
        [snowflakesCount]
    );

    return <Container>
                {snowflakes}
            </Container>;
}
