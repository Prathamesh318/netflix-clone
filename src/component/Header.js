import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import logo from './log.png'

const Header = (props) => {

    const navigate=useNavigate();
  return (
        <HeaderContainer>
                <div className="log">
                    <img src={logo} alt='Logo'/>
                </div>
                <button onClick={()=>navigate(props.login? '/login':'/signup')}>
                    {props.login? 'Log in': 'Sign in'}
                </button>
        </HeaderContainer>
  )
}
const HeaderContainer=styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:0rem 4rem;
        .logo{
            img{
                height: 3 rem;
                cursor: pointer;
            }
        }
        button{
                padding: 0.5rem 1rem;
                background-color: red;
                border: none;
                cursor: pointer;
                color: white;
                border-radius: 0.2rem;
                font-weight: bold;
                font-size: 1.05rem;

        }
`
export default Header