import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const HomePageMainContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto ;
    background-image:url(https://1.bp.blogspot.com/-Syw0aNZ16tc/XcMdN9_5POI/AAAAAAAAecw/ZlopBKd1iswdN-lIXwdgXAQ7SFcIjBXMACLcBGAsYHQ/s2560/colorful-planets-chill-scifi-pink-4k-zs-2560x1440.jpg)
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