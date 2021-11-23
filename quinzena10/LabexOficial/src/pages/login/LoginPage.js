import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import PageTitle from '../../components/PageTitle';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { LoginPageMainContainer, LoginContainer, InputsContainer, StyledInput } from "./LoginStyled"

function LoginPage() {

    const { form, onChange, cleanFields } = useForm({ email: "", password: "" });

    const history = useHistory();

    const submitLogin = (event) => {
        event.preventDefault();
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-luan-banu/login", form)
            .then((response) => {
                localStorage.setItem('token', response.data.token);
                cleanFields();
                history.push("/admin/trips/list");
            })
            .catch((error) => {
                console.log(error.response)
            })
    };

    return (
        <LoginPageMainContainer>
            <Header />
            <LoginContainer>
                <PageTitle title="LOGIN" />
                <InputsContainer onSubmit={submitLogin}>
                    <StyledInput
                        name="email"
                        placeholder="E-mail"
                        type="email"
                        value={form.email}
                        onChange={onChange}
                        required />
                    <StyledInput
                        name="password"
                        placeholder="Senha"
                        type="password"
                        value={form.password}
                        onChange={onChange}
                        required />
                    <Button
                        buttonName="ACESSAR"
                    />
                </InputsContainer>
            </LoginContainer>
            <Footer />
        </LoginPageMainContainer>
    )
}

export default LoginPage;