import React from 'react'
import Template from '../component'
import { Loading } from 'components'

class loading extends React.Component {
    constructor (props) {
        super(props)
        this.title = 'Loading组件'
        this.text = '加载提示组件'
        this.code = '<Loading show={show}></Loading>'
        this.list = [{
            name: 'show',
            type: 'boolean',
            text: '组件是否显示',
            value: 'false'
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
                <Loading show={show} onShow={() => setTimeout(this.onHide, 2000)}></Loading>
            </Template>
        )
    }
}

export default loading