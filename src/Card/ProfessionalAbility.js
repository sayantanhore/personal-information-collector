import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CheckBox from '../Components/CheckBox';
import FilterList from '../Components/FilterList';
import Dropdown from '../Components/Dropdown';
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
            <FilterList items={store.list}/>
          <div className="div__card__content__heading">Choose 5 professionals you admire</div>
            <input type="text" placeholder="Name" className="div__card__content__input"></input>
            <Dropdown items={store.list} placeholder="Select a skill for the above person"/>
            <textarea className="textarea__longtext" placeholder="About the above person"></textarea>

            <input type="text" placeholder="Name" className="div__card__content__input"></input>
            <Dropdown items={store.list} placeholder="Select a skill for the above person"/>
            <textarea className="textarea__longtext" placeholder="About the above person"></textarea>

            <input type="text" placeholder="Name" className="div__card__content__input"></input>
            <Dropdown items={store.list} placeholder="Select a skill for the above person"/>
            <textarea className="textarea__longtext" placeholder="About the above person"></textarea>

            <input type="text" placeholder="Name" className="div__card__content__input"></input>
            <Dropdown items={store.list} placeholder="Select a skill for the above person"/>
            <textarea className="textarea__longtext" placeholder="About the above person"></textarea>

            <input type="text" placeholder="Name" className="div__card__content__input"></input>
            <Dropdown items={store.list} placeholder="Select a skill for the above person"/>
            <textarea className="textarea__longtext" placeholder="About the above person"></textarea>

          <div className="div__card__content__heading">Choose 3 book geners and number of books in each genre you read</div>
            <Dropdown items={store.list} placeholder="Select a genre"/>
            <input type="text" placeholder="Number of books from the above genre" className="div__card__content__input"></input>

            <Dropdown items={store.list} placeholder="Select a genre"/>
            <input type="text" placeholder="Number of books from the above genre" className="div__card__content__input"></input>

            <Dropdown items={store.list} placeholder="Select a genre"/>
            <input type="text" placeholder="Number of books from the above genre" className="div__card__content__input"></input>
        </div>
      </div>
    );
  }
}
