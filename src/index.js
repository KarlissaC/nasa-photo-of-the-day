import styled, { keyframes } from 'styled-components'

const StyledApp = styled.div`
background-color: ${pr => pr.theme.backgroundColor};
font-family:${pr => pr.theme.bodyFont};
color: ${pr => pr.theme.textColor};
text-align: center;
`

const Header = styled.header`
padding:0 2%;
text-align: left;
display: flex;
align-items: center;
background-color: ${pr => pr.theme.backgroundColor};
border-bottom: 2px solid ${pr => pr.theme.accentColor};
justify-content: space-between;
div {
    display: flex;
    width: 30%;
    align-items: center;
}
h1, h2{
    font-family: ${pr => pr.theme.titleFont};
    font-size:2.3rem;
    text-transform: uppercase;
    display: inline-block;
    font-weight: normal;
    background: -webkit-linear-gradient(-90deg, rgba(239,186,211,1) 0%, rgba(161,99,245,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-left:1%;
}
a{
    font-family: ${pr => pr.theme.titleFont};
    font-size:2rem;
    cursor: pointer;
    transition: all .25s ease;
}
a:hover{
    color:white;
    transition: all .25s ease;
}
img{
    height:10vh;
}
`

const Links = styled.div`
justify-content: space-around;
`

const Image = styled.div`
height: 90vh;
width: 100%;
background-size: cover;
background-attachment: fixed;
background-image: url('${pr => pr.hdurl}');
`

const Section = styled.section`
background-color: ${pr => pr.theme.backgroundColor};
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
h2{
    font-family: ${pr => pr.theme.titleFont};
    text-transform: uppercase;
    font-weight: normal;
    background: -webkit-linear-gradient(-90deg, rgba(239,186,211,1) 0%, rgba(161,99,245,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`

const StyledExplanation = styled.div`
  color: ${pr => pr.theme.textColor};
  padding:5%;
  letter-spacing: .05rem;
  font-family: ${pr => pr.theme.bodyFont};
  line-height: 1.6;
`

const rotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`

const Logo = styled.div`
img{
    animation: ${rotate} 20s linear infinite;
    margin-right:5%;
}
cursor: pointer;
`

const Footer = styled.footer`
padding: 2% 0 2% 0;
color: ${pr => pr.theme.textColor};
border-top: 2px solid ${pr => pr.theme.textColor};
`

export { StyledApp, Header, Links, Image, Section, StyledExplanation, Logo, Footer }