import React from 'react';
import styled from "styled-components";

const Wrapper = styled.section`
    
`;
const InfoImage = styled.img``;
const InfoTitle = styled.h1``;


const Info = (props) => {
    const {name,nativeName,flag,capital,population,region,subregion,topLevelDomain,currencies=[],languages=[],borders=[],push} = props


    return (
        <Wrapper>
            <InfoImage src={flag} alt={name} />

            <div>
                <InfoTitle>{name}</InfoTitle>
            </div>
        </Wrapper>
    );
};

export default Info;