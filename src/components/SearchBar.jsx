export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search recipes..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="search-bar"
    />
  );
}


// import React from 'react';

// // Destructure 'value' from props
// function SearchBar({ value, onChange }) {
//   return (
//     <input
//       type="text"
//       placeholder="Search..."
//       value={value} // Now 'value' is defined as a prop
//       onChange={onChange}
//     />
//   );
// }

// export default SearchBar;

    // SearchBar.jsx
    // import React, { useState } from 'react';

    //  function SearchBar() {
    //    const [value, setValue] = useState(''); // <--- 'value' is declared here as state
    //    // ... component logic
    //    return (
    //      <input
    //        type="text"
    //        value={value} // Using the state variable 'value'
    //        onChange={(e) => setValue(e.target.value)}
    //      />
    //    );
    //  }

    //  export default SearchBar;
    
    
    // SearchBar.jsx
    // import React, { useContext } from 'react';
    // import RecipeDetails from '../pages/RecipeDetails';
    // function SearchBar() {
    //   const { value, someOtherData } = useContext(RecipeDetails); // <--- 'value' destructured from context
    //   // ... component logic using 'value'
    //   return (
    //     <input
    //       type="text"
    //       value={value} // Using the context value
    //       onChange={() => { /* ... */ }}
    //     />
    //   );
    // }

    // export default SearchBar;
    