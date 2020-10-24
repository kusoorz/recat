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
                            <div className="title" onClick={() => history.push('/image')}>Image</div>
                            <div className="text">图片展示组件</div>
                        </li>
                        <li>
                            <div className="title" onClick={() => history.push('/toast')}>Toast</div>
                            <div className="text">信息提示组件</div>
                        </li>
                        <li>
                            <div className="title" onClick={() => history.push('/dialog')}>Dialog</div>
                            <div className="text">内容弹窗组件</div>
                        </li>
                        <li>
                            <div className="title" onClick={() => history.push('/loading')}>Loading</div>
                            <div className="text">加载提示组件</div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default withRouter(connect()(Index))