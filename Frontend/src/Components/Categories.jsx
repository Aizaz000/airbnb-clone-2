import React, { useContext } from 'react';                // Import React and useContext
import { GlobalContext } from '../context/GlobalContext'; // Import GlobalContext for shared Category state

const Categories = () => { // Categories component: renders a category bar with functional category tabs

  const { setCategory } = useContext(GlobalContext); // Accessing the setCategory function from GlobalContext to update the shared Category state

  return (
    <div style={styles.bar}> {/* Category tabs container: each tab updates the shared Category state with a different category when clicked */}
      <div style={styles.tab} onClick={() => setCategory("Beachfront")}>Beachfront</div>
      <div style={styles.tab} onClick={() => setCategory("Cabin")}>Cabin</div>
      <div style={styles.tab} onClick={() => setCategory("Luxury")}>Luxury</div>
      <div style={styles.tab} onClick={() => setCategory("Trending")}>Trending</div>
      <div style={styles.tab} onClick={() => setCategory("Budget")}>Budget</div>
    </div>
  );
};

const styles = { // Styles object for the layout and design of the category tabs
  bar: {
    display: 'flex',          // Use flexbox to display category tabs in a row
    justifyContent: 'center', // Center align the tabs horizontally
    flexWrap: 'wrap',         // Allow tabs to wrap to the next line if necessary
    overflow: 'auto',         // Allow overflow if the tabs exceed the container width
    padding: '20px',          // Add padding around the container
    gap: '20px',              // Add space between individual tabs
  },
  tab: {
    width: '180px',           // Set width for each category tab
    minWidth: '100px',        // Ensure each tab has a minimum width for responsiveness
    padding: '10px',          // Padding inside each tab
    border: '1px solid #ccc', // Light gray border color around each tab
    borderRadius: '8px',      // Rounded corners for each tab
    fontSize: '16px',         // Font size for the tab text
    textAlign: 'center',      // Center the text inside the tab
    cursor: 'pointer',        // Display a pointer cursor on hover to indicate the tab is clickable
  },
};

export default Categories; // Export the Categories component for use in other parts of the application