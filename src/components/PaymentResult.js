import React from 'react';
import { useLocation, Redirect, NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import Spinner from './Spinner';
import PaymentContainer from './PaymentContainer';
import Content from './Content';

const StyledContent = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
`;

const Icon = styled.i`
    font-size: 90px;
    color: ${({ error }) => error ? '#ca5151' : '#67b660'};
    margin-bottom: 20px;
`;
const LoadingBlock = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    p {
        margin-top: 20px;
    }
`;

const Text = styled.p`
    font-weight: ${({ bold }) => bold ? '700' : '500'};
    font-size: ${({ bold }) => bold ? '24px' : '16px'};
    line-height: 1.5;
    margin-bottom: ${({ marginBottom }) => marginBottom ? '20px' : '0'};
`;

const BigText = styled(Text)`
    font-weight: 900;
    line-height: 1;
    font-size: 50px;
    text-align: left;
    color: ${({ red }) => red ? '#BB5955' : '#7AB46A'};
    margin-bottom: 20px;
`;

const PayButton = styled.div`
    display: block;
    cursor: pointer;
    padding: 16px;
    background: #7AB46A;
    color: white;
    border-radius: 6px;
    font-weight: 700;
    margin-top: 20px;
`;

const LinkBack = styled(NavLink)`
    display: inline-block;
    cursor: pointer;
    padding: 8px 16px;
    background: #eaeaea;
    border-radius: 6px;
    font-weight: 700;
    margin-top: 20px;
`;

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const PaymentResult = props => {
    let query = useQuery();
    const orderId = query.get('orderId');

    if (!orderId) {
        return <Redirect to="/"></Redirect>;
    }
    if (!props.paymentStatus) {
        props.checkPayment(orderId);
        return (
            <StyledContent>
                <LoadingBlock>
                    <Spinner></Spinner>
                    <Text>Загрузка</Text>
                </LoadingBlock>
            </StyledContent>
        );
    }
    if (props.isPaymentSuccess) {
        console.log('render');
        const extras = props.selectedExtras.map((e, i) => <Text key={ i }>{e.name}</Text>);
        return (
            <StyledContent>
                <BigText>Спасибо за заказ!</BigText>
                <Text marginBottom>
                    Ваш заказ успешно оплачен и передан кондитеру. Он свяжется с Вами ближайшее время. На почту отправлено письмо с деталями заказа
                </Text>
                <Text bold>Номер заказа: #{props.orderNumber}</Text>
                <Text bold>Детали заказа:</Text>
                <Text><b>Название торта:</b> {props.product ? props.product.name : ''}</Text>
                <Text><b>Дополнения:</b></Text>
                {extras}
                <LinkBack to="/">Вернуться на главную</LinkBack>
            </StyledContent>
        );
    }
    return (
        <Content isModalHidden={ props.isModalHidden }>
            <BigText red>Не удалось оплатить заказ</BigText>
            <Text>Попробуйте еще раз</Text>
            <PayButton onClick={ props.showPayment }>Попробовать еще раз</PayButton>
            <LinkBack to="/">Вернуться на главную</LinkBack>
            <PaymentContainer></PaymentContainer>
        </Content>
    );
};

export default PaymentResult;