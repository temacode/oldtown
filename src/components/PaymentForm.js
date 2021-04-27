import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components/macro';
import ButtonsList from './ButtonsList';
import Button from './Button';
import SubmitButton from './SubmitButton';

const StyledForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
`;

const FieldBlock = styled.div`
    width: 100%;
    margin-bottom: 10px;
`;

const FieldWrap = styled.label`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 100%;
    border: ${({ error }) => error ? '1px solid #ff9e9e' : '1px solid #eaeaea'};
    border-radius: 12px;
    padding: 0 0 0 16px;
    margin-bottom: 5px;
`;

const FieldName = styled.p`
    font-weight: 700;
    font-size: 16px;
    margin-right: 5px;
    white-space: nowrap;
`;

const StyledField = styled.input`
    width: 100%;
    height: 40px;
    outline: none;
    border: none;
    padding: 8px 16px 8px 8px;
    background: none;
`;

const ErrorMessage = styled.div`
    width: 100%;
    color: #c54747;
`;

export const PaymentIcon = styled.img`
    width: 20px;
    align-self: baseline;
    margin: auto 5px;
`;

const HelpText = styled.p`
    width: 100%;
    text-align: center;
    color: #999;
    font-size: 12px;
`;

const renderField = ({ input, label, title, type, meta: { touched, error } }) => (
    <FieldBlock>
        <FieldWrap error={ (touched && error) }>
            <FieldName>{title}:</FieldName>
            <StyledField { ...input }
                type={ type }
                placeholder={ label }>
            </StyledField>
        </FieldWrap>
        {touched && (error && <ErrorMessage>{error}</ErrorMessage>)}
    </FieldBlock>
);

const required = value => value ? undefined : 'Обязательное поле';
const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Неверный адрес Email'
    : undefined;
const phone = value => !/^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/gm.test(value)
    ? 'Неверный телефон'
    : undefined;

let PaymentForm = ({ handleSubmit, hidePayment, isLoading }) => {
    return (
        <StyledForm onSubmit={ handleSubmit }>
            <Field name="firstName"
                type="text"
                component={ renderField }
                label="Как Вас зовут?"
                title="Имя"
                validate={ required } />
            <Field name="tel"
                type="tel"
                component={ renderField }
                label="+7 (123) 456-78-90"
                title="Телефон"
                validate={ phone } />
            <Field name="email"
                type="text"
                component={ renderField }
                title="Почта"
                label="example@ex.com"
                validate={ [ required, email ] } />
            <ButtonsList>
                <Button secondary onClick={ hidePayment }>Закрыть</Button>
                <SubmitButton isLoading={ isLoading } name="submit" type="submit">Оплатить</SubmitButton>
            </ButtonsList>
            <HelpText>Оплата происходит через платежный шлюз ПАО "СБЕРБАНК"</HelpText>
        </StyledForm>
    );
};

PaymentForm = reduxForm({
    form: 'paymentForm',
})(PaymentForm);

export default PaymentForm;