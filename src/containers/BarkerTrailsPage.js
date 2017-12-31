import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBarkerTrails } from '../actions';
import { bindActionCreators } from 'redux';
import BarkerTrailsList from '../components/BarkerTrailsList'
import TrailsShow from './TrailsShow';

class BarkerTrailsPage extends Component {

  componentDidMount() {
    this.props.getBarkerTrails();
  }

  render() {
    return (
    <div>
      <Switch>
        <Route path={`${this.props.match.url}/:trailId`} component={TrailsShow}/>
        <Route exact path={this.props.match.url} render={() => (
          <div>
            <h1>Barker Trails</h1>
            <h3>Select a trail from the list to view.</h3>
            {this.props.trails.length === 0 ? (
              <h4>Trails are loading.</h4>
            ):(
            <BarkerTrailsList trails={this.props.trails} />
            )}
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
  return { getBarkerTrails: bindActionCreators(getBarkerTrails, dispatch) }
};

export default connect(mapStateToProps, mapDispatchToProps)(BarkerTrailsPage);
