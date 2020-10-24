import React from 'react'
import Template from '../component'
import { Image } from 'components'

class image extends React.Component {
    constructor (props) {
        super(props)
        this.title = 'Image组件'
        this.text = '图片展示组件'
        this.code = '<Image src="pic.jpg" />'
        this.list = [{
            name: 'show',
            type: 'boolean',
            text: '组件是否显示',
            value: 'false'
        }, {
            name: 'list',
            type: 'array',
            text: '图片列表'
        }, {
            name: 'src',
            type: 'string',
            text: '图片地址'
        }, {
            name: 'alt',
            type: 'string',
            text: '图片描述'
        }, {
            name: 'title',
            type: 'string',
            text: '图片标题'
        }, {
            name: 'style',
            type: 'object',
            text: '图片样式'
        }, {
            name: 'onShow',
            type: 'function',
            text: '组件显示时触发'
        }, {
            name: 'onHide',
            type: 'function',
            text: '组件隐藏时触发'
        }]
        this.test = <img src="https://avatars1.githubusercontent.com/u/47217620" alt="" width="120" onClick={this.onClick} />
        this.state = {
            show: false
        }
    }
    componentDidMount () {
        this._Ready = true
    }
    componentWillUnmount () {
        this._Ready = false
    }
    onClick = (e) => {
        let { target } = e
        this.onShow()
        this.setState({
            src: target.src
        })
    }
    onShow = () => this.setState({ show: !!1 })
    onHide = () => this.setState({ show: !!0 })
    render () {
        const { show, src } = this.state
        return (
            <Template
                title={this.title}
                text={this.text}
                code={this.code}
                test={this.test}
                list={this.list}>
                <Image show={show} src={src} onHide={this.onHide}></Image>
            </Template>
        )
    }
}

export default image