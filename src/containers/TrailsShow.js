import React, { Component } from 'react';
import { connect } from 'react-redux';
import BackButton from '../components/BackButton';
import { bindActionCreators } from 'redux';
import { ListGroup, ListGroupItem } from 'reactstrap';

class TrailsShow extends Component {

    constructor(props) {
      super(props);
      this.state = {
        name: this.props.trail.name,
        description: this.props.trail.description,
        link: this.props.trail.link,
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
            <ListGroupItem><a href={this.props.trail.link} target="_blank">Link to Associated Article</a></ListGroupItem>
        </ListGroup>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  // eslint-disable-next-line
  const trail = state.trailsReducer.trails.find(note => trail.id == ownProps.match.params.trailId)

  if (trail) {
    return { trail }
  } else {
    return { trail: {} }
  }
};

export default connect(mapStateToProps)(TrailsShow);
