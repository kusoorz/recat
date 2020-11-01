import React from 'react'
import { Popup } from 'components'
import { classNames } from 'utils'

import './image.scss'

import blank from './blank.png'

export const IMG = (props) => {
    const { className, src = '', alt = '', title = '', style = {}, onLoad, onError, onClick } = props
    return (
        <img
            className={classNames(className)}
            src={src}
            alt={alt}
            title={title}
            style={style}
            onLoad={(e) => typeof onLoad === 'function' && onLoad(e)}
            onError={(e) => typeof onError === 'function' && onError(e)}
            onClick={(e) => typeof onClick === 'function' && onClick(e)} />
    )
}

class Image extends React.Component {
    constructor (props) {
        super(props)
        let { show = !1, src = blank, alt = '', title = '' } = props
        this.state = {
            ready: !1,
            show,
            src,
            alt,
            title
        }
    }
    componentDidUpdate (prevProps) {
        const { props } = this
        const { show } = props
        if (show !== prevProps.show) {
            show ? (
                this.onShow() || this.onClick(props)
            ) : (
                this.onHide()
            )
        }
    }
    onClick (res) {
        let { src = '', alt = '', title = '' } = res
        this.setState({
            src,
            alt,
            title,
            ready: this.state.src === src
        })
    }
    onLoad () {
        this.setState({
            ready: true
        })
    }
    onShow () {
        const { props } = this
        props.onShow && typeof props.onShow === 'function' && props.onShow()
        this.setState({
            show: true
        })
    }
    onHide () {
        const { props } = this
        props.onHide && typeof props.onHide === 'function' && props.onHide()
        this.setState({
            show: false
        })
    }
    render () {
        const { show, src, alt, title, ready = !1 } = this.state
        const { className, list = [] } = this.props
        return (
            <Popup className={classNames('i-gallery', className)} show={show} onClickBackground={() => this.onHide()}>
                <div className="display">
                    <div className={classNames('box', ready || 'loading')}>
                        <div className="btn" onClick={() => this.onHide()}></div>
                        <IMG className="img" onLoad={(e) => this.onLoad(e)} {...{ src, alt, title }} />
                    </div>
                </div>
                <div className="gallery">
                    {
                        list.length > 1 &&
                        <ul>
                            {
                                list.map((data, id) => {
                                    switch (typeof data) {
                                        case 'object':
                                            break
                                        case 'string':
                                            let src = data
                                            data = { src }
                                            break
                                        default:
                                            data = {}
                                    }
                                    return (
                                        data.src &&
                                        <li onClick={() => this.onClick(data)} key={id}>
                                            <IMG {...data} />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    }
                </div>
            </Popup>
        )
    }
}

export default Image