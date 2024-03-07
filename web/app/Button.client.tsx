import React, { useState } from 'react';

function Button() {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };
}

export default Button;