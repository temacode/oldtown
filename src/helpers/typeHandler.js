const typeHandler = type => {
    switch (type) {
        case 'cupcake': {
            return {
                dimension: 'шт',
            };
        }
        case 'dessert': {
            return {
                dimension: 'шт',
            };
        }
        default: {
            return {
                dimension: 'кг',
            };
        }
    }
};

export default typeHandler;