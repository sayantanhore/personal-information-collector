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
    this.setActivePage = this.setActivePage.bind(this);
  }
  componentWillMount() {
    this.setState({activePage: this.props.activePage});
  }


  setActivePage(page) {
    this.setState({activePage: page});
  }

  render() {
    const pageToLoad = (() => {
      if(this.state.activePage === 'PersonalInfo') {
        return <PersonalInfo/>;
      }
      else if(this.state.activePage === 'ProfessionalAbility') {
        return <ProfessionalAbility/>;
      }
    })();

    return (
      <div className="div__page">
        <Header setActivePage={this.setActivePage}/>
        <div className="div__card-holder">
          {pageToLoad}
        </div>
      </div>
    );
  }
}
