import React from 'react'
import styled from 'styled-components'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import Header from '../component/Header'

import {useState} from 'react'
import Background from '../component/Background'
import { firebaseAuth } from '../utils/firebase-config'

import { useNavigate } from 'react-router-dom'



const SignupPage = () => {
 
  const [showPassword, setshowPassword] = useState(false);
const [formValues, setformValues] = useState({email:"",password:""});
const navigate=useNavigate();
  const handlseSignin=async()=>{
    try {
      const{email,password}=formValues;
      await createUserWithEmailAndPassword(firebaseAuth,email,password);
    } catch (error) {
      console.log(error);
    }
  }
  onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if(currentUser) navigate("/");
  })
  return (
   <Container>
    <Background/>
    <div className='content'>
      <Header login/>
      <div className='body'>
        <div className='text'>
          <h1>Unlimited movies,TV Shows and more</h1>
          <h4> Watch anywhere,Cancel Anytime</h4>
          <h6>Ready to watch ?Enter your email to start membership</h6>
        </div>
        <div className='form'>
          {
            showPassword ? (
              <input 
              value={formValues.password} onChange={(e)=>setformValues({
                ...formValues,[e.target.name]: e.target.value
              })}type='password' placeholder='Enter password' name='password'/>
 
            ): <input type='email'   value={formValues.email} onChange={(e)=>setformValues({
              ...formValues,[e.target.name]: e.target.value
            })} name='email' placeholder='Enter email'/>
          }{
            !showPassword ? (

              <button onClick={()=>setshowPassword(true)}>Get Started</button>
            ):  <button onClick={handlseSignin}>Sign Up</button>
          }
         
        
        </div>
      </div>
    </div>
   </Container>
  )
}
const Container=styled.div`
  position: relative;
  .content{
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(0,0,0,0.59);
    height:120vh;
    width: 100vw;
    grid-template-columns: 15vh 85vh;
  }
  .body{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
  }
  .text{
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 2rem;
    color: white;
    padding: 1rem;
  }
  h1{
    padding: 0.25rem;
  }
  h4{
    /* margin-top: -1.5rem; */
  }
  h6{
    /* margin-top: -1.5rem; */
  }
  .form{
    display: grid;
    grid-template-columns: ${({showPassword})=>showPassword? "1fr 1fr": "5fr 1fr"};
    width: 60%;
    input{
      color: black;
      padding: 1.5rem;
      font-size:1.2rem;
      width: 45rem;
      &:focus{
        outline: none;
      }
    }
    button{
      padding: 0.5rem 1rem;
      background-color: red;
      border: none;
      cursor: pointer;
      color: white;
      font-size:1.05rem;
      width:  10rem;
      font-weight: bolder;
    }
  }

`
export default SignupPage