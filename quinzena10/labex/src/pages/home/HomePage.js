import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { HomePageMainContainer, ButtonContainer } from "./HomeStyled"




function HomePage() {

    const history = useHistory();

    const goListTripsPage = () => {
        history.push("/trips/list");
    };

    const goAdminHomePage = () => {
        const token = localStorage.getItem('token');
        if (token === null) {
            history.push("/login");
        }
        else {
            history.push("/admin/trips/list");
        };
    };

    return (
        <HomePageMainContainer>
            <Header />
            <ButtonContainer>
                <Button
                    onClick={goListTripsPage}
                    buttonName="VER VIAGENS"
                />
                <Button
                    onClick={goAdminHomePage}
                    buttonName="ÁREA DE ADMIN"
                />
            </ButtonContainer>
            <Footer />
        </HomePageMainContainer>
    )
}

export default HomePage;