import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction:row;
    gap:52px;
    aligns-item:center;

    @media screen and (max-width: 768px){
        flex-direction:column;
     }
`;

export const ContainerTextStory = styled.div `
    display:flex;
    flex-direction:row;
    gap:40px;
    aligns-item:center;

    @media screen and (max-width: 768px){
        flex-direction:column;
     }
`;

export const TextNameBold = styled.p `
    font-weight: 600;
    font-size: 36px;
    line-height: 150%;
    color: #000000;
`;

export const TextMember = styled.p `
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #424242;
`;

export const TextDescStory = styled.p `
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    color: #424242;
    width:600px;
    margin-top:16px;

    @media screen and (max-width: 768px){
        width: 295px;
    }
`;

export const ContainerText = styled.div `
    display:flex;
    flex-direction: column;
`;