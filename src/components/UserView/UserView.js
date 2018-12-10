import React, { Component } from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import _ from 'lodash';
import MetaData from './MetaData/MetaData';
import './UserView.css';

export default class UserView extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        const {pics, selectPic} = this.props;
        const totalLikes = pics.reduce((acc,item) => acc += item.likes, 0);
        return (
         <React.Fragment>
            <MetaData 
                name="John Doe"
                picsLength={pics.length}
                likes={(totalLikes < 1000)? totalLikes : `${(totalLikes/1000).toFixed(1)}K`}
            />
            <div className="user-view-gallery">
               <Container>
                   <Row>
                       {
                        pics.map((pic, idx) => (
                        <Col 
                          onClick={() => selectPic('picture',pic)}
                          key={idx} 
                          xs={12} 
                          sm={6} 
                          md={4} 
                          lg={3}
                        >
                          <Media object className="img-thumbnail" middle src={`${pic.Image}`} alt="Image" />
                        </Col>
                        ))
                       }
                   </Row>
               </Container>
            </div>
         </React.Fragment>
        )
    }
}
