import React from 'react'; // Import React

const Footer = () => { // Footer component: Displays footer content with sections like support, community, hosting, and about, along with social media links and copyright information
  return (
    <div style={styles.footer}>  {/* Footer container */}
      <hr style={styles.line} /> {/* Signature line */}
      <div style={styles.tabs}>  {/* Footer tabs: Support, Community, Hosting, About */}
        <div style={styles.tab}>
          <h3>Support</h3>
          <p style={styles.text}>
            Airbnb’s team offers help 24/7 to ensure your experience is seamless. From managing bookings to resolving unexpected issues, we’re committed to delivering reliable, prompt assistance. Rest assured, our priority is your satisfaction, and we’ll go the extra mile to provide a secure and enjoyable experience every step of the way, wherever you go.
          </p>
        </div>
        <div style={styles.tab}>
          <h3>Community</h3>
          <p style={styles.text}>
            At Airbnb, we celebrate diversity and foster connections. Our global community thrives on shared experiences and mutual respect. Whether hosting or traveling, you’ll feel at home. Together, we build relationships, bridge distances, and create a network of trust and understanding that enriches lives across the world.
          </p>
        </div>
        <div style={styles.tab}>
          <h3>Hosting</h3>
          <p style={styles.text}>
            Hosting with Airbnb lets you earn while sharing your space and hospitality. From cozy rooms to luxurious homes, connect with global travelers and deliver exceptional stays. With comprehensive tools, dedicated resources, and expert support, Airbnb empowers hosts to create unique experiences while fostering trust and comfort for every guest.
          </p>
        </div>
        <div style={styles.tab}>
          <h3>About</h3>
          <p style={styles.text}>
            Founded to make everyone feel they belong, Airbnb connects travelers and hosts worldwide. We inspire meaningful journeys by enabling shared experiences and cultural discovery. Through innovation and community, we’ve grown from a small idea to a global platform, enriching lives and redefining the way the world travels and connects.
          </p>
        </div>
      </div>
      <div style={styles.icons}> {/* Social media icons */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
          alt="YouTube"
          onClick={() => window.open('https://www.youtube.com/airbnb', '_blank')} // Open YouTube link in a new tab
          style={styles.icon}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
          alt="Instagram"
          onClick={() => window.open('https://www.instagram.com/airbnb/?hl=en', '_blank')} // Open Instagram link in a new tab
          style={styles.icon}
        />
        <img
          src="https://static.vecteezy.com/system/resources/previews/016/716/481/non_2x/facebook-icon-free-png.png"
          alt="Facebook"
          onClick={() => window.open('https://www.facebook.com/airbnb/', '_blank')} // Open Facebook link in a new tab
          style={styles.icon}
        />
        <img
          src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-black-icon.png"
          alt="X"
          onClick={() => window.open('https://twitter.com/airbnb', '_blank')} // Open Twitter link in a new tab
          style={styles.icon}
        />
        <img
          src="https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Tiktok-512.png"
          alt="Tiktok"
          onClick={() => window.open('https://www.tiktok.com/@airbnb?lang=en', '_blank')} // Open TikTok link in a new tab
          style={styles.icon}
        />
      </div>
      <div style={styles.copyright}> {/* Copyright information */}
        <h4>© 2024 Airbnb Clone. All rights reserved.</h4>
      </div>
    </div>
  );
};

// Styles object with responsive design for footer
const styles = {
  footer: {
    boxSizing: 'border-box',   // Ensure padding and border are included in the total width and height
    padding: '20px',           // Padding around the footer content
  },
  line: {
    display: 'flex',           // Flexbox for centering the line
    justifyContent: 'center',  // Center the line horizontally
    height: '1px',             // Set height of the line
    width: 'auto',             // Set width automatically based on the parent container
    maxWidth: '1100px',        // Maximum width of the line
    border: 'none',            // Remove default border
    backgroundColor: 'salmon', // Set background color of the line
  },
  tabs: {
    display: 'flex',           // Flexbox for aligning the tabs horizontally
    justifyContent: 'center',  // Center the content
    flexWrap: 'wrap',          // Allow wrapping of elements if space is constrained
    gap: '20px',               // Spacing between each tab section
  },
  tab: {
    flex: '1 1 300px',         // Allow flexible growth and shrinkage of the tab sections
    maxWidth: '250px',         // Limit the maximum width of each tab section
    cursor: 'pointer',         // Change cursor to pointer for interactivity (if needed)
    color: 'black',            // Set font color to black
    textDecoration: 'none',    // Set text decoration to none; remove underline from links    
  },
  text: {
    fontSize: '12px',          // Small font size for text inside tabs
    textAlign: 'justify',      // Justify text alignment for better readability
  },
  icons: {
    display: 'flex',           // Flexbox for aligning social media icons horizontally
    justifyContent: 'center',  // Center the icons
    flexWrap: 'wrap',          // Allow wrapping of icons if screen size is smaller
    padding: '20px',           // Padding around the icons
    gap: '20px',               // Spacing between the icons
  },
  icon: {
    height: '35px',            // Set fixed height for social media icons
    width: 'auto',             // Set width to auto to maintain aspect ratio
    cursor: 'pointer',         // Change cursor to pointer for clickable icons
  },
  copyright: {
    textAlign: 'center',       // Center-align the copyright text
    fontSize: '12px',          // Small font size for the copyright text
  },
};

export default Footer; // Export Footer component for use in other parts of the application