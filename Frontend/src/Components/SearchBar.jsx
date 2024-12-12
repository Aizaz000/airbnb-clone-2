import React, { useState, useContext } from 'react';      // Import React useState useContext
import { GlobalContext } from '../context/GlobalContext'; // Import GlobalContext for shared Search state

const SearchBar = () => { // SearchBar component: renders a search bar with functional input and search button

  const [searchTerm, setSearchTerm] = useState(""); // (1) State to hold the search input value
  const { setSearch } = useContext(GlobalContext);  // Accessing the setSearch function from GlobalContext

  const handleSearch = () => { // Function to handle search button click
    setSearch(searchTerm);     // Update the shared Search state with the current search input value
  };

  return (
    <div style={styles.bar}>                            {/* Searchbar container */}
      <input
        type="text"                                     // Input field for the search query
        style={styles.input}                            // Apply custom styles to the input
        placeholder="Search for a location..."          // Placeholder text when input is empty
        value={searchTerm}                              // (2) Bind the input value to the state
        onChange={(e) => setSearchTerm(e.target.value)} // (3) Update the state (search) as the user types
      />
      <button style={styles.search} onClick={handleSearch}>Search</button> {/* (4) Set the shared Search state = searchTerm */}
    </div>
  );
};

const styles = { // Styles object to customize the appearance of the search bar and input elements
  bar: {
    display: 'flex',          // Use flexbox to align items
    justifyContent: 'center', // Center align the content
    padding: '10px',          // Add padding around the container
    gap: '20px',              // Add space between the input and button
  },
  input: {
    width: '600px',           // Set a specific width for the input
    minWidth: '100px',        // Set a minimum width for responsiveness
    padding: '10px',          // Padding inside the input field
    border: '1px solid #ccc', // Light gray border color
    borderRadius: '8px',      // Rounded corners for the input
    fontSize: '16px',         // Font size for the input text
    textAlign: 'left',        // Align text to the left inside the input
    cursor: 'text',           // Display a text cursor inside the input
  },
  search: {
    width: '190px',           // Set a specific width for the search button
    minWidth: '100px',        // Set a minimum width for responsiveness
    padding: '10px',          // Padding inside the button
    border: '1px solid #ccc', // Light gray border color
    borderRadius: '8px',      // Rounded corners for the button
    fontSize: '16px',         // Font size for the button text
    textAlign: 'center',      // Center align the text inside the button
    cursor: 'pointer',        // Display a pointer cursor on hover to indicate it is clickable
  },
}

export default SearchBar; // Export the SearchBar component for use in other parts of the application