export const SHOW_TOAST = 'SHOW_TOAST'

export const showToast = ({show, text}) => ({
    type: SHOW_TOAST,
    show,
    text
})