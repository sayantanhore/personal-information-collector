import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CheckBox from '../Components/CheckBox';
require('./Card.scss');

export default class PersonalInfo extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="div__card">
        <div className="div__card__clip">Personal information</div>
        <div className="div__card__content">
          <div className="div__card__content__heading">Name</div>
          <div>
            <input type="text" placeholder="Enter your name" className="div__card__content__input"></input>
          </div>
          <div className="div__card__content__heading">Email</div>
          <div>
            <input type="text" placeholder="Enter your email address" className="div__card__content__input"></input>
          </div>
          <div className="div__card__content__heading">Age</div>
          <div>
            <input type="text" placeholder="Enter your age" className="div__card__content__input"></input>
          </div>
          <div className="div__card__content__heading">City</div>
          <div>
            <input type="text" placeholder="Enter the city you are from" className="div__card__content__input"></input>
          </div>
          <div className="div__card__content__heading">Your expectations from a job</div>
            <CheckBox questionType="salary" questionText="A good salary"/>
            <CheckBox questionType="coworkers" questionText="Good co-workers"/>
            <CheckBox questionType="integration" questionText="Opportunity to be a part of the company"/>
            <CheckBox questionType="growth" questionText="Opportunity to grow as a professional"/>
            <CheckBox questionType="comfortandpeace" questionText="Comfort and peace"/>
            <CheckBox questionType="passion" questionText="Work you are passionate about"/>
            <CheckBox questionType="potential" questionText="Ability to apply your potential"/>
            <CheckBox questionType="problemsolving" questionText="Opportunities to help solving problems"/>
            <CheckBox questionType="happyness" questionText="Making your soul happy from what you do"/>
        </div>
      </div>
    );
  }
}
