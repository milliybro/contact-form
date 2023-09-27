import React, { Component } from "react";
import { Form, InputGroup } from "react-bootstrap";

export class ContactHeader extends Component {
  constructor(props) {
    super(props);
    // this.searchRef = createRef();
    this.state = {};
  }
  render() {
    const { handleSearch, searchRef, handleImportance, isFavorite, handleSorted, sorted } =
      this.props;
    // const handleSearch = () => {
    //   console.log(this.searchRef.current.value);
    // };
    return (
      <InputGroup className="my-3 ">
        <Form.Control
          onChange={handleSearch}
          // ref={this.searchRef}
          ref={searchRef}
          placeholder="Searching contact..."
        />
        <InputGroup.Text>
          <Form.Select onChange={handleImportance} value={isFavorite}>
            <option value="all">All</option>
            <option value="family">Family</option>
            <option value="friends">Friends</option>
            <option value="relatives">Relatives</option>
            <option value="other">Other</option>
          </Form.Select>
        </InputGroup.Text>
        <InputGroup.Text>
          <Form.Select onChange={handleSorted} value={sorted}>
            <option value="sort">Sort</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>

          </Form.Select>
        </InputGroup.Text>
      </InputGroup>
    );
  }
}

export default ContactHeader;
