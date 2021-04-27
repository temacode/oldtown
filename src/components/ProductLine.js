import React from 'react';
import styled from 'styled-components';
import HeaderText from './HeaderText';
import Product from './Product';
import { Switch, Route } from 'react-router-dom';
import MenuContainer from './MenuContainer';

const Content = styled.div`

`;

const ProductLineContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
`;

class ProductLine extends React.Component {
    componentDidMount() {
        this.props.loadProduct();
    }

    render() {
        const cakes = this.props.products.filter(e => e.type === 'cake').map((e, i) => {
            return (
                <Product { ...e }
                    product={ e }
                    showProduct={ this.props.showProduct }
                    showPayment={ this.props.showPayment }
                    key={ i }>
                </Product>
            );
        });

        const cupcakes = this.props.products.filter(e => e.type === 'cupcake').map((e, i) => {
            return (
                <Product { ...e }
                    product={ e }
                    showProduct={ this.props.showProduct }
                    showPayment={ this.props.showPayment }
                    key={ i }>
                </Product>
            );
        });

        const desserts = this.props.products.filter(e => e.type === 'dessert').map((e, i) => {
            return (
                <Product { ...e }
                    product={ e }
                    showProduct={ this.props.showProduct }
                    showPayment={ this.props.showPayment }
                    key={ i }>
                </Product>
            );
        });

        return (
            <Content>
                <HeaderText>Меню</HeaderText>
                <MenuContainer></MenuContainer>
                <ProductLineContainer>
                    <Switch>
                        <Route path="/desserts">
                            {desserts}
                        </Route>
                        <Route path="/cupcakes">
                            {cupcakes}
                        </Route>
                        <Route path="/">
                            {cakes}
                        </Route>
                    </Switch>
                </ProductLineContainer>
            </Content>
        );
    }
}

export default ProductLine;