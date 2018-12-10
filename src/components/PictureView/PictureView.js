/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import {  Container, Row, Col, Button } from 'reactstrap';
import ImageView from './ImageView/ImageView';
import CommentListView from './CommentsView/CommentListView';
import AddCommentForm from './CommentsView/AddCommentForm';
import './PictureView.css';

export default class PictureView extends Component {
    constructor(props){
        super(props);
        this.state = {
            comments:[],
            hasLiked: false,
            addCommentMode: false,
            likes: 0
        };
    }

    componentDidMount(){
        this.setState((prevState, currentProps) => ({
            likes: currentProps.selectedPicData.likes
        }));
    }

    addComment(comment){
        let {comments} = this.state;
        comments.push(comment);
        this.setState({ comments, addCommentMode:false });
    }

    toggleLike(){
        this.setState((prevState, currentProps) => ({
            hasLiked: !prevState.hasLiked,
            likes:(!prevState.hasLiked) ? (prevState.likes + 1) : (prevState.likes - 1)
        }));
    }

    render() {
        const {goBack, selectedPicData} = this.props;
        const {comments, likes, hasLiked, addCommentMode} = this.state;
        return (
         <div className="picture-view-container">
             <Container>
                 <Row>
                    <Col xs={12} sm={12} md={6} lg={6}>
                      <hr />
                      <img className="img-thumbnail" style={{width:'inherit'}} src={selectedPicData.Image} alt="Image" />
                      <hr />
                      <ImageView 
                       comments={comments}
                       likes={likes}
                       hasLiked={hasLiked}
                       toggleLike={this.toggleLike.bind(this)}
                       selectedPicData={selectedPicData}
                       enableComment={
                           () => this.setState(prevState => ({ addCommentMode: !prevState.addCommentMode}))
                        }
                      />
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <hr />
                        <Button color="info" onClick={() => goBack()}>Go Back</Button>
                        <hr />
                        {
                            (comments.length > 0)?
                            <CommentListView  comments={comments} />:
                            <div style={{textAlign:'center', color:'lightgrey'}}>No comments so far</div>
                        }
                        <hr />
                        {
                            (addCommentMode)?
                            <AddCommentForm addComment={txt => this.addComment(txt)} />:
                            null
                        }
                    </Col>
                 </Row>
                 
             </Container>            
         </div>         
        )
    }
}
