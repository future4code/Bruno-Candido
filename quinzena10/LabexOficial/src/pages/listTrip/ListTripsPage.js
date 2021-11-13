import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import PageTitle from '../../components/PageTitle';
import Loading from '../../components/Loading';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { ListTripsPageMainContainer, ListTripsContainer, ListTripsContainer1, ButtonContainer, CardMainContainer, TitleContainer, TripNameContainer, TripDescContainer, TripDurationAndDateContainer } from './ListStyled';

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