import React from 'react'
import Popup from '../popup'

import './toast.scss'

class Toast extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            show: props.show || !1
        }
    }
    componentDidUpdate (prevProps) {
        const { show } = this.props
        if (show !== prevProps.show) {
            show ? (
                this.onShow()
            ) : (
                this.onHide()
            )
        }
    }
    onShow () {
        const { onShow } = this.props
        onShow && typeof onShow === 'function' && onShow()
        this.setState({ show: true })
    }
    onHide () {
        const { onHide } = this.props
        onHide && typeof onHide === 'function' && onHide()
        this.setState({ show: false })
    }
    render () {
        const { show } = this.state
        const { text } = this.props
        return (
            <Popup className="i-toast" show={show}>
                <div className="toast">{text}</div>
            </Popup>
        )
    }
}

export default Toast