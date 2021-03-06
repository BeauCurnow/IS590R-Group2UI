import { Link } from "react-router-dom";
import styled from 'styled-components';
import { FaHome } from 'react-icons/fa'
import { FaUserAlt } from 'react-icons/fa'
import { BsCardText } from 'react-icons/bs'

const NavBar = styled.ul
`
list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`

const NavItem = styled.li`
  float: left;
  font-family: "Courier New";
`

const NavLink = styled.div`

  a
  {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  &:hover{
    background-color: #111;
  }
}
`


function Nav(){
    return(
        <NavBar>
          <NavItem><NavLink><Link to="/">Home <FaHome/></Link></NavLink></NavItem>
          <NavItem><NavLink><Link to="/login">Login <FaUserAlt /></Link></NavLink></NavItem>
          <NavItem><NavLink><Link to="/register">Register <BsCardText /></Link></NavLink></NavItem>
        </NavBar>
    );
}
export default Nav;