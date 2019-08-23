import React, {useState} from "react"
// import Axios from "axios"
import styled from "styled-components"

export default function Login(props) {

    const [user, setUser] = useState({});

    const handleChange = e => {
        const inputUser = {
            ...user, [e.target.name]: e.target.value
        }
        setUser(inputUser);
    }

    const handleLogin = e => {
        e.preventDefault();
        console.log("in login")
    }

    const handleSignup = e => {
        e.preventDefault();
        console.log("in signup")
    }

   return (
        <LoginWrapper>
          <form>
            <label>
              Username
              <input
                type="text"
                name="username"
                placeholder="Your username"
                value={user.username}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Password
              <input
                type="password"
                name="password"
                placeholder="Your password"
                value={user.password}
                onChange={handleChange}
                required
              />
            </label>
            </form>
          <button onClick={handleLogin}>Log In</button> or 
          <button onClick={handleSignup}>Sign Up</button>
        </LoginWrapper>
      );
    }

    
    const LoginWrapper = styled.div`
      display: flex;
      flex-direction: column;
      width: 100vw;
      height: 100vh;
      justify-content: center;
      align-items: center;
      div {
        margin-bottom: 2rem;
      }
    
      form {
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;
        label {
          display: flex;
          flex-direction: column;
          margin-bottom: 1rem;
          input {
            padding: 0.5rem;
          }
        }
      }
      button {
        padding: 0.5rem;
      }
    `;
    