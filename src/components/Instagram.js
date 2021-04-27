import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
    display: inline-block;
    padding:16px 16px;
    background: linear-gradient(108.77deg, #F53333 0%, #3A40D5 100%);
    border-radius: 6px;
    box-shadow: 0px 9px 36px rgba(0, 0, 0, 0.27);
    color: white;
    font-weight: 700;
    max-width: 400px;
    margin:  auto;
    margin-top: 20px;
    i {
        color: white;
        margin-right: 10px;
    }
`;

const Instagram = () => {
    return (
        <Link href="https://instagram.com/tort_oldtown?igshid=47ipfwdeoudi" tagret="blank">
            <i className="fas fa-external-link-alt"></i>
            Наш инстаграм
        </Link>
    );
};

export default Instagram;