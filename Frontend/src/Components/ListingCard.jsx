import React, {useContext} from 'react';                  // Import React and useContext
import { useNavigate } from 'react-router-dom';           // Import useNavigate to enable navigation
import { GlobalContext } from '../context/GlobalContext'; // Import GlobalContext for shared Id state

const ListingCard = ({ id, client, available, title, type, category, location, rating, details, pricing, description, image}) => { // ListingCard component: Displays a listing with an image, title, rating, type, details, and pricing

  const navigate = useNavigate();              // Add navigate inside the component
  const { setId } = useContext(GlobalContext); // Accessing the setId function from GlobalContext
  
  const handleClick = () => { // Function to handle card click
    setId(id);                // Set shared Id state to Id (passed as prop)
    navigate('/Details');     // Navigate to Listing Details page
  }

  return (
    <div style={styles.card} onClick={handleClick}>           {/* Main container for the listing card */}
      <img style={styles.image} src={image} alt="Image..." /> {/* Display the image of the listing */}
      <div style={styles.title}>                              {/* Container for title and rating */}
        <h3>{title}</h3>                                      {/* Display the title of the listing */}
        <p>{rating}</p>                                       {/* Display the rating */}
      </div>
      <div style={styles.details}>                            {/* Container for listing details */}
        <p>{type} | {location}</p>                            {/* Display the type and location of the listing */}
        <p>{details}</p>                                      {/* Display additional details of the listing */}
        <p>$ {pricing}</p>                                    {/* Display pricing information */}
      </div>
    </div>
  );
};

// Styles object to define the appearance and layout of the ListingCard component
const styles = {
  card: {
    height: 'auto',                  // Allow card height to adjust based on content
    width: 'auto',                   // Allow card width to adjust based on content
    maxWidth: '350px',               // Limit the maximum width of the card to 350px
    padding: '8px',                  // Padding inside the card for spacing
    border: '1px solid #ccc',        // Light gray border around the card
    borderRadius: '8px',             // Rounded corners for the card
    backgroundColor: 'snow',         // Set background color of the card to a light snow color
    fontSize: '12px',                // Set a small font size for the content
    lineHeight: '1',                 // Set line height to adjust spacing between lines (for better text density)
    cursor: 'pointer',               // Change cursor to pointer when hovering over the card (indicating interactivity)
  },
  image: {
    height: '170px',                 // Set fixed height for the image
    width: '100%',                   // Make the image width span the full width of the card
    borderRadius: '8px',             // Round the corners of the image for a smoother look
  },
  title: {
    display: 'flex',                 // Use flexbox to position title and rating side by side
    justifyContent: 'space-between', // Add space between the title and the rating
    margin: '3px',                   // Margin around the title container
  },
  details: {
    margin: '3px',                   // Margin around the details section of the card
  },
};

export default ListingCard; // Export the ListingCard component for use in other parts of the application