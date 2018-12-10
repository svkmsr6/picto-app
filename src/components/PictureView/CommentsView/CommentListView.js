import React, { Component } from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';

export default class CommentListView extends Component {
  render() {
    const {comments} = this.props;
    return (
      <React.Fragment>
        <ListGroup>
            {
                comments.map((comment, idx) => (
                <ListGroupItem key={idx}>
                    <img  style={{ height: 40, padding:10 }} src="/user.png" alt={`$user_${idx}`} />
                    <span>{comment}</span>
                </ListGroupItem>
                ))
            }
        </ListGroup>
      </React.Fragment>
    )
  }
}
