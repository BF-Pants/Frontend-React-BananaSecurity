import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useState,  } from 'react'
import axios from 'axios'

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);

        try {
            await axios.post('https://novi-backend-api-wgsgz.ondigitalocean.app/api/users', {
                email: email,
                password: password,
                roles: ["member"],
            },
            {
                headers: {
                    'novi-education-project-id': '39cb5325-95c1-4319-a258-146625bf33ea'
                }}
        );
            navigate('/signin');

        } catch(e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(false);
    }
  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email-field">
                E-mail:
                <input
                    type="email"
                    id="email-field"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>

            <label htmlFor="password-field">
                Wachtwoord:
                <input
                    type="password"
                    id="password-field"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>

            {error && <p>Dit account bestaand al. Probeer een ander e-mail adres</p>}

            <button type="submit" className="form-button" disabled={loading}>Registeren</button>
        </form>

      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>

    </>
  );
}

export default SignUp;