// RenderCategories.client.tsx
import { useState } from 'react';
import DisplayForm from './DisplayForm.client'

const CATEGORIES = [
    {
      text: "PyFLTK Games"
    },
    {
      text: "Bots"
    },
    {
      text: "Other"
    }
  ]

  function RenderCategories() {
    return CATEGORIES.map(({text}, index) => {
      const [showForm, setShowForm] = useState(false); // Declare the showForm variable inside the map function
  
      return (
        <div className="text-center mx-2 grid basis-1/3 justify-items-center bg-slate-900 p-5 dark:bg-slate-700 rounded-lg" key={index}>
          <h1 className="font-bold">{text}</h1>
          <button onClick={() => setShowForm(true)}>See More</button>
          {showForm && <DisplayForm />}
        </div>
      );
    });
  }

export default RenderCategories;