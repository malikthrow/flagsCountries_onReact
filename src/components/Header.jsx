import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Container} from "./Container";
import {IoMoon,IoMoonOutline} from "react-icons/io5";
import {Link} from "react-router-dom";

const HeaderEi = styled.header`
    box-shadow: var(--shadow);
    background-color: var(--colors-ui-base);
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 0
`;
const Title = styled(Link).attrs({to: '/'})`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    text-decoration: none;
    font-weight: var(--fw-bold);
`;
const ModeSwitch = styled.div`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    cursor: pointer;
    font-weight: var(--fw-bold);
    text-transform: capitalize;
`;

const Header = () => {

    const [theme, setTheme] = useState('light');

    const toggleTheme = ()=> setTheme(theme === 'light' ? 'dark' : 'light');

    useEffect(()=>{
        document.body.setAttribute('data-theme', theme)
    },[theme])

    return (
        <HeaderEi>
            <Container>
                <Wrapper>
                    <Title>Where is the world</Title>
                    <ModeSwitch onClick={toggleTheme}>
                        {theme === 'light' ? <IoMoonOutline size={14} /> : <IoMoon size={14}/>}
                        <span style={{margin: "1rem"}}>{theme} Theme</span>
                    </ModeSwitch>
                </Wrapper>
            </Container>
        </HeaderEi>
    );
};

export default Header;