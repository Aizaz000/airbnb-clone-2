import React from 'react';                      // Import React
import { useNavigate } from 'react-router-dom'; // Import useNavigate to enable navigation

const ListingDetails = ({ data }) => { // ListingDetails component: Displays detailed information about a listing

  const navigate = useNavigate(); // Initialize the navigate function for page navigation
  const handleClick = () => {     // Function to handle book now button click
    navigate('/Booking');         // Navigate to booking page when Book Now is clicked
  }

  return (
    <div>
      <div style={styles.center}>                                         {/* Container for image and listing details */}
        <img src={data.image} alt={data.title} style={styles.image} />    {/* Listing image with dynamic source and alt text */}
        <div style={styles.details}>                                      {/* Listing details: Title, Type, Category, Location, Details, Pricing, Rating */}                              
          <h2>{data.title}</h2>
          <p><b>Type</b> {data.type}</p>
          <p><b>Category</b> {data.category}</p>
          <p><b>Location</b> {data.location}</p>
          <p><b>Details</b> {data.details}</p>
          <p><b>Pricing</b> $ {data.pricing}</p>
          <p><b>Customer Rating</b> {data.rating}</p>
          <div style={styles.button} onClick={handleClick}>Book Now</div> {/* Book Now button with click handler */}
        </div>
      </div>
      <div style={styles.center}>                                         {/* Container for the description of the listing */}
        <p style={styles.description}> {data.description} {data.description} {data.description} </p>
      </div>
    </div>
  );
};

// Style object for the component
const styles = {
  center: {
    display: 'flex',          // Use flexbox for centering elements in the container
    justifyContent: 'center', // Horizontally center the container elements
    flexWrap: 'wrap',         // Allow tabs to wrap to the next line if necessary
    gap: '30px',              // Space between the image and details sections
    padding: '10px',          // Padding around the container elements
  },
  image: {
    height: 'auto',           // Maintain aspect ratio for image height
    width: '500px',           // Fixed width for the image
  },
  details: {
    height: 'auto',           // Allow details section to expand based on content
    width: '250px',           // Fixed width for the details section
    border: '1px solid #ccc', // Light grey border around the details section

    padding: '10px',          // Padding inside the details section
  },
  description: {
    maxWidth: '800px',        // Limit the description width for better readability
    textAlign: 'justify',     // Justify the text to spread across the available width
  },
  button: {
    padding: '10px',           // Padding inside the button
    color: 'white',            // White text color inside the button
    backgroundColor: 'salmon', // Salmon-colored background for the button
    fontSize: '18px',          // Font size for the button text
    textDecoration: 'none',    // Remove underline from any link (if it's a link element)
    cursor: 'pointer',         // Change the cursor to a pointer on hover
  },
};

export default ListingDetails; // Export the ListingDetails component for use elsewhere