import React from 'react'
import Template from '../component'
import { Toast } from 'components'

class toast extends React.Component {
    constructor (props) {
        super(props)
        this.title = 'Toast组件'
        this.text = '信息提示组件'
        this.code = '<Toast show={show} text="提示!"></Toast>'
        this.list = [{
            name: 'show',
            type: 'boolean',
            text: '组件是否显示',
            value: 'false'
        }, {
            name: 'text',
            type: 'string',
            text: '提示内容'
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
    componentDidMount () {
        this._Ready = true
    }
    componentWillUnmount () {
        this._Ready = false
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
                <Toast show={show} text="提示!" onShow={() => setTimeout(() => this._Ready && this.onHide(), 2000)}></Toast>
            </Template>
        )
    }
}

export default toast