import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import PageTitle from '../../components/PageTitle';
import Loading from '../../components/Loading';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import useProtectedPage from '../../hooks/useProtectedPage';

const TripDetailsPageMainContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    background-image:url(https://1.bp.blogspot.com/-Syw0aNZ16tc/XcMdN9_5POI/AAAAAAAAecw/ZlopBKd1iswdN-lIXwdgXAQ7SFcIjBXMACLcBGAsYHQ/s2560/colorful-planets-chill-scifi-pink-4k-zs-2560x1440.jpg);
`;

const TripDetailsContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    color: #ff3f41;
`;

const ButtonContainer = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-around;
`;

const TripDetail = styled.span`
    margin: 4px 0;
`;

const ApplierDetail = styled.span`
    margin: 4px 0 4px 25px;
`;

const PageSubTitle = styled.div`
    font-size: 28px;
    width: 120%;
    display: flex;
    justify-content: center;
    margin: 25px;
    color: #055aec;
`;

const PageAprovador = styled.div`
        color: #ff3f41; 
`

const TripApplicantsContainer = styled.div`
    width: 40%;
`;

const ApplicantCard = styled.div`
    border-radius: 15px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    margin: 6px 0;
    color:#ff3f41;
`;

const DetailButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 4px 0 8px 0;
`;

const MiniButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 35px;
    background-color: #50b5df;
    color: whitesmoke;
    border: 1px solid black;
    font-size: 15px;
    border-radius: 12px;
    &:hover {
        cursor: pointer;
        background-color: whitesmoke;
        color: black;
    };
`
const ListTripsContainer1 = styled.div`
   color: #055aec;
   display: flex;
    flex-direction: column;
    align-items: center;

`


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