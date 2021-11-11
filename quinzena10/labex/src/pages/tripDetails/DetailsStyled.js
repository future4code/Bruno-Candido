import styled from "styled-components";

export const TripDetailsPageMainContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    background-image:url(https://1.bp.blogspot.com/-Syw0aNZ16tc/XcMdN9_5POI/AAAAAAAAecw/ZlopBKd1iswdN-lIXwdgXAQ7SFcIjBXMACLcBGAsYHQ/s2560/colorful-planets-chill-scifi-pink-4k-zs-2560x1440.jpg);
`;

export const TripDetailsContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    color: #ff3f41;
`;

export const ButtonContainer = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-around;
`;

export const TripDetail = styled.span`
    margin: 4px 0;
`;

export const ApplierDetail = styled.span`
    margin: 4px 0 4px 25px;
`;

export const PageSubTitle = styled.div`
    font-size: 28px;
    width: 120%;
    display: flex;
    justify-content: center;
    margin: 25px;
    color: #055aec;
`;

export const PageAprovador = styled.div`
        color: #ff3f41; 
`

export const TripApplicantsContainer = styled.div`
    width: 40%;
`;

export const ApplicantCard = styled.div`
    border-radius: 15px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    margin: 6px 0;
    color:#ff3f41;
`;

export const DetailButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 4px 0 8px 0;
`;

export const MiniButton = styled.button`
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
export const ListTripsContainer1 = styled.div`
   color: #055aec;
   display: flex;
    flex-direction: column;
    align-items: center;

`