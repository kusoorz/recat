import { SHOW_DIALOG } from './actions'

const initialState = {
    show: false,
    text: '',
    title: '',
    click () {},
    cancel () {},
    className: '',
    clickText: '',
    cancelText: ''
}

export const dialog = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_DIALOG:
            const { show = true, text, title, click, cancel, className, clickText = '确定', cancelText } = action
            return {
                ...state,
                show,
                text,
                title,
                click,
                cancel,
                className,
                clickText,
                cancelText
            }
        default:
            return state
    }
}