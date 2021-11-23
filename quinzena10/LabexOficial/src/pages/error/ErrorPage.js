import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import PageTitle from '../../components/PageTitle';
import { useHistory } from 'react-router-dom';
import { ErrorPageMainContainer, ErrorContainer } from './ErrorStyled'



function ErrorPage() {

    const history = useHistory();

    const goHomePage = () => {
        history.push("/")
    }
    return (
        <ErrorPageMainContainer>
            <Header />
            <ErrorContainer>
                <PageTitle
                    title="PÁGINA NÃO ENCONTRADA"
                />
                <Button
                    onClick={goHomePage}
                    buttonName="HOME"
                />
            </ErrorContainer>
            <Footer />
        </ErrorPageMainContainer>
    )
}

export default ErrorPage