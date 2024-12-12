import React, { useState } from 'react'; // Import React useState
import axios from 'axios';               // Import axios for making mock API calls

const BookingPage = ({ data }) => { // BookingPage component: Displays detailed information about a listing and handles bookings

  const [checkInDate, setCheckInDate] = useState('');         // State for storing check-in date
  const [checkOutDate, setCheckOutDate] = useState('');       // State for storing check-out date
  const [userName, setUserName] = useState('');               // State for storing user's name
  const [error, setError] = useState('');                     // State for storing validation errors
  const [bookingSummary, setBookingSummary] = useState(null); // State for storing booking summary

  const validateForm = () => {           // Function to validate form inputs
    if (!checkInDate || !checkOutDate) { // validate that both dates are selected
      setError('Select both check-in and check-out dates.');
      return false;
    }

    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    
    if (checkIn >= checkOut) { // validate that the selected dates are in correct order
      setError('Check-out date must be after check-in date.');
      return false;
    }
    
    setError(''); // Clear error if the dates are valid
    return true;
  };

  const handleClick = () => { // Function to handle the add booking click
    if (validateForm()) {
      const checkIn = new Date(checkInDate);
      const checkOut = new Date(checkOutDate);
      const totalStay = (checkOut - checkIn) / (1000 * 3600 * 24); // Calculate total stay in days
      const totalPrice = totalStay * data.pricing;                 // Calculate total price for the stay

      setBookingSummary({ // Set booking summary
        checkIn: checkInDate,
        checkOut: checkOutDate,
        totalStay,
        totalPrice,
      });

      axios.post('http://localhost:5000/api/bookings', { // Make mock POST request to the server
        listingId: data.id,
        username: userName,
        checkIn: checkInDate,
        checkOut: checkOutDate
      })
      .then((response) => {
        alert('Booking successful!');
        console.log(response.data);
      })
      .catch((error) => {
        alert('Booking failed!');
        console.error(error);
      });
    }
  };

  return (
    <div>
      <div style={styles.center}>                                      {/* Container for image and listing details */}
        <img src={data.image} alt={data.title} style={styles.image} /> {/* Listing image */}
        <div style={styles.details}>                                   {/* Listing details: Title, Type, Category, Location, Details, Pricing, Rating */}
          <h2>{data.title}</h2>
          <p><b>Type:</b> {data.type}</p>
          <p><b>Category:</b> {data.category}</p>
          <p><b>Location:</b> {data.location}</p>
          <p><b>Details:</b> {data.details}</p>
          <p><b>Pricing:</b> $ {data.pricing}</p>
          <p><b>Customer Rating:</b> {data.rating}</p>
        </div>
      </div>
      <div style={styles.center}>                                      {/* Container for the description of the listing */}
        <p style={styles.description}>{data.description} {data.description} {data.description}</p>
      </div>
      <div style={styles.center}>                                      {/* Form for selecting dates and user input */}
        <div style={styles.form}>
          <input 
            type="text" 
            placeholder="Your Name" 
            value={userName} 
            onChange={(e) => setUserName(e.target.value)} 
            style={styles.input} 
          />
          <input 
            type="date" 
            value={checkInDate} 
            onChange={(e) => setCheckInDate(e.target.value)} 
            style={styles.input} 
          />
          <input 
            type="date" 
            value={checkOutDate} 
            onChange={(e) => setCheckOutDate(e.target.value)} 
            style={styles.input} 
          />
          {error && <p style={styles.error}>{error}</p>}               {/* Display error message if form is invalid */}
          <div style={styles.button} onClick={handleClick}>Add Booking</div>
        </div>
        <div style={styles.summary}>                                   {/* Booking summary container */}
          <h3>Booking Summary</h3>
          {bookingSummary ? (
            <>
              <p><b>Check-in:</b> {bookingSummary.checkIn}</p>
              <p><b>Check-out:</b> {bookingSummary.checkOut}</p>
              <p><b>Total Stay:</b> {bookingSummary.totalStay} days</p>
              <p><b>Total Price:</b> ${bookingSummary.totalPrice}</p>
            </>
          ) : (
            <p>No booking yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = { // Style object for the component
  center: {
    display: 'flex',           // Use flexbox to align child elements
    justifyContent: 'center',  // Center the items horizontally
    flexWrap: 'wrap',          // Allow tabs to wrap to the next line if necessary
    gap: '30px',               // Space between child elements
    padding: '10px',           // Padding around the container
  },
  image: {
    height: 'auto',            // Maintain aspect ratio for the image
    maxWidth: '500px',         // Fixed width for the image
    border: '1px solid #ccc',  // Light gray border around the image
  },
  details: {
    height: 'auto',            // Adjust height based on content
    width: '250px',            // Fixed width for the details box
    padding: '10px',           // Padding inside the box for better spacing
    border: '1px solid #ccc',  // Light gray border around the details box
  },
  description: {
    maxWidth: '800px',         // Limit the width of the description for better readability
    textAlign: 'justify',      // Align text to both left and right edges for a neat layout
  },
  form: {
    width: '500px',            // Fixed width for the form container
    display: 'flex',           // Use flexbox for layout
    flexDirection: 'column',   // Stack form inputs vertically
    gap: '10px',               // Space between form elements
    padding: '10px',           // Padding around the form
    border: '1px solid #ccc',  // Light gray border for the form
  },
  input: {
    padding: '10px',           // Padding inside the input field
    border: '1px solid #ccc',  // Light gray border for the input field
    fontSize: '16px',          // Font size for the input text
  },
  button: {
    padding: '10px',           // Padding inside the button
    backgroundColor: 'salmon', // Salmon color for the button background
    fontSize: '18px',          // Font size for the button text
    color: 'white',            // White text color for the button
    cursor: 'pointer',         // Pointer cursor on hover for better UX
  },
  summary: {
    width: '250px',            // Fixed width for the summary container
    padding: '10px',           // Padding around the summary box
    border: '1px solid #ccc',  // Light gray border for the summary box
  },
  error: {
    fontSize: '14px',          // Font size for error text
    color: 'red',              // Red text for error messages
  },
};

export default BookingPage; // Export the BookingPage component for use elsewhere