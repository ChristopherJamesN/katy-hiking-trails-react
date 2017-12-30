import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTrails } from '../actions';
import { bindActionCreators } from 'redux';
import TrailsList from '../components/TrailsList'

class TrailsPage extends Component {

  componentDidMount() {
    this.props.getTrails();
  }

  render() {
    return (
    <div>
      <p>All Trails</p>
      <TrailsList trails={this.props.trails} />
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
