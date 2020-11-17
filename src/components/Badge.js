import React from 'react';
import confLogo from '../images/badge-header.svg';
import './styles/Badge.css';

class Badge extends React.Component {
  render(){
    return (
    <div className='badge'>
      <div className='badge__header'>
        <img src={confLogo} alt="Logo de la conferencia"/>
      </div>
      <div className='badge__section-name'>
        <img className='badge__avatar' src={this.props.avatarUrl} alt="avatar" />
        <h1>{this.props.firstName} <br/> {this.props.lastName} </h1>
      </div>
      <div className='badge__section-info'>
        <p>{this.props.jobTitle}</p>
        <p>{this.props.twitter}</p>
      </div>
      <div className='badge__footer'>#platziConf</div>
    </div>
    )
  }
}

export default Badge;