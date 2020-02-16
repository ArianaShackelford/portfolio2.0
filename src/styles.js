import styled from 'styled-components';

export const Portfolio = styled.div`
    display:flex;
    flex-direction: column;
    height: 100vw;
    align-items: center;
    background: #202328;
    color: #eaeee1;
`;

export const Nav = styled.nav`
    display: flex;
    width: 100%;
    justify-content: flex-end;
`;

export const NavigationLink = styled.a`
   text-decoration: none;
   color: #eaeee1;
   margin: 1rem;
   

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