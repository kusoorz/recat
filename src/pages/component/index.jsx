import React from 'react'
import List from './list'

import './component.scss'

class Template extends React.Component {
    render () {
        const { props } = this
        return (
            <div className="component-view">
                <div className="title">{props.title}</div>
                {/* <br/> */}
                <div className="label">介绍</div>
                <div className="text">{props.text}</div>
                {/* <br/> */}
                <div className="label">示例</div>
                <div className="code">{props.code}</div>
                {/* <br/> */}
                <div className="label">演示</div>
                <div className="test">{props.test}</div>
                {/* <br/> */}
                <div className="label">参数</div>
                <div className="list"><List data={props.list} /></div>
                {/* <br/> */}
                {props.children}
            </div>
        )
    }
}

export default Template