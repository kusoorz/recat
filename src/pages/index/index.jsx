import React from 'react'
import { connect } from 'react-redux'
import { showLoading } from 'store'

class Index extends React.Component {
    componentDidMount () {
        const { dispatch } = this.props
        dispatch(showLoading(true))
    }
    render () {
        return (
            <div className="index-view"></div>
        )
    }
}

export default connect()(Index)