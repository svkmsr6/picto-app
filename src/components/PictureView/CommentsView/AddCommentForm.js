import React, { Component } from 'react';
import {Row, Form, FormGroup, Label, Input, Button} from 'reactstrap';

export default class AddCommentForm extends Component {  
  render() {
    const {addComment} = this.props;
    return (
        <Row className="form-cluster">
            <Form>
                <FormGroup>
                    <Label for="addComment">Post your opinion</Label>
                    <Input innerRef={txt => this.txt = txt} type="textarea" name="text" id="addComment" />
                </FormGroup>
                <Button color="primary" onClick={() => addComment(this.txt.value)}>Add Comment</Button>
            </Form>                     
        </Row>
    )
  }
}
