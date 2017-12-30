import React, { Component } from 'react';
import { connect } from 'react-redux';
import BackButton from '../components/BackButton';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class TrailsShow extends Component {

    constructor(props) {
      super(props);
      this.state = {
        name: this.props.trail.name,
        description: this.props.trail.description,
        maplink: this.props.trail.maplink,
      };
    }

  render() {
    return (
      <div>
        <div>
          <BackButton /> &nbsp;
        </div>
        <br></br>
        <ListGroup>
            <ListGroupItem><h3>{this.props.trail.name}</h3></ListGroupItem>
        </ListGroup>
        <ListGroup>
            <ListGroupItem><p>{this.props.trail.description}</p></ListGroupItem>
        </ListGroup>
        <ListGroup>
            <Link key={this.props.trail.id} className="list-group-item list-group-item-action" to={this.props.trail.maplink} target="_blank">Link to trail map</Link>
        </ListGroup>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  // eslint-disable-next-line
  const trail = state.trailsReducer.trails.find(trail => trail.id == ownProps.match.params.trailId)

  if (trail) {
    return { trail }
  } else {
    return { trail: {} }
  }
};

export default connect(mapStateToProps)(TrailsShow);
