import React from 'react';
import {NavLink} from 'react-router-dom';
import {NavigationLink, Button, Nav} from '../styles';

export default function Header(){
    return (
        <Nav>
            <NavigationLink href='https://github.com/ArianaShackelford/' alt='Github'>Github</NavigationLink>
            <NavigationLink href='https://www.linkedin.com/in/ariana-shackelford-87579756/' alt='Linkedin'>Linkedin</NavigationLink>
            <NavigationLink href='' alt='twitter' />
        </Nav>
        )
}

