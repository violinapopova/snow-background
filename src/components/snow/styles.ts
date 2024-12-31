import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
    position: absolute;
    width: ${width}px;
    height: ${height}px;
`;  