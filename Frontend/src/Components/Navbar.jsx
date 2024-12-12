import React, { useContext } from 'react';                // Import React and useContext
import { Link } from 'react-router-dom';                  // Import link for navigation
import { useNavigate } from 'react-router-dom';           // Import useNavigate to enable navigation
import { GlobalContext } from '../context/GlobalContext'; // Import GlobalContext for shared Search state

const Navbar = () => { // Navbar component: renders a navigation bar with logo, functional tabs and login/signup options

  const { setSearch } = useContext(GlobalContext); // Accessing the setSearch function from GlobalContext
  const navigate = useNavigate();                  // Add navigate inside the component

  const handleClick = () => { // Function to handle home button click
    setSearch("");            // Update the shared Search state with "" so that all the listings are rendered correctly when you click home after a search operation
    navigate('/');            // Navigate to the homepage
  };

  return (
    <div style={styles.navbar}>    {/* Main container for the navbar */}
      <div style={styles.logodiv}> {/* Logo container with logo image */}
        <img 
          src="https://cdn.icon-icons.com/icons2/2699/PNG/512/airbnb_logo_icon_170606.png" 
          alt="logo" 
          style={styles.logo} 
        />
      </div>
      <div style={styles.tabs}>                                       {/* Navigation tabs container */}
        <div onClick={handleClick} style={styles.tab}>Home</div>      {/* Link to the homepage with applied styles */}
        <Link to="/Experiences" style={styles.tab}>Experiences</Link> {/* Link to the experiences with applied styles */}
        <Link to="/Online" style={styles.tab}>Online</Link>           {/* Link to the online experiences with applied styles */}
      </div>
      <div style={styles.menu}>                                       {/* Menu section container */}
        <div style={styles.login}>Login</div>                         {/* Link to the login page with applied styles */}
        <div style={styles.signup}>Signup</div>                       {/* Link to the signup page with applied styles */}
      </div>
    </div>
  );
};

const styles = { // Styles object to define the layout and design of the navbar
  navbar: {
    display: 'flex',               // Use flexbox for positioning
    justifyContent: 'center',      // Center align navbar content
    flexWrap: 'wrap',              // Allow wrapping for responsive design
    gap: '50px',                   // Add space between logo, tabs, and menu
    padding: '10px',               // Add padding around the navbar
  },
  logodiv: {
    display: 'flex',               // Use flexbox for positioning the logo
    justifyContent: 'left',        // Align the logo to the left
    padding: '5px',                // Padding around the logo container
  },
  tabs: {
    display: 'flex',               // Use flexbox to align the navigation tabs horizontally
    justifyContent: 'center',      // Center the tabs in the navbar
  },
  menu: {
    display: 'flex',               // Use flexbox to position the login and signup buttons
    justifyContent: 'center',      // Center the menu items
  },
  logo: {
    height: '70px',                // Set a fixed height for the logo
    width: 'auto',                 // Maintain aspect ratio of the logo
  },
  tab: {
    margin: '25px 20px 25px 20px', // Margin around each tab for spacing
    color: 'black',                // Set font color to black
    fontSize: '20px',              // Font size for the tab text
    fontWeight: 'bold',            // Make tab text bold
    textDecoration: 'none',        // Set text decoration to none; remove underline from links
    cursor: 'pointer',             // Display pointer cursor to indicate the tab is clickable
  },
  login: {
    margin: '15px 5px 25px 20px',  // Margin around the login button
    padding: '10px',               // Padding inside the login button
    border: '2px solid salmon',    // Border around the button with a salmon color
    borderRadius: '8px',           // Rounded corners for the button
    color: 'white',                // Text color inside the button
    backgroundColor: 'salmon',     // Background color of the login button
    fontSize: '18px',              // Font size for the login text
    textDecoration: 'none',        // Set text decoration to none; remove underline from links
    cursor: 'pointer',             // Pointer cursor on hover
  },
  signup: {
    margin: '15px 0px 25px 5px',   // Margin around the signup button
    padding: '10px',               // Padding inside the signup button
    border: '2px solid salmon',    // Border around the button with a salmon color
    borderRadius: '8px',           // Rounded corners for the button
    color: 'salmon',               // Text color inside the signup button
    fontSize: '18px',              // Font size for the signup text
    textDecoration: 'none',        // Set text decoration to none; remove underline from links
    cursor: 'pointer',             // Pointer cursor on hover
  },
};

export default Navbar; // Export the Navbar component for use in other parts of the application