import React from 'react'
import Popup from '../popup'
import { classNames } from 'utils'

import './dialog.scss'

class Dialog extends React.Component {
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
    click (btn) {
        const { click, cancel } = this.props
        btn ? (
            click && typeof click === 'function' && click()
        ) : (
            cancel && typeof cancel === 'function' && cancel()
        )
        this.onHide()
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
        const { text, title, children, className, clickText, cancelText } = this.props
        return (
            <Popup className={classNames('i-dialog', className)} show={show}>
                <div className="dialog">
                    <div className="content">
                        {title && <div className="title">{title}</div>}
                        {children || text}
                    </div>
                    <div className="buttons">
                        { clickText && <span className="btn yes" onClick={() => this.click(1)}>{clickText}</span> }
                        {cancelText && <span className="btn not" onClick={() => this.click(0)}>{cancelText}</span>}
                    </div>
                </div>
            </Popup>
        )
    }
}

export default Dialog