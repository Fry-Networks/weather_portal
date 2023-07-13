import React, { useState } from 'react';
import { LinkKey } from '../server/AmbientWeather';
export default function SubmitKeyButton({ valid, apiKey, updateMessage, disappearInput }:
    { valid: boolean, apiKey: string, updateMessage: ({ message, color }: { message: string, color: string }) => void, disappearInput: Function }) {

    return (
        <button
            onClick={() => handleSubmit(apiKey, updateMessage, disappearInput)}
            style={{
                ...buttonStyle,
                backgroundColor: valid ? 'cyan' : 'gray',
                width: 'fit-content',
                alignSelf: 'center',
            }}
            disabled={!valid}
        >
            Submit API Key
        </button>
    );
}

const handleSubmit = async (apiKey: string, updateMessage: ({ message, color }: { message: string, color: string }) => void, disappearInput: Function) => {
    disappearInput(true);
    updateMessage({ message: 'Verifying Key', color: 'white' });
    const response: { verified: boolean, data: { message: string, color: string } } = await LinkKey(apiKey);
    updateMessage(response.data);
    if (!response.verified) disappearInput(false);

};




const buttonStyle = {
    backgroundColor: 'yellow',
    border: 'none',
    color: 'black',
    padding: '15px 32px',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '5px',
};


