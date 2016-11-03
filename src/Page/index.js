import React, {Component} from 'react';
import Header from '../Components/Header';
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
        <Header/>
        <div className="div__card-holder">
          <PersonalInfo/>
        </div>
      </div>
    );
  }
}
