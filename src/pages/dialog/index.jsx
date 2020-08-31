import React from 'react'
import Template from '../component'
import { Dialog } from 'components'

class dialog extends React.Component {
    constructor (props) {
        super(props)
        this.title = 'Dialog组件'
        this.text = '内容弹窗组件'
        this.code = '<Dialog show={show} click={onclick}>这就是弹窗</Dialog>'
        this.list = [{
            name: 'show',
            type: 'boolean',
            text: '组件是否显示',
            value: 'false'
        }, {
            name: 'text',
            type: 'string',
            text: '弹窗展示内容'
        }, {
            name: 'children',
            type: 'component',
            text: '弹窗展示内容, 设置后忽略text参数'
        }, {
            name: 'title',
            type: 'string',
            text: '弹窗标题'
        }, {
            name: 'click',
            type: 'function',
            text: '点击默认按钮时触发'
        }, {
            name: 'cancel',
            type: 'function',
            text: '点击取消按钮时触发'
        }, {
            name: 'clickText',
            type: 'string',
            text: '默认按钮文案'
        }, {
            name: 'cancelText',
            type: 'string',
            text: '取消按钮文案'
        }, {
            name: 'onShow',
            type: 'function',
            text: '组件显示时触发'
        } , {
            name: 'onHide',
            type: 'function',
            text: '组件隐藏时触发'
        }]
        this.test = <button onClick={this.onShow}>{this.title}</button>
        this.state = {
            show: false
        }
    }
    onShow = () => this.setState({ show: !!1 })
    onHide = () => this.setState({ show: !!0 })
    render () {
        const { show } = this.state
        return (
            <Template
                title={this.title}
                text={this.text}
                code={this.code}
                test={this.test}
                list={this.list}>
                <Dialog show={show} click={this.onHide} clickText="确定">野生的弹窗出现了</Dialog>
            </Template>
        )
    }
}

export default dialog