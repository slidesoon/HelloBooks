import React from 'react'
import {NavLink} from 'react-router-dom'
import {Navbar, NavItem} from 'react-materialize'
import css from '../css/style.scss'




export  class Header extends React.Component{
    render(){
    return(
        <header>
            <Navbar right className='transparent'>
                <NavItem href='#'>Log In</NavItem>
                <NavItem href='#'>Books</NavItem>
                <NavItem href='#'>My Profile</NavItem>
            </Navbar>
           
            
        </header>             
        
    );
    }

};
