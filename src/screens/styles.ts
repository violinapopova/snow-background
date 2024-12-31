import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
    flex: 1;
    width: ${width}px;
    height: ${height}px;
`;

export const BackgroundImage = styled.Image`
    width: ${width}px;
    height: ${height}px;
`;