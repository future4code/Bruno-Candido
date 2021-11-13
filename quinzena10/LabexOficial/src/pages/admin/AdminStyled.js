import styled from "styled-components";

export const AdminHomePageMainContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    background-image:url(https://1.bp.blogspot.com/-Syw0aNZ16tc/XcMdN9_5POI/AAAAAAAAecw/ZlopBKd1iswdN-lIXwdgXAQ7SFcIjBXMACLcBGAsYHQ/s2560/colorful-planets-chill-scifi-pink-4k-zs-2560x1440.jpg)
`;

export const AdminHomeContainer = styled.div`
    width: 40%;
    height: 100%;
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

export const CardMainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #00daff;
    margin: 8px;
    padding: 8px 16px;
    width: 80%;
    height: 100px;
    border: 1px solid black;
    &:hover {
        cursor: default;
        background-color: whitesmoke;
    };
`;

export const TripNameContainer = styled.div`
    font-size: 18px;
    font-weight: bold;
`;


export const TripDeleteIcon = styled.img`
    width: 40px;
    height: auto;
    &:hover {
        cursor: pointer;
        transform: scale(1.2);
    };
`;

export const TripDelete = styled.div`

`;
export default styled;
