import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAddicksTrails } from '../actions';
import { bindActionCreators } from 'redux';
import AddicksTrailsList from '../components/AddicksTrailsList'
import TrailsShow from './TrailsShow';

class AddicksTrailsPage extends Component {

  componentDidMount() {
    this.props.getAddicksTrails();
  }

  render() {
    return (
    <div>
      <Switch>
        <Route path={`${this.props.match.url}/:trailId`} component={TrailsShow}/>
        <Route exact path={this.props.match.url} render={() => (
          <div>
            <h3>Select a trail from the list to view.</h3>
            <AddicksTrailsList trails={this.props.trails} />
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
  return { getAddicksTrails: bindActionCreators(getAddicksTrails, dispatch) }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddicksTrailsPage);
