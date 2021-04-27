import React from 'react';
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

const MenuBlock = styled.div`
    margin-bottom: 20px;
`;

const MenuItem = styled(NavLink)`
    font-weight: 700;
    font-size: 16px;
    text-transform: uppercase;
    margin-bottom: 20px;
    padding: 8px 16px;
    border-radius: 20px;
    transition: 0.3s;
    margin-right: 10px;
    :hover {
        background: #eaeaea;
    }
`;

const Menu = () => (
    <MenuBlock>
        <MenuItem exact activeClassName="active-nav-link" to="/">Торты</MenuItem>
        <MenuItem exact activeClassName="active-nav-link" to="/cupcakes">Кексы</MenuItem>
        <MenuItem exact activeClassName="active-nav-link" to="/desserts">Десерты</MenuItem>
    </MenuBlock>
);

export default Menu;