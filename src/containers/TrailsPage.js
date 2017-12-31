import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTrails } from '../actions';
import { bindActionCreators } from 'redux';
import TrailsList from '../components/TrailsList'
import TrailsShow from './TrailsShow';

class TrailsPage extends Component {

  componentDidMount() {
    this.props.getTrails();
  }

  render() {
    return (
    <div>
      <Switch>
        <Route path={`${this.props.match.url}/:trailId`} component={TrailsShow}/>
        <Route exact path={this.props.match.url} render={() => (
          <div>
            <h1>All Trails</h1>
            <h3>Select a trail from the list to view.</h3>
            <TrailsList trails={this.props.trails} />
          </div>
        )}/>
      </Switch>
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
