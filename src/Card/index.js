import React, {Component} from 'react';
import ReactDOM from 'react-dom';
require('./Card.scss');

export default class Card extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="div__card">
        <div className="div__card__clip">This is a card</div>
        <div className="div__card__content">
          <div className="div__card__content__pageheading">Nanodegree program</div>
          <div className="div__card__content__body">
            Our flagship Nanodegree programs represent career-track education at its most innovative. Every program is comprised of these core features:
          </div>
          <div className="div__card__content__heading">Curriculum</div>
          <div className="div__card__content__body">Master cutting-edge skills sought by leading companies</div>
          <div className="div__card__content__heading">1:1 Feedback</div>
          <div className="div__card__content__body">Rigorous, timely project and code review</div>
          <div className="div__card__content__heading">Portfolio & credentials</div>
          <div className="div__card__content__body">Build an optimized portfolio, earn a recognized credential</div>
          <div className="div__card__content__heading">Personalized career support</div>
          <div className="div__card__content__body">Connect directly to exclusive hiring partners</div>
        </div>
      </div>
    );
  }
}
