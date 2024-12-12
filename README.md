# Phase 2: Airbnb-Inspired Application

## Project Description
This project is an Airbnb-inspired web application designed for managing and browsing property listings. Phase 2 focuses on implementing both the frontend and backend functionalities. The application allows users to browse listings, filter them by location and category, and view detailed information about specific properties. Additionally, a basic mock booking functionality is included to simulate interactions.

### Features
- **Frontend**: A React application with context-based state management to handle global variables (Search, Category, ID).
- **Backend**: An Express.js server serving data from a static JSON file and providing API endpoints for:
  - Fetching all listings.
  - Fetching listings by ID.
  - Filtering listings by location or category.
  - Mock booking functionality.

## Instructions for Running the Project

### Prerequisites
- **Node.js** (version 14 or higher)
- **npm** (Node Package Manager)

### Running the Backend Server
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Start the Express.js server:
   ```bash
   node index.js
   ```
4. The backend server will run on [http://localhost:5000](http://localhost:5000).

### Running the Frontend Server
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```
4. The frontend application will run on [http://localhost:3000](http://localhost:3000).

### Note
Run backend server before running the frontend to enable proper interaction between the frontend and backend.

## Details About Routing and Navigation

### Frontend Routes
- **Homepage**: Displays all listings with options to search and filter.
- **Filtered Listings**: Dynamically updates the displayed listings based on search criteria (location, category).
- **Detailed View**: Clicking on a listing card navigates to a page displaying detailed information about the selected listing.

### Backend API Endpoints
- **GET /api/listings**: Fetch all available listings.
- **GET /api/listings/:id**: Fetch details of a listing by its unique ID.
- **GET /api/listings/location/:location**: Retrieve listings filtered by location (case-insensitive).
- **GET /api/listings/category/:category**: Retrieve listings filtered by category (case-insensitive).
- **POST /api/bookings**: Simulate a booking process (mock functionality).

## Project Structure
```bash
airbnb-2/
│
├──Backend/
│   │
│   ├──node_modules/
│   ├──data.json
│   ├──index.js
│   ├──package.json
│   ├──package-lock.json
│
├──Frontend/
│   │
│   ├──node_modules/
│   ├──public/
│   ├──src/
│   │  │
│   │  ├── Components/
│   │  │   ├── BookingPage.jsx
│   │  │   ├── Categories.jsx
│   │  │   ├── Footer.jsx
│   │  │   ├── ListingCard.jsx
│   │  │   ├── ListingDetails.jsx
│   │  │   ├── Listings.jsx
│   │  │   ├── Navbar.jsx
│   │  │   ├── SearchBar.jsx
│   │  │
│   │  ├── context/
│   │  │   └── GlobalContext.js
│   │  │
│   │  ├── App.js
│   │  ├── index.js
│   │  ├── index.css
│   │  ├── reportWebVitals.js
│   │
│   ├──package.json
│   ├──package-lock.json
│
├──.gitignore
├──Readme Phase 2
```
