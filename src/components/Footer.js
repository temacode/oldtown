import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
    min-height: 500px;
    overflow: hidden;
    padding-bottom: 50px;
`;

const HeaderText = styled.h3`
    font-size: 24px;
`;
const Tel = styled.a`
    display: inline-block;
    padding: 8px 16px;
    border-radius: 6px;
    background: #393939;
    color: white;
    margin-top: 20px;
    i {
        color: white;
    }
`;

const Text = styled.p`
    font-size: 24px;
    font-weight: 700;
    margin-top: 20px;
`;

const SubText= styled(Text)`
    font-weight: 500;
    font-size: 20px;
    margin-top: 10px;
`;

const Footer = () => {
    return (
        <StyledFooter>
            <HeaderText>Контакты:</HeaderText>
            <Tel href="tel: +7(980) 561-09-26">
                <i className="fas fa-phone-alt"></i> Позвонить
            </Tel><br />
            <Tel target="_blank" href="https://api.whatsapp.com/send?phone=79805610926">
                <i className="fab fa-whatsapp"></i> Написать
            </Tel><br />
            <Tel href="mailto: info@tort-rzn.ru">
                <i className="fas fa-envelope"></i> Почта
            </Tel>
            <Text>
                Адрес:
            </Text>
            <SubText>г. Рязань, ул. Мюнстерская, д. 2</SubText>
            <Text>Документы:</Text>
            <a href="/terms"><SubText>Термины и определения</SubText></a>
            <a href="/legal"><SubText>Реквизиты</SubText></a>
            <a href="/paymentmethods"><SubText>Способы оплаты</SubText></a>
            <a href="/return"><SubText>Условия возврата</SubText></a>
            <a href="/refund"><SubText>Условия возврата денежных средств</SubText></a>
            <a href="/problems"><SubText>Возможные проблемы при проведении оплаты</SubText></a>
            <a href="/docs"><SubText>Политика обработки персональных данных</SubText></a>
            <a href="ssl"><SubText>Описание процесса передачи данных/информация о SSL-шифровании</SubText></a>
        </StyledFooter>
    );
};

export default Footer;