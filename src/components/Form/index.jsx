import React from 'react';
import styled from 'styled-components';


const StyleForm = styled.form`
    display: grid;
    width: 35%;
    border: 1px solid black;
    padding: .5em;
    margin: 0 auto;
    text-align: left;
    background-color: #A8DCD9;

    input {
        width: 100%;
        margin-bottom: 20px;
    }

    #message {
        height: 200px;
    }

    button {
        width: 45%;
        font-size: .9rem;
        font-weight: bold;
        text-align: center;
        margin: 0 auto;
        background-color: black;
        color: white;

        &:hover {
            transition: 1s;
            transform: scale(1.1);
            cursor: pointer;
        }
    }
`;


function Form() {
    return (
        <>
        <StyleForm>
        <label htmlFor="firstname">Firstname:</label>
        <input type='text' />
        <label htmlFor='lastname'>Lastname:</label>
        <input type="text"/>
        <label htmlFor="phonenumber">Phonenumber:</label>
        <input type="number"/>
        <label htmlFor="message">Message:</label>
        <input type="text" id="message"/>                
        <button>Send</button>
        </StyleForm>
        </>
    )
}

export default Form;