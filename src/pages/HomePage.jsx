import React, {useEffect, useState} from 'react';
import axios from "axios";
import {ALL_COUNTRY} from "../config";
import {Controls} from "../components/Controls";
import List from "../components/List";
import Card from "../components/Card";
import Main from "../components/Main";

const HomePage = () => {
    const [countries,setCountries] = useState([])

    useEffect(()=>{
        axios.get(ALL_COUNTRY)
            .then(({data})=>setCountries(data))
    },[])

    return (
        <>
                <Controls/>
                <List>
                    {countries.map(el=>{
                        const countryInfo = {
                            img: el.flags.png,
                            name: el.name,
                            info: [
                                {
                                    title: 'Population',
                                    description: el.population.toLocaleString()
                                },
                                {
                                    title: 'Region',
                                    description: el.region
                                },
                                {
                                    title: 'Capital',
                                    description: el.capital
                                },
                            ],
                        };
                        return <Card key={el.name} {...countryInfo}/>
                    })}
                </List>

        </>
    );
};

export default HomePage;