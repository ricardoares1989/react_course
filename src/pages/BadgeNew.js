import React from 'react';
import './styles/BadgeNew.css';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import header from '../images/badge-header.svg';

class BadgeNew extends React.Component {
  state = {form: {
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
  }};
  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
        // vamos a añadir una copia de todos los valores con el ...
        // y posteriormente añadimos el nuevo, como si estuvieramos haciendo un append cada que se
        // se escribe un nuevo estado.
      }
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className='img-fluid' src={header} alt='logo' />
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <Badge 
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                twitter={this.state.form.twitter}
                jobTitle={this.state.form.jobTitle}
                email={this.state.form.email}
                avatarUrl="https://www.gravatar.com/avatar?d=identicon"
              />
            </div>
            <div className='col-6'>
              <BadgeForm 
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };
};

export default BadgeNew;