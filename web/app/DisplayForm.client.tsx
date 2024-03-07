import React from 'react';

function DisplayForm() {
  return (
    <form>
      <label htmlFor="name">
        Name:
        <input type="text" id="name" name="name" />
      </label>
      <label htmlFor="email">
        Email:
        <input type="email" id="email" name="email" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default DisplayForm;