import React, {useEffect, useState} from 'react';
import axios from "axios";
import {ALL_COUNTRY} from "../config";
import {Controls} from "../components/Controls";
import List from "../components/List";
import Card from "../components/Card";
import {useLocation, useNavigate} from "react-router-dom";
import Lazy from "../components/Lazy";
import {useMatchMedia} from "../hooks/use-match-media";


const HomePage = ({countries, setCountries}) => {
    const {isMobile,isTablet,isDesktop} = useMatchMedia()
    const [filtered,setFiltered] = useState(countries)
    const [isLazy,setIsLazy] = useState(false)
    const navigate = useNavigate();

    const handleSearch = (searchWord,region)=>{
        let data = [...countries];
        if (region){
            data = data.filter(c=>c.region.includes(region))
        }
        if (searchWord){
            data = data.filter(c=>c.name.toLowerCase().includes(searchWord.toLowerCase()))

        }
        setFiltered(data)
    }

    useEffect(()=>{
        if (!isLazy){
            setIsLazy(true)
        }
      handleSearch();
    },[countries])

    useEffect(()=>{
        if (!countries.length){
        axios.get(ALL_COUNTRY)
            .then(({data})=>setCountries(data))
            .then(()=>setIsLazy(true))
        }

    },[])

    return (
        <>
                <Controls onSearch={handleSearch}/>
                <List>

                    {isLazy ? filtered.map(el=>{
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
                        return <Card key={el.name} {...countryInfo} onClick={()=>navigate(`/country/${el.name}`)} />

                    })
                        : <Lazy/>
                    }
                </List>


        </>
    );
};

export default HomePage;