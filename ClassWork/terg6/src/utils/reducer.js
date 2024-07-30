export const initialState = {
    data: null,
    selectedCoin: null
}

export function reducer(state, action) {
    switch (action.type) {
        case "SET_DATA":
            return { ...state, data: action.payload }
        case "SET_SELECTED_COIN":
            return { ...state, selectedCoin: action.payload }
        default:
            return state
    }
}

