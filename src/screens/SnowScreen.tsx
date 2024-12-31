import React from 'react';
import Snow from '../components/snow/Snow';
import WinterBackground from '../../assets/images/Winter.png';
import { BackgroundImage, Container } from './styles';

export default function SnowScreen() {
    return (
        <Container>
            <BackgroundImage source={WinterBackground} />
            <Snow />
        </Container>
    );
}