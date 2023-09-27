import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

export class ContactForm extends Component {
  render() {
    const { todo, handleTodo, submit, selected, nameRef, validated } =
      this.props;
    return (
      <Form
        validated={validated}
        noValidate
        onSubmit={submit}
        className="col-3 position-fixed top-0 end-0 me-5 mt-5 m-auto p-3 bg-info bg-opacity-10 border border-info rounded mt-3"
      >
        <Form.Group className="mb-3" controlId="firstname">
          <Form.Label>First Name*</Form.Label>
          <Form.Control
            ref={nameRef}
            onChange={handleTodo}
            value={todo.firstname}
            required
            type="text"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please fill !
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="lastname">
          <Form.Label>Last Name*</Form.Label>
          <Form.Control
            ref={nameRef}
            onChange={handleTodo}
            value={todo.lastname}
            required
            type="text"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please fill !
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="number">
          <Form.Label>Phone number*</Form.Label>
          <Form.Control
            onChange={handleTodo}
            value={todo.number}
            required
            type="number"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="isFavorite">
          <Form.Label>Favorite</Form.Label>
          <Form.Select onChange={handleTodo} value={todo.isFavorite}>
            <option value="family">Family</option>
            <option value="friends">Friends</option>
            <option value="relatives">Relatives</option>
            <option value="other">Other</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit" className="w-100">
          {selected === null ? "Add" : "Save"} Contact
        </Button>
      </Form>
    );
  }
}

export default ContactForm;
