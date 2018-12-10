import React, { Component } from 'react';
import {Jumbotron} from 'reactstrap';

export default class MetaData extends Component {
  render() {
    const {picsLength, name, likes} = this.props;
    return (
    <Jumbotron>
        <div className="app-icon">
            <img src="/photo-camera.png" alt="ICON" />
            <h1>PICTO</h1>
        </div>
        <hr />
        <div className="user-view-metadata">                    
            <div className="user-avatar">
                <img style={{ height: '70%'}} src="/user.png" alt="USER" />
            </div>
            <div className="user-profile">
                <h2>{name}</h2>
                <div className="user-metadata">
                    <span><img style={{ height: '27%', paddingRight: 2}} src="/pictures.png" alt="PICS" />{picsLength}</span>
                    <span><img style={{ height: '27%', paddingRight: 2}} src="/heart.png" alt="LIKES" />{likes}</span>
                </div>
            </div>
        </div>
    </Jumbotron>
    )
  }
}
