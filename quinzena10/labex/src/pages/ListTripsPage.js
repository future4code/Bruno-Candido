import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';
import Button from '../components/Button';
import Loading from '../components/Loading';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const ListTripsPageMainContainer = styled.div`
    /* height: 130vh;
     width: 99vw; */
     height: auto;
     width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    background-image:url(https://1.bp.blogspot.com/-Syw0aNZ16tc/XcMdN9_5POI/AAAAAAAAecw/ZlopBKd1iswdN-lIXwdgXAQ7SFcIjBXMACLcBGAsYHQ/s2560/colorful-planets-chill-scifi-pink-4k-zs-2560x1440.jpg)
`;

const ListTripsContainer = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;

`;
const ListTripsContainer1 = styled.div`
   color: #055aec;
   display: flex;
    flex-direction: column;
    align-items: center;

`
const ButtonContainer = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-evenly;
`;

const CardMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: transparent;
    margin: 8px;
    padding: 8px 16px;
    border-radius: 15px;
    width: 80%;

`;

const TitleContainer = styled.div`
    display: flex;
    font-size: 25px;
    background-color: #50b5df;
    padding: 6px 14px;
    border-radius: 15px;
    margin: 4px 0 8px 0;
`;

const TripNameContainer = styled.div`
    display: flex;
    font-size: 18px;
    color: #fffa50;
    font-weight: bold;
`;

const TripDescContainer = styled.div`
    display: flex;
    font-size: 15px;
    color: #fffa50;
    font-style: italic;
`;

const TripDurationAndDateContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    margin: 12px 0 4px 0;
    background-color: #50b5df;
    border-radius: 15px;
    padding: 4px 0;
`;

function ListTripsPage() {

    const [tripsList, setTripsList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTripsList();
    }, []);

    const history = useHistory();

    const getTripsList = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-luan-banu/trips")
            .then((response) => {
                setTripsList(response.data.trips);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error.response.data);
                setLoading(false);
            })
    };

    const goAdminHomePage = () => {
        history.push("/admin/trips/list");
    };

    const goApplicationFormPage = () => {
        history.push("/trips/application");
    };

    if (tripsList.length !== 0 && loading === false) {
        return (
            <ListTripsPageMainContainer>
                <Header />
                <ButtonContainer>
                    <Button
                        onClick={goApplicationFormPage}
                        buttonName="INSCREVER-SE"
                    />
                    <Button
                        onClick={goAdminHomePage}
                        buttonName="ÁREA DE ADMIN"
                    />
                </ButtonContainer>
                <ListTripsContainer>
                    <ListTripsContainer1>
                        <PageTitle title="LISTA DE VIAGENS DISPONÍVEIS" />
                    </ListTripsContainer1>
                    {tripsList.map((trip) => {
                        return (
                            <CardMainContainer key={trip.id}>
                                <TitleContainer>
                                    {trip.name}
                                </TitleContainer>
                                <TripNameContainer>
                                    {trip.planet}
                                </TripNameContainer>
                                <TripDescContainer>
                                    {trip.description}
                                </TripDescContainer>
                                <TripDurationAndDateContainer>
                                    <div>
                                        Partida em {trip.date}
                                    </div>
                                    <div>
                                        Duração de {trip.durationInDays} dias.
                                    </div>
                                </TripDurationAndDateContainer>
                            </CardMainContainer>
                        )
                    })}
                </ListTripsContainer>
                <Footer />
            </ListTripsPageMainContainer>
        )
    }
    else if (loading === true) {
        return (
            <ListTripsPageMainContainer>
                <Header />
                <Loading />
                <Footer />
            </ListTripsPageMainContainer>)
    };
}

export default ListTripsPage;