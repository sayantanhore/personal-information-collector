import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import CheckBox from '../Components/CheckBox';
import FilterList from '../Components/FilterList';
import Dropdown from '../Components/Dropdown';
import CrossoutInput from '../Components/CrossoutInput';
import {store} from '../store';
require('./Card.scss');

export default class ProfessionalAbility extends Component {
  constructor() {
    super();
  }
  componentWillMount() {
    this.setState({
      professionalAbilities: _.map(_.range(store.professionalAbilities.noOfAbilities), (item) => 'Professional ability ' + (item + 1)),
      professionalsYouAdmire: _.map(_.range(store.professionalsYouAdmire.noOfProfessionals), (item) => 'Person ' + (item + 1)),
      professionalBooks: _.map(_.range(store.professionalBooks.noOfBooks), (item) => 'Book ' + (item + 1))
    });
  }
  render() {
    return(
      <div className="div__card">
        <div className="div__card__clip">Professional Ability</div>
        <div className="div__card__content">
          <div className="div__card__content__heading">Write your top 10 professional abilities, cross out 7 of them</div>
          <div>
            {
              this.state.professionalAbilities.map((ability, index) => {
                return <CrossoutInput key={index} placeholder={ability} className="div__card__content__input" />
              })
            }
          </div>
          <div className="div__card__content__heading">Choose the top 5 strongest abilities from the list below</div>
            <FilterList items={store.list}/>
          <div className="div__card__content__heading">Choose the top 5 areas that you follow</div>
            <FilterList items={store.list}/>

          <div className="div__card__content__heading">Choose 5 professionals you admire</div>
            {
              this.state.professionalsYouAdmire.map((person, index) => {
                return (
                  <div key={index}>
                    <input type="text" placeholder={person} className="div__card__content__input"></input>
                    <Dropdown items={store.list} placeholder="Select a skill for the above person"/>
                    <textarea className="textarea__longtext" placeholder="About the above person"></textarea>
                  </div>
                )
              })
            }

          <div className="div__card__content__heading">Choose 3 book geners and number of books in each genre you read</div>
            {this.state.professionalBooks.map((book, index) => {
              return (
                <div key={index}>
                  <Dropdown items={store.list} placeholder={book + ": Select a genre"}/>
                  <input type="text" placeholder="Number of books from the above genre" className="div__card__content__input"></input>
                </div>
              )
            })}
        </div>
      </div>
    );
  }
}
