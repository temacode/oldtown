import React from 'react';
import MainContentContainer from './components/MainContentContainer';
import { Switch, Route } from 'react-router-dom';
import PaymentResultContainer from './components/PaymentResultContainer';
import NotificationContainer from './components/NotificationContainer';
import Docs from './components/Docs';

function App() {
    return (
        <>
            <Switch>
                <Route path="/payment">
                    <PaymentResultContainer></PaymentResultContainer>
                </Route>
                <Route path="/docs">
                    <Docs></Docs>
                </Route>
                <Route path="/legal">
                    <Docs type="legal"></Docs>
                </Route>
                <Route path="/return">
                    <Docs type="return"></Docs>
                </Route>
                <Route path="/refund">
                    <Docs type="refund"></Docs>
                </Route>
                <Route path="/problems">
                    <Docs type="problems"></Docs>
                </Route>
                <Route path="/paymentmethods">
                    <Docs type="paymentmethods"></Docs>
                </Route>
                <Route path="/terms">
                    <Docs type="terms"></Docs>
                </Route>
                <Route path="/ssl">
                    <Docs type="ssl"></Docs>
                </Route>
                <Route path="/">
                    <MainContentContainer></MainContentContainer>
                </Route>
            </Switch>
            <NotificationContainer></NotificationContainer>
        </>
    );
}

export default App;
