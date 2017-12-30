import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTrails } from '../actions';
import { bindActionCreators } from 'redux';

class TrailsPage extends Component {

  componentDidMount() {
    this.props.getTrails();
  }

  render() {
    return (
    <div>
      <p>Trails go here</p>
    </div>
  )}
}

const mapStateToProps = (state) => {
  return {
    trails: state.trailsReducer.trails
  };
}

const mapDispatchToProps = (dispatch) => {
  return { getTrails: bindActionCreators(getTrails, dispatch) }
};

export default connect(mapStateToProps, mapDispatchToProps)(TrailsPage);
