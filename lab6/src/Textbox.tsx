import React from 'react';
import logo from './logo.svg';
import './App.css';
import Horoscope from "./Horoscope";

type textB = {
    label: string,
    change: (s : string) => void
}

function Textbox(props : textB) {
    return (
        <div>
            <label>{props.label}</label>
            <input type={'text'} onChange={e=>props.change(e.target.value)}/>
        </div>
    );
}

export default Textbox;
