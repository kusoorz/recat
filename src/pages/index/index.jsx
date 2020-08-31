import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import './index.scss'

class Index extends React.Component {
    componentDidMount () {
    }
    render () {
        const { history } = this.props
        return (
            <div className="index-view">
                <div className="titlebar">Recat</div>
                <div className="contents">
                    <ul>
                        <li>
                            <div className="title" onClick={() => history.push('/')}>Toast</div>
                            <div className="text">信息提示组件</div>
                            <div className="code">{`<Toast show={show} text="提示!"></Toast>`}</div>
                        </li>
                        <li>
                            <div className="title" onClick={() => history.push('/')}>Dialog</div>
                            <div className="text">内容弹窗组件</div>
                            <div className="code">{`<Dialog show={show} click={onclick}>这里是弹窗</Dialog>`}</div>
                        </li>
                        <li>
                            <div className="title" onClick={() => history.push('/')}>Loading</div>
                            <div className="text">加载提示组件</div>
                            <div className="code">{`<Loading show={show}></Loading>`}</div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default withRouter(connect()(Index))