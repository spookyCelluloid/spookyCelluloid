import React from 'react';

var SearchForm = ({queryDatabase, handleChange}) => (
  <div>
    <form onSubmit={(e) => queryDatabase(e)}>
      <input type="text" placeholder='search by name or city' onChange={(e) => handleChange(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  </div>
  )

export default SearchForm;

