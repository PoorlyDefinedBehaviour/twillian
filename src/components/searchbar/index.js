import React from "react";
import { MdSearch } from "react-icons/md";

import { Form, TextInput, Button } from "./styles";

const SearchBar = ({
  handleSubmit,
  handleChange,
  handleFocus,
  handleBlur,
  placeholder
}) => (
  <Form onSubmit={handleSubmit} onFocus={handleFocus} onBlur={handleBlur}>
    <TextInput type="text" placeholder={placeholder} onChange={handleChange} />
    <Button>
      <MdSearch />
    </Button>
  </Form>
);

export default SearchBar;
