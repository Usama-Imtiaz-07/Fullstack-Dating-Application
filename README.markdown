# Tinder Clone

A full-stack dating app replicating Tinder's core features, including user authentication, swipe functionality, and real-time messaging. Built as part of the Clever Programmer YouTube course, this project showcases modern web development with React, Node.js, Express, MongoDB, and Firebase.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Project Overview
This project is a full-stack Tinder clone that replicates the swipe-based matching and messaging functionality of the popular dating app. Users can sign in with Google, create profiles, swipe to match with others, and engage in real-time chats. The app integrates a MongoDB backend for data persistence and Firebase for authentication, deployed with a React frontend and Node.js/Express backend.

The project was built following the Clever Programmer YouTube tutorial series, serving as a learning exercise to master full-stack development with the MERN stack and Firebase.

## Features
- **User Authentication**: Sign in with Google using Firebase Authentication.
- **Swipe Functionality**: Swipe left to pass or right to like user profiles, mimicking Tinder's card-based UI.
- **Real-Time Messaging**: Chat with matched users in real time using a Node.js/Express backend.
- **Profile Creation**: Users can create and edit profiles with images and bios.
- **Responsive Design**: Mobile-friendly interface built with React and Tailwind CSS.
- **Data Persistence**: MongoDB stores user profiles and match data.

## Tech Stack
- **Frontend**: React, Tailwind CSS, React Tinder Card
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Authentication**: Firebase Authentication
- **API Testing**: Postman
- **Deployment**: (Optional) Frontend deployable on Vercel, backend on Heroku or similar

## Installation
Follow these steps to set up the project locally:

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Firebase account for authentication
- Postman (optional, for API testing)

### Steps
1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/tinder-clone.git
   cd tinder-clone
   ```

2. **Set Up Environment Variables**
   - Create a `.env` file in the root directory of both `frontend` and `backend` folders.
   - For the backend, add:
     ```env
     MONGODB_URI=your_mongodb_connection_string
     PORT=8001
     ```
   - For the frontend, add Firebase configuration:
     ```env
     REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
     REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
     REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
     ```

3. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

4. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

5. **Set Up MongoDB**
   - If using MongoDB Atlas, create a cluster and obtain the connection string.
   - If using local MongoDB, ensure the service is running.

6. **Run the Backend**
   ```bash
   cd backend
   npm start
   ```
   The backend runs on `http://localhost:8001`.

7. **Run the Frontend**
   ```bash
   cd frontend
   npm start
   ```
   The frontend runs on `http://localhost:3000`.

8. **Test APIs (Optional)**
   - Use Postman to test endpoints like `http://localhost:8001/tinder/cards` for GET and POST requests.

## Usage
1. Open the app in your browser at `http://localhost:3000`.
2. Sign in with Google to create or access your profile.
3. Swipe right to like or left to pass on user profiles.
4. Chat with matched users in the messaging section.
5. Explore the profile section to edit your details.

## Screenshots
![Login Screen](assets/images/login.png)
![Swipe Interface](assets/images/swipe.png)
![Chat Interface](assets/images/chat.png)

*Note*: Add screenshots to the `assets/images` folder in your repository and update the paths above.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

For bugs or feature requests, please open an issue on GitHub.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements
- [Clever Programmer](https://www.youtube.com/c/CleverProgrammer) for the comprehensive tutorial series.
- [Firebase](https://firebase.google.com/) for authentication and hosting.
- [MongoDB](https://www.mongodb.com/) for the database.
- [React Tinder Card](https://www.npmjs.com/package/react-tinder-card) for swipe functionality.