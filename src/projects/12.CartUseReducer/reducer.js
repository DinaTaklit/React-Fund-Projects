const reducer = (state, action) => {
    switch (action.type) {
        case 'LOADING':
            return {...state, loading: true}
        case 'DISPLAY_ITEMS':
            return {...state, cart: action.payload, loading:false}
        case 'CLEAR_CART':
            return {...state, cart: []}
        case 'REMOVE_ITEM':
            return {...state}
        case 'UPDATE_AMOUNT':
            return {...state}
        case 'GET_TOTALS':
            return {...state}
        default:
            throw new Error('no matching action type')
    }
}

export default reducer