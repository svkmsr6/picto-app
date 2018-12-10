import React, { Component } from 'react';
import Moment from 'react-moment';

export default class ImageView extends Component {
  
  render() {
    const {hasLiked, enableComment, toggleLike, selectedPicData, likes, comments} = this.props;
    return (
      <div style={{
        display:'flex', 
        justifyContent:'space-between'
      }}>
        <span title="Like/unlike the pic" style={{cursor:'pointer'}} onClick={() => toggleLike()}>
          {(hasLiked) ? 
              <img style={{height: 27, paddingRight: 10}} src="/heart.png" alt="LIKED" /> : 
              <img style={{height: 27, paddingRight: 10}} src="/like.png" alt="LIKE" />
          } 
          {likes}
         </span>
        <span
         title="Click to add comment" 
         style={{cursor:'pointer', padding: '0 5px'}}
         onClick={() => enableComment()}
         >
           <img style={{paddingRight: 10}} src="/comment.png" alt="COMMENTS" />
           { comments.length}
        </span>
        <span style={{cursor:'pointer', fontWeight:700, padding: '0 5px'}}>
          <Moment fromNow>{selectedPicData.timestamp}</Moment>
        </span>
      </div>
    )
  }
}
