import React from 'react';
import styled from 'styled-components/macro';

const notificationTypeHandler = type => {
    switch (type) {
        case 'success': {
            return '#67b660';
        }
        case 'error': {
            return '#ca5151';
        }
        default: {
            return '#292929';
        }
    }
};

const NotificationContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 90%;
    padding: 16px;
    box-sizing: border-box;
    background: ${({ type }) => notificationTypeHandler(type)};
    border-radius: 6px;
    transition: 0.3s;
    bottom: ${({ isShowing }) => isShowing ? '20px' : '-100px'};
    left: 5%;
    display: flex;
    align-items: center;
    @media screen and (min-width: 759px) {
        width: 350px;
        left: 50%;
        transform: translateX(-50%);
    }
`;

const Icon = styled.div`
    margin-right: 10px;
    font-size: 24px;
`;

const Text = styled.p`
    color: white;
    font-weight: 600;
`;

const Notification = props => (
    <NotificationContainer isShowing={ props.isShowing } type={ props.type }>
        <Icon>{props.icon || '📬'}</Icon>
        <Text>
            {props.message}
        </Text>
    </NotificationContainer>
);

export default Notification;