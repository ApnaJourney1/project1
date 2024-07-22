import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/main.css';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProfilesPage from './pages/ProfilesPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import CreateProfilePage from './pages/CreateProfilePage';
import ProfileDetailPage from './pages/ProfileDetailPage';
import EditProfilePage from './pages/EditProfilePage';
import { AuthProvider } from './services/auth';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <NavigationBar />
          <main className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/profiles" element={<ProfilesPage />} />
              <Route path="/profiles/:id" element={<ProfileDetailPage />} />
              <Route path="/profiles/:id/edit" element={<EditProfilePage />} />
              <Route path="/create-profile" element={<CreateProfilePage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;




