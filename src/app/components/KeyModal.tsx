import React, { useContext, useEffect, useState } from "react";
import Modal from 'react-modal';
import KeyInput from "./KeyInput";
import SubmitKeyButton from "./SubmitKeyButton";

const logo = "https://ambientweather.com/media/logo/stores/8/ambientweather-logo2.png"
export default function KeyModal({ isOpen }: { isOpen: boolean }) {
    const [apiKey, setApiKey] = useState('');
    const [valid, setValid] = useState(false);
    const [message, updateMessage] = useState({ message: '', color: 'white' });
    const [disappear, setDisappear] = useState(false);
    return (
        <Modal
            isOpen={isOpen}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.75)'
                },
                content: {
                    backgroundColor: 'RGB(12, 167, 229)',
                    color: 'white',
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)'
                }
            }}
        >

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <img src={logo} alt="Ambient Weather Logo" style={{
                    width: '70%',
                    marginBottom: '20px'
                }} />
                <h1 style={{ fontSize: '25px' }}>Please enter your Ambient Weather API Key below:</h1>
                <p style={{ fontSize: '12px', marginBottom: '25px' }}>Your API Key only allows access to your devices data, nothing more. You can verify that  <a style={{
                    textDecoration: 'underline',
                }} href="https://ambientweather.docs.apiary.io/#introduction/authentication">here</a>.</p>

                <KeyInput apiKey={apiKey} setApiKey={setApiKey} setValid={setValid} disappear={disappear}/>

                <SubmitKeyButton valid={valid} apiKey={apiKey} updateMessage={updateMessage} disappearInput={setDisappear}/>

                <p style={{ color: message.color, fontSize: '12px', marginTop: '10px' }}>{message.message}</p>

            </div>

        </Modal>



    )


}