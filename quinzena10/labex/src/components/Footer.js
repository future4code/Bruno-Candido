import React from 'react';
import styled from 'styled-components';

const FooterMainContainer = styled.div`
    width: 99%;
    height: 10%;
    background-color: #50b5df;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    margin-top: 170px;
`;

function Footer() {
    return (
        <FooterMainContainer>
            <p>LabeX. Todos os direitos reservados.</p>
        </FooterMainContainer>
    )
}

export default Footer;