export const SHOW_DIALOG = 'SHOW_DIALOG'

export const showDialog = ({show, text, title, click, cancel, className, clickText, cancelText}) => ({
    type: SHOW_DIALOG,
    show,
    text,
    title,
    click,
    cancel,
    className,
    clickText,
    cancelText
})