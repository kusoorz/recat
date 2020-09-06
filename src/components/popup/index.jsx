import React from 'react'
import { createPortal } from 'react-dom'
import { classNames } from 'utils'

import './popup.scss'

const $body = document.getElementById('root') || document.body

class Popup extends React.Component {
    constructor (props) {
        super(props)
        this.el = document.createElement('div')
    }
    componentDidMount () {
        $body.appendChild(this.el)
    }
    componentWillUnmount () {
        $body.removeChild(this.el)
    }
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
    onClick = (e) => {
        if (e.target === e.currentTarget) {
            const { onClickBackground } = this.props
            typeof onClickBackground === 'function' && onClickBackground()
        }
    }
    render () {
        const { props } = this
        const display = props.show ? '' : 'none'
        return createPortal(
            <div className={classNames('i-popup', props.className)} style={{ display }} onClick={this.onClick}>
               {props.children}
            </div>,
            this.el
        )
    }
}

export default Popup