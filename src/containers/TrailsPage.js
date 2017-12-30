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
      <Switch>
        <Route path={`${this.props.match.url}/:noteId`} component={NotesShow}/>
        <Route exact path={this.props.match.url} render={() => (
          <div>
            <h3>Please select a story from the list.</h3>
            <NotesList notes={this.props.notes} />
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
