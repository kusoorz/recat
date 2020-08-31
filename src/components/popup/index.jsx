import React from 'react'
import { classNames } from 'utils'

import './popup.scss'

class Popup extends React.Component {
    omponentDidUpdate (prevProps) {
        const { show, onShow, onHide } = this.props
        if (show !== prevProps.show) {
            show ? (
                typeof onShow === 'function' && onShow()
            ) : (
                typeof onHide === 'function' && onHide()
            )
        }
    }
    onClick = (e) => {
        if (e.target === e.currentTarget) {
            typeof this.props.onClick === 'function' && this.props.onClick()
        }
    }
    render () {
        const { props } = this
        const display = props.show ? '' : 'none'
        return (
            <div className={classNames('i-popup', props.className)} style={{ display }} onClick={this.onClick}>
               {props.children}
            </div>
        )
    }
}

export default Popup