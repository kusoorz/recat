import React from 'react'
import Popup from '../popup'

import './loading.scss'

class Loading extends React.Component {
    componentDidUpdate (prevProps) {
        const { show, onShow, onHide } = this.props
        if (show !== prevProps.show) {
            show ? (
                typeof onShow === 'function' && onShow()
            ) : (
                typeof onHide === 'function' && onHide()
            )
        }
    }
    render () {
        const { props } = this
        return (
            <Popup className="i-loading" show={props.show}>
                <div className="loading"></div>
            </Popup>
        )
    }
}

export default Loading