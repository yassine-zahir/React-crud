import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Form from './components/Form';
import CostumerList from './components/CostumerList';
import Loader from './components/Loader';



export default class App extends Component {
  state = {
    costumers: [],
    costumer: {},
    loader: false,
    url: "http://localhost/laravel-rest-api/public/api/costumers"
  }

  getCostumers = async () => {
    this.setState({
      loader : true,
    })
    const costumers = await axios.get(this.state.url);
    this.setState({
      costumers : costumers.data,
      loader : false
    })
  }

  deleteCostumer = async id => {
    this.setState({ loader : true});
   await axios.delete(`${this.state.url}/${id}`);
   this.getCostumers();
  }

  editCostumer = async data => {
   // clear costumer obj
    this.setState({ costumer: {}, loader : true});

    await axios.put(`${this.state.url}/${data.id}`,{

      first_name : data.first_name,
      last_name : data.last_name,
      email : data.email
  
     });

     this.getCostumers();
  }

  createCostumer = async data => {
    this.setState({ loader : true});
   await axios.post(this.state.url,{

    first_name : data.first_name,
    last_name : data.last_name,
    email : data.email

   });
   
   this.getCostumers();
   
  }

 

  onDelete = id => {
    this.deleteCostumer(id);
  }

  onEdit = data => {
    this.setState({ costumer:data})

  }

  onFormSubmit = (data) => {

    

    if(data.isEdit){
      this.editCostumer(data);
    }
    else{
      this.createCostumer(data);
      
    }
    
  }

  componentDidMount () {
    this.getCostumers();
  }

  render() {
    return (
      <div>
        <Form costumer =  {this.state.costumer} onFormSubmit={this.onFormSubmit} />
        {this.state.loader ? <Loader /> : ''}
      <CostumerList costumers = {this.state.costumers} onDelete= {this.onDelete} onEdit= {this.onEdit} />
      </div>
    )
  }
}

