const reducer = (state, action) => {
    switch (action.type) {
        
        case 'LOADING':
            return {...state, loading: true}

        case 'DISPLAY_ITEMS':
            return {...state, cart: action.payload, loading:false}

        case 'CLEAR_CART':
            return {...state, cart: []}

        case 'REMOVE_ITEM':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }

        case 'UPDATE_AMOUNT':

            const cartItem = state.cart.find(item => item.id === action.payload.id) //Get the item with the given id
            const newAmount = cartItem.amount + action.payload.amount // calculate the new amount

            // If the number of items is 0 remove the item from the cart
            if(newAmount === 0) { 
              return {
                  ...state,
                  cart: state.cart.filter(item => item.id !== action.payload.id),
                }
            } else {
              // Update the cart with the new updated item
              return {
                ...state,
                cart: state.cart.map(item => (item.id === action.payload.id ? { ...item, amount: newAmount } : item)),
              }
            } 
              
        case 'GET_TOTALS':
            // Use reduce function to update both total price and total items
            const {total, amount} = state.cart.reduce(
                (cartTotal, cartItem) => {
                    return {
                        total: cartTotal.total + cartItem.price * cartItem.amount,
                        amount: cartTotal.amount + cartItem.amount
                    }
            }, {total:0, amount:0})
            return {...state, total:total.toFixed(2), amount}

        default:
            // throw an error if the action type is different from the above list
            throw new Error('no matching action type')
    }
}

export default reducer