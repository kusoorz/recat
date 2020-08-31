export const SHOW_LOADING = 'SHOW_LOADING'

export const showLoading = (show = true) => ({
    type: SHOW_LOADING,
    show
})