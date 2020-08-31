import { SHOW_TOAST } from './actions'

const initialState = {
    show: false,
    text: ''
}

export const toast = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_TOAST:
            const { show = true, text = state.text } = action
            return {
                ...state,
                show,
                text
            }
        default:
            return state
    }
}