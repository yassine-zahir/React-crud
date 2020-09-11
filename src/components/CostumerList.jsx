import React, { Component } from 'react'
import Costumer from './Costumer';

export default class CostumerList extends Component {
    onDelete = id => {
        this.props.onDelete(id);
    }
    onEdit = data => {
        this.props.onEdit(data);
    }
    
    render() {
        const costumers = this.props.costumers;
        return (
            <div className="data">
                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            costumers.map(costumer => {
                                return <Costumer costumer={costumer} key={costumer.id} onDelete= {this.onDelete} onEdit= {this.onEdit} />
                            })
                        }
                        
                    </tbody>

                </table>
                
            </div>
        )
    }
}
