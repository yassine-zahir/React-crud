import React, { Component } from 'react'

export default class Costumer extends Component {
    onDelete = () => {
        this.props.onDelete(this.props.costumer.id);
    }
    onEdit = () => {
        this.props.onEdit(this.props.costumer);
    }

    render() {
        const { id,first_name,last_name,email } = this.props.costumer
        return (
            
                <tr>
                            <td>{id}</td>
                            <td> {`${first_name} ${last_name}`} </td>
                            <td>{email}</td>
                            <td>
                                <button className="mini ui blue button" onClick={this.onEdit} >Edit</button>
                                <button className="mini ui red button" onClick={this.onDelete}>Delete</button>
                            </td>
                        </tr>
            
        )
    }
}
