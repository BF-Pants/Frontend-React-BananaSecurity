import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from "axios"

function SignIn() {
    const { login } = useContext(AuthContext);
    const [error, toggleError] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);

        try {
            const response = await axios.post('https://novi-backend-api-wgsgz.ondigitalocean.app/api/login' , {
                email: email,
                password: password,
            },
                {
                headers: {
                    'novi-education-project-id': '39cb5325-95c1-4319-a258-146625bf33ea'
                }}
            )
            login(response.data);
            console.log(response.data);
        } catch (e) {
            console.error(e);
            toggleError(true);

        }
    }

  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

      <form onSubmit={handleSubmit}>
          <label htmlFor="email-field">
              <input
                  type="email"
                  id="email-field"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
              />
          </label>

          <label htmlFor="password-field">
              <input
              type="password"
              id="password-field"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
          </label>

          {error && <p>De gegeven e-mail of wachtwoord is onjuist</p>}

        <button type="submit" className="form-button">Inloggen</button>
      </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;