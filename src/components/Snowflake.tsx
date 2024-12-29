import React, { useRef, useEffect, useState } from "react";
import { Animated, Easing, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    snowflake: {
        position: "absolute",
        color: "#fff",
    },
});

const START_Y_POSITION = -50;
const SNOWFLAKE_TYPES = ['❄', '❅', '❆'];

export default function Snowflake({scene}) {
    return null;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}