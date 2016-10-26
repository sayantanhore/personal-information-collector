import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CheckBox from '../Components/CheckBox';
import FilterList from '../Components/FilterList';
import {store} from '../store';
require('./Card.scss');

export default class ProfessionalAbility extends Component {
  constructor() {
    super();
  }
  render() {
    return(
      <div className="div__card">
        <div className="div__card__clip">Professional Ability</div>
        <div className="div__card__content">
          <div className="div__card__content__heading">Write your top 10 professional abilities, cross out 7 of them</div>
          <div>
            <input type="text" placeholder="Professional ability 1" className="div__card__content__input"></input>
            <input type="text" placeholder="Professional ability 2" className="div__card__content__input"></input>
            <input type="text" placeholder="Professional ability 3" className="div__card__content__input"></input>
            <input type="text" placeholder="Professional ability 4" className="div__card__content__input"></input>
            <input type="text" placeholder="Professional ability 5" className="div__card__content__input"></input>
            <input type="text" placeholder="Professional ability 6" className="div__card__content__input"></input>
            <input type="text" placeholder="Professional ability 7" className="div__card__content__input"></input>
            <input type="text" placeholder="Professional ability 8" className="div__card__content__input"></input>
            <input type="text" placeholder="Professional ability 9" className="div__card__content__input"></input>
            <input type="text" placeholder="Professional ability 10" className="div__card__content__input"></input>
          </div>
          <div className="div__card__content__heading">Choose the top 5 strongest abilities from the list below</div>
            <FilterList items={store.list}/>
          <div className="div__card__content__heading">Choose the top 5 areas that you follow</div>
        </div>
      </div>
    );
  }
}
