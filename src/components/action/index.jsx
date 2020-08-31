import React from 'react'
import { connect } from 'react-redux'
import { Toast, Dialog, Loading } from 'components'
import { showToast, showDialog } from 'store'

class Action extends React.Component {
    render () {
        const { toast, dialog, loading, dispatch } = this.props
        return (
            <React.Fragment>
                <Toast
                    show={toast.show}
                    text={toast.text}
                    onHide={() => dispatch(showToast({ show: false }))}>
                </Toast>
                <Dialog
                    show={dialog.show}
                    text={dialog.text}
                    title={dialog.title}
                    click={dialog.click}
                    cancel={dialog.cancel}
                    className={dialog.className}
                    clickText={dialog.clickText}
                    cancelText={dialog.cancelText}
                    onHide={() => dispatch(showDialog({ show: false }))}>
                </Dialog>
                <Loading
                    show={loading.show}>
                </Loading>
            </React.Fragment>
        )
    }
}

export default connect(({toast, dialog, loading}) => ({ toast, dialog, loading }))(Action)