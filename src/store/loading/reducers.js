import { SHOW_LOADING } from './actions'

const initialState = {
    show: false
}

export const loading = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADING:
            const { show } = action
            return {
                ...state,
                show
            }
        default:
            return state
    }
}