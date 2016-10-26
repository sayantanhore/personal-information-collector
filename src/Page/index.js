import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PersonalInfo from '../Card/PersonalInfo';
import ProfessionalAbility from '../Card/ProfessionalAbility';
require('./Page.scss');
let backward = '../../icons/backward.svg';
let forward = '../../icons/forward.svg';

export default class Page extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="div__page">
        <img className="img__icon--navigation" src={backward}/>
        <ProfessionalAbility/>
        <img className="img__icon--navigation" src={forward}/>
      </div>
    );
  }
}
