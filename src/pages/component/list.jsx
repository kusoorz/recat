import React from 'react'
import Style from './list.module.scss'

class List extends React.Component {
    render () {
        const { props } = this
        return (
            props.data &&
            <table className={Style.table}>
                <thead>
                    <tr>
                        <td>名称</td>
                        <td>描述</td>
                        <td>可选值</td>
                        <td>默认值</td>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map(({name = '', text = '', type = '', value = ''}) => (
                        <tr key={name}>
                            <td>{name}</td>
                            <td>{text}</td>
                            <td>{type}</td>
                            <td>{value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default List