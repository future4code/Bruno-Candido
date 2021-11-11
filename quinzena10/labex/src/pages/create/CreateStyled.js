import styled from "styled-components";


export const CreateTripPageMainContainer = styled.div`
    width: 100%;
    height: 110%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    background-image:url(https://1.bp.blogspot.com/-Syw0aNZ16tc/XcMdN9_5POI/AAAAAAAAecw/ZlopBKd1iswdN-lIXwdgXAQ7SFcIjBXMACLcBGAsYHQ/s2560/colorful-planets-chill-scifi-pink-4k-zs-2560x1440.jpg)
`;

export const CreateTripContainer = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ButtonContainer = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-around;
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200%;
    margin-bottom: 8px;
`;

export const StyledInput = styled.input`
    width: 75%;
    height: 40px;
    border-radius: 15px;
    margin: 6px 0;
    border: 1.5px solid black;
    font-size: 16px;
    padding: 0 10px;
`;

export const PlanetInput = styled.select`
    width: 78%;
    height: 40px;
    border-radius: 15px;
    margin: 6px 0;
    border: 1.5px solid black;
    font-size: 16px;
    padding: 0 10px;
`;