import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Textbox from "./Textbox";
import axios from "axios"
// @ts-ignore
import { AwesomeButton } from "react-awesome-button";

function Horoscope() {
    const [sun, setSun] = useState("");
    const [moon, setMoon] = useState("");
    const [rising, setRise] = useState("");
    const [horoscope, setHoroscope] = useState([])
    const requestHoroscope = () => {
        const toSend = {
                //TODO: Pass in the values for the data. Follow the format the route expects!
                sun: sun,
                moon: moon,
                rising: rising
    };

        let config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }

        //Install and import axios!
        //TODO: Fill in 1) location for request 2) your data 3) configuration
        axios.post("http://localhost:4567/horoscope", toSend, config)
            .then(response => {
                console.log(response.data);
                //TODO: Go to the Main.java in the server from the stencil, and find what field name you should put here.
                //Note: It is very important that you understand how this is set up and why it works!
                setHoroscope(response.data["horoscope"]);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className="Horoscope">
            <Textbox label={"Sun Sign"} change={setSun}/>
            <Textbox label={"Moon Sign"} change={setMoon}/>
            <Textbox label={"Rising Sign"} change={setRise}/>
            <AwesomeButton type="primary" onPress={requestHoroscope}>Button</AwesomeButton>
            <div id="horoscope">{horoscope.map((x)=>{return (<p>{x}</p>)})}</div>
        </div>
    );
}

export default Horoscope;
