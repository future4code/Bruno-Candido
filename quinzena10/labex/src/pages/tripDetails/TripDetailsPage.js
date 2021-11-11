import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import PageTitle from '../../components/PageTitle';
import Loading from '../../components/Loading';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import useProtectedPage from '../../hooks/useProtectedPage';
import { TripDetailsPageMainContainer, TripDetailsContainer, ButtonContainer, TripDetail, ApplierDetail, PageSubTitle, PageAprovador, TripApplicantsContainer, ApplicantCard, DetailButtonContainer, MiniButton, ListTripsContainer1 } from "./DetailsStyled";




function TripDetailsPage() {

    useProtectedPage();

    const history = useHistory();

    const params = useParams();

    const [tripDetail, setTripDetail] = useState([]);
    const [loading, setLoading] = useState(true);

    const goAdminHome = () => {
        history.push("/admin/trips/list");
    };

    const getTripDetail = () => {
        const authenticator = localStorage.getItem("token");
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-luan-banu/trip/${params.id}`,
            {
                headers: {
                    auth: authenticator
                }
            })
            .then((response) => {
                setTripDetail(response.data.trip);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error.response.data);
                setLoading(false);
            })
    }

    useEffect(() => {
        getTripDetail();
    });

    const aproveApplier = (applier) => {
        const authenticator = localStorage.getItem("token");
        const body = { approve: true };
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-luan-banu/trips/${params.id}/candidates/${applier.id}/decide`, body,
            {
                headers: {
                    auth: authenticator
                }
            })
            .then((response) => {
                alert(`Você aprovou o candidato ${applier.name}!`);
                getTripDetail();
            })
            .catch((error) => {
                alert(error.response.data.message);
            })
    };

    const reproveApplier = (applier) => {
        const authenticator = localStorage.getItem("token");
        const body = { approve: false };
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-luan-banu/trips/${params.id}/candidates/${applier.id}/decide`, body,
            {
                headers: {
                    auth: authenticator
                }
            })
            .then((response) => {
                alert(`Você reprovou o candidato ${applier.name}!`);
                getTripDetail();
            })
            .catch((error) => {
                alert(error.response.data.message);
            })
    };

    if (tripDetail.length !== 0 && loading === false) {
        return (
            <TripDetailsPageMainContainer>
                <Header />
                <ButtonContainer>
                    <Button
                        onClick={goAdminHome}
                        buttonName="VOLTAR"
                    />
                </ButtonContainer>
                <ListTripsContainer1>
                    <PageTitle title={tripDetail.name} />
                </ListTripsContainer1>
                <TripDetailsContainer>
                    <TripDetail>Nome: {tripDetail.name}</TripDetail>
                    <TripDetail>Descrição: {tripDetail.description}</TripDetail>
                    <TripDetail>Planeta: {tripDetail.planet}</TripDetail>
                    <TripDetail>Duração: {tripDetail.durationInDays} dias</TripDetail>
                    <TripDetail>Data de partida: {tripDetail.date}</TripDetail>
                </TripDetailsContainer>
                <PageSubTitle>Candidatos pendentes</PageSubTitle>
                <TripApplicantsContainer>
                    {tripDetail.candidates &&
                        tripDetail.candidates.map((applier) => {
                            return (
                                <ApplicantCard key={applier.id}>
                                    <ApplierDetail>Candidato: {applier.name}</ApplierDetail>
                                    <ApplierDetail>Idade: {applier.age} anos</ApplierDetail>
                                    <ApplierDetail>País de origem: {applier.country}</ApplierDetail>
                                    <ApplierDetail>Profissão: {applier.profession}</ApplierDetail>
                                    <ApplierDetail>Motivação: {applier.applicationText}</ApplierDetail>
                                    <DetailButtonContainer>
                                        <MiniButton onClick={() => aproveApplier(applier)}>APROVAR</MiniButton>
                                        <MiniButton onClick={() => reproveApplier(applier)}>REPROVAR</MiniButton>
                                    </DetailButtonContainer>
                                </ApplicantCard>
                            );
                        })}
                </TripApplicantsContainer>
                <PageSubTitle>Candidatos aprovados</PageSubTitle>
                <PageAprovador>
                    {tripDetail.approved &&
                        tripDetail.approved.map((applier) => {
                            return (
                                <PageAprovador key={applier.id}>
                                    <ul>
                                        <li>{applier.name}, {applier.age} anos, {applier.country}</li>
                                    </ul>
                                </PageAprovador>
                            );
                        })}
                </PageAprovador>
                <Footer />
            </TripDetailsPageMainContainer>
        )
    }
    else if (loading === true) {
        return (
            <TripDetailsPageMainContainer>
                <Header />
                <Loading />
                <Footer />

            </TripDetailsPageMainContainer>)
    };
}

export default TripDetailsPage;