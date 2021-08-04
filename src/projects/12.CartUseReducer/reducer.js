const reducer = (state, action) => {
    switch (action.type) {

        case 'CLEAR_CART':
            // Cleare all the cart items
            return {...state, cart: []}
    
        default:
            throw new Error('no matching action type')
    }
}

export default reducer