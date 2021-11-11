import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import PageTitle from '../../components/PageTitle';
import Loading from '../../components/Loading';
import { useHistory } from 'react-router-dom';
import useProtectedPage from '../../hooks/useProtectedPage';
import axios from 'axios';
import trashCanIcon from '../../img/trashcanicon.png';
import { AdminHomePageMainContainer, AdminHomeContainer, ButtonContainer, CardMainContainer, TripNameContainer, TripDeleteIcon, TripDelete } from "./AdminStyled"


function AdminHomePage() {

    useProtectedPage();

    const [tripsList, setTripsList] = useState([]);
    const [loading, setLoading] = useState(true);

    const history = useHistory();

    useEffect(() => {
        getTripsList();
    }, []);

    const goCreateTripPage = () => {
        history.push("/admin/trips/create");
    };

    const goBack = () => {
        history.push("/");
    }

    const goTripDetails = (tripId) => {
        const tripIdentification = tripId;
        history.push(`/admin/trips/${tripIdentification}`);
    };

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

    const deleteTrip = (trip) => {
        if (window.confirm("Deseja deletar essa viagem?")) {
            const authenticator = localStorage.getItem("token");
            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-luan-banu/trips/${trip.id}`,
                {
                    headers: {
                        auth: authenticator
                    }
                })
                .then((response) => {
                    alert(`Você deletou a viagem ${trip.name} que ia em direção ao planeta ${trip.planet}!`);
                    history.push("/admin/trips/list");
                    getTripsList();
                })
                .catch((error) => {
                    alert(error.response.data.message);
                    history.push("/admin/trips/list");
                    getTripsList();
                })
        }
        else {
            history.push("/admin/trips/list");
        }
    };
    if (tripsList.length !== 0 && loading === false) {
        return (
            <AdminHomePageMainContainer>
                <Header />
                <ButtonContainer>
                    <Button
                        onClick={goCreateTripPage}
                        buttonName="CRIAR VIAGEM"
                    />
                    <Button
                        onClick={goBack}
                        buttonName="VOLTAR"
                    />
                </ButtonContainer>
                <AdminHomeContainer>
                    <PageTitle title="VIAGENS LISTADAS" />
                    {tripsList.map((trip) => {
                        return (
                            <CardMainContainer onClick={() => goTripDetails(trip.id)} key={trip.id}>
                                <TripNameContainer>
                                    {trip.name}
                                </TripNameContainer>
                                <TripDelete onClick={(e) => {
                                    e.stopPropagation();
                                    deleteTrip(trip)
                                }}>
                                    <TripDeleteIcon
                                        src={trashCanIcon}
                                        alt="Trash Can Icon"
                                    />
                                </TripDelete>
                            </CardMainContainer>
                        )
                    })}
                </AdminHomeContainer>
                <Footer />
            </AdminHomePageMainContainer>
        )
    }
    else if (loading === true) {
        return (
            <AdminHomePageMainContainer>
                <Header />
                <Loading />
                <Footer />
            </AdminHomePageMainContainer>
        )
    }

}

export default AdminHomePage;