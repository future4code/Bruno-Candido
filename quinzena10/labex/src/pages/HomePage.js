import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { useHistory } from 'react-router-dom';

const HomePageMainContainer = styled.div`
    width: 99vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    background-image:url(https://static3.tcdn.com.br/img/img_prod/580806/outlet_1_rolo_de_papel_de_parede_espaco_sideral_0_60_x_2_50_metros_11189_1_20210623183849.jpg)
`;

const ButtonContainer = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;


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