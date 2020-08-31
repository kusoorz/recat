import React from 'react'

import './input.scss'

class Input extends React.Component {
    constructor (props) {
        super(props)
        this.input = React.createRef()
        this.state = {
            value: props.value || ''
        }
    }
    onChange = (e) => {
        const { props } = this
        const { value } = e.target
        this.setState({ value })
        typeof props.onChange === 'function' && props.onChange(e)
    }
    render () {
        const { value } = this.state
        const { type = 'text', name, label, className } = this.props
        return (
            <div className="i-input" onClick={() => this.input.current.focus()}>
                {label && <label>{label}</label>}
                <input
                    type={type}
                    name={name}
                    value={value}
                    className={className}
                    onChange={this.onChange}
                    onBlur={this.onChange}
                    ref={this.input}>
                </input>
                {value && <div className="clear" onClick={() => this.setState({ value: '' })}></div>}
            </div>
        )
    }
}

export default Input