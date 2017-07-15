import React, {Component} from 'react';
import propTypes from 'prop-types';

export default class TitleBar extends Component {
  renderSubtitle () {
    if(this.props.subtitle){
      return <h2 className="title-bar__subtitle">{this.props.subtitle}</h2>
    }
  }

  render() {
    return (
      <div className="title-bar">
        <div className="wrapper">
          <h1>{this.props.title}</h1>
          {this.renderSubtitle()}
        </div>
      </div>
    );
  }
}

TitleBar.propTypes ={
  title: propTypes.string.isRequired,
  subtitle: propTypes.string
}

TitleBar.defaultProps = {
  title: 'Default Title',
}
