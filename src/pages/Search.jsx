import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Search() {
  return (
    <div>
      <Form className="search">
        <Form.Control
          type="search"
          placeholder="Αναζήτηση"
          className="search search-position search-mobile"
          aria-label="Search"
        />
        <Button className="search search-mobile" variant="primary">
          Αναζήτηση
        </Button>
      </Form>
    </div>
  );
}

export default Search;
