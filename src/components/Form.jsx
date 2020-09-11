import React, { Component } from 'react'

export default class Form extends Component {
    state = {
        form: { first_name:"", last_name:"", email:"", isEdit:false },
        btnName: "Save",
        btnClasse: "ui primary button submit-button"
    }

    isEmpty(obj) {
        return Object.entries(obj).length === 0 && obj.constructor === Object
    }

    componentDidUpdate(prevProps){
        if ( prevProps !== this.props && !this.isEmpty(this.props.costumer)){
            this.setState({
                form: {...this.props.costumer, isEdit:true },
                btnName : "Update",
                btnClasse: "ui orange button submit-button"
            })
            
        }

    }

    handleChange = event =>{
        const { name, value } = event.target;
        let form = this.state.form;
        form[name] = value;
        this.setState({form});
        
    }

    onFormSubmit = e => {
        e.preventDefault();

      if(this.formValidation()) {
          this.props.onFormSubmit(this.state.form)
      }

      this.clearFormFields();

    }

    formValidation = () => {
       if (document.getElementsByName('first_name')[0].value === ""){
            alert('first name Empty')
            return false
        }
        
        if (document.getElementsByName('last_name')[0].value === ""){
            alert('last name Empty')
            return false
        }

        if (document.getElementsByName('email')[0].value === ""){
            alert('Email Empty')
            return false
        }

        

        return true;
    }

    clearFormFields = () =>{
        //change form state
        this.setState({
            form: { first_name:"", last_name:"", email:"", isEdit:false },
            btnName: "Save",
            btnClasse: "ui primary button submit-button"

        })

        //clear form fields

        document.querySelector('.form').reset();

    }

    render() {
        return (
            <form className="ui form">
                <div className="fields">
                    <div className="four wide field">
                        <label>First Name</label>
                        <input type="text" name="first_name" placeholder="First Name" onChange={this.handleChange} value={this.state.form.first_name }/>
                    </div>

                    <div className="four wide field">
                        <label>Last Name</label>
                        <input type="text" name="last_name" placeholder="Last Name" onChange={this.handleChange} value={this.state.form.last_name}  />
                    </div>

                    <div className="four wide field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email..."  onChange={this.handleChange} value={this.state.form.email}/>
                    </div>

                    <div className="four wide field">
                        <button className={this.state.btnClasse} onClick= {this.onFormSubmit}>{this.state.btnName}</button>
                    </div>

                </div>
            </form>
        )
    }
}
