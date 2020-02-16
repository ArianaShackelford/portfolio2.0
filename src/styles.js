import styled from 'styled-components';

export const Portfolio = styled.div`
    display:flex;
    flex-direction: column;
    height: 100vw;
    align-items: center;
    background: #202328;
    color: #eaeee1;
    font-family: 'Abel', sans-serif;
`;

// ---------------------------------------- Navigation

export const Nav = styled.nav`
    display: flex;
    width: 100%;
    justify-content: flex-end;
`;

export const NavigationLink = styled.a`
    width: 10%;
    display: flex;
    justify-content: center;
    text-decoration: none;
    margin: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    color: #eaeee1;
    background: #819c84;
    &:hover{
        color: #eaeee1;
        background: #717880;
   }

`;

// --------------------------------------- Bio


export const Biosection = styled.div`
   display: flex;
   justify-content: space-evenly;
   margin-top: 5rem;
`;

export const Intro = styled.div`
   display: flex;
   flex-direction: column;
   width: 40%;
   margin: 2rem;
   padding: 1rem;
   line-height: 1.6;
   font-size: 20px;
`;

export const Img = styled.img`
   width: 40rem;
   height: 30rem;
   margin: 1rem;
   justify-content: flex-start;
`;

export const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;