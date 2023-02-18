import React from 'react';
import styled from "styled-components";
import List from "./List";

const Wrapper = styled.section`
    margin-top: 3rem;
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    gap: 2rem;
    
    @media(min-width: 767px){
        grid-template-columns: minmax(100px,400px) 1fr;
        align-items: center;
        gap: 5rem;
    }
    @media(min-width: 1024px){
        grid-template-columns: minmax(400px,600px) 1fr;
    }
`;
const InfoImage = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
`;
const InfoTitle = styled.h1`
    margin: 0;
    font-weight: var(--fw-normal);
`;
const ListGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    @media(min-width: 1024px){
        flex-direction: row;
        gap: 4rem;
    }
`;
const Lists = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;
const ListItem = styled.li`
    line-height: 1.8;
    
    & > b {
        font-weight: var(--fw-strong);
    }
`;
const Meta = styled.div`
    margin-top: 3rem;
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    align-items: flex-start;
    
    & > b{
        font-weight: var(--fw-strong);
    }
    
    @media(min-width: 1024px){
        flex-direction: row;
        align-items: center;
    }
`;
const TagGroup = styled.div`
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
`;
const Tag = styled.span`
    padding: 0 1rem;
    background-color: var(--colors-ui-base);
    box-shadow: var(--shadow);
`;

const Info = (props) => {
    const {name,nativeName,flag,capital,population,region,subregion,topLevelDomain,currencies=[],languages=[],borders=[],push} = props


    return (
        <Wrapper>
            <InfoImage src={flag} alt={name} />

            <div>
                <InfoTitle>{name}</InfoTitle>
                <ListGroup>
                    <Lists>
                        <ListItem>
                            <b>Native Name:</b> {nativeName}
                        </ListItem>
                        <ListItem>
                            <b>Population:</b> {nativeName}
                        </ListItem>
                        <ListItem>
                            <b>Region:</b> {nativeName}
                        </ListItem>
                        <ListItem>
                            <b>Sub region:</b> {nativeName}
                        </ListItem>
                        <ListItem>
                            <b>Capital:</b> {nativeName}
                        </ListItem>
                    </Lists>
                    <Lists>
                        <ListItem>
                            <b>Top level Domain</b>{topLevelDomain.map(el=>(<span key={el}></span>))}
                        </ListItem>
                        <ListItem>
                            <b>Currency</b>{topLevelDomain.map(c=>(<span key={c.code}>{c.name} </span>))}
                        </ListItem>
                        <ListItem>
                            <b>Top level Domain</b>{topLevelDomain.map(l=>(<span key={l.name}>{l.name}</span>))}
                        </ListItem>
                    </Lists>
                </ListGroup>
                <Meta>
                    <b>Border countries</b>
                    {!borders.length ? (<span>No border</span>)
                        :
                        <TagGroup>
                            {borders.map(x=>(<Tag key={x}>{x}</Tag>))}
                        </TagGroup>
                    }
                </Meta>
            </div>
        </Wrapper>
    );
};

export default Info;