import React from 'react'
import GetStarted from '../components/GetStarted';
import Card from '../components/Card';
import Carousel from '../components/Carousel';


const HomePage = ()=>{
    return(  
        <div>
            <GetStarted></GetStarted>
            <Carousel></Carousel>
            <Card></Card>
        </div>
    )
}
export default HomePage;