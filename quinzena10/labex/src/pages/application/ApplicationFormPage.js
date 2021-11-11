import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import PageTitle from '../../components/PageTitle';
import Loading from '../../components/Loading';
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import axios from 'axios';
import { countries } from "../../constants/countries";
import { ApplicationFormPageMainContainer, ApplicationFormContainer, ButtonContainer, StyledInput, StyledSelect, FormContainer } from "./ApplicationStyled"



function ApplicationFormPage() {

    const { form, onChange, cleanFields } = useForm({
        tripId: "",
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: ""
    });

    const [tripsList, setTripsList] = useState([]);
    const [loading, setLoading] = useState(true);

    const history = useHistory();

    const goListTripsPage = () => {
        history.push("/trips/list");
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

    useEffect(() => {
        getTripsList();
    }, []);

    const applyToTrip = (event) => {
        event.preventDefault();
        const body = {
            name: form.name,
            age: Number(form.age),
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country,
        };
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-luan-banu/trips/${form.tripId}/apply`, body)
            .then((response) => {
                alert("Aplicação bem sucedida!");
                cleanFields();
            })
            .catch((error) => {
                alert(error.response.data.message);
            })
    };

    if (tripsList.length !== 0 && loading === false) {
        return (
            <ApplicationFormPageMainContainer>
                <Header />
                <ButtonContainer>
                    <Button
                        onClick={goListTripsPage}
                        buttonName={"VOLTAR"}
                    />
                </ButtonContainer>
                <ApplicationFormContainer>
                    <PageTitle title="FORMULÁRIO DE APLICAÇÃO" />
                    <FormContainer onSubmit={applyToTrip}>
                        <StyledSelect
                            value={form.tripId}
                            required
                            name={"tripId"}
                            onChange={onChange}
                        >
                            <option value={""}>Selecione uma viagem: </option>
                            {tripsList.map((trip) => {
                                return (
                                    <option value={trip.id} key={trip.id}>
                                        {trip.name} - {trip.planet}
                                    </option>
                                );
                            })}
                        </StyledSelect>
                        <StyledInput
                            name={"name"}
                            placeholder="Seu nome"
                            type="text"
                            value={form.name}
                            onChange={onChange}
                            pattern={"[a-zA-Z]{3,}"}
                            title="Mínimo de 3 letras."
                            required
                        />
                        <StyledInput
                            name={"age"}
                            placeholder="Sua idade em anos"
                            type="number"
                            value={form.age}
                            onChange={onChange}
                            min="18"
                            required
                        />
                        <StyledSelect
                            value={form.country}
                            required
                            name={"country"}
                            onChange={onChange}
                        >
                            <option value={""}>Selecione seu país:</option>
                            {countries.map((country) => {
                                return (
                                    <option value={country} key={country}>
                                        {country}
                                    </option>
                                );
                            })}
                        </StyledSelect>
                        <StyledInput
                            name={"profession"}
                            placeholder="Profissão"
                            type="text"
                            value={form.profession}
                            onChange={onChange}
                            pattern={"^.{10,}$"}
                            title="Mínimo de 10 caractéres."
                            required
                        />
                        <StyledInput
                            name={"applicationText"}
                            placeholder="Diga porque você merece ser selecionado."
                            type="text"
                            value={form.applicationText}
                            onChange={onChange}
                            pattern={"^.{30,}$"}
                            title="Mínimo de 30 caractéres."
                            required
                        />
                        <Button
                            buttonName="ENVIAR FORMULÁRIO"
                        />
                    </FormContainer>
                </ApplicationFormContainer>
                <Footer />
            </ApplicationFormPageMainContainer>
        )
    }
    else if (loading === true) {
        return (
            <ApplicationFormPageMainContainer>
                <Header />
                <Loading />
                <Footer />
            </ApplicationFormPageMainContainer>)
    };
};

export default ApplicationFormPage;