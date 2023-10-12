import React from 'react'
import styled from 'styled-components'
// import styled from 'sty'

const Background = () => {
  return (
   <BackGroundContainer>
    <img src='https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='No Internet'
    />
   
   </BackGroundContainer>
  )
}
const BackGroundContainer=styled.div`
        height:100vh;
        width: 100vw;
        img{
            height: 120vh;
            width: 100vw;
        }
`
export default Background