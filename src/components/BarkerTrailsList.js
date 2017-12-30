import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'reactstrap';

const BarkerTrailsList = ({ trails }) => {

    trails.sort(function(a,b) {
      return a.id - b.id;
    });
    const renderTrails = trails.map((trail, index) =>
      <ListGroup key={trail.id}><Link key={trail.id} className="list-group-item list-group-item-action" to={`/barker/${trail.id}`}>{trail.name}</Link></ListGroup>
    );

  return (
    <div>
      {renderTrails}
    </div>
  );
};

export default BarkerTrailsList;
