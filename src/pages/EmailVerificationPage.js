import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { verifyEmail } from '../services/auth';

function EmailVerificationPage() {
  const [verificationStatus, setVerificationStatus] = useState('Verifying...');
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function verify() {
      try {
        await verifyEmail(token);
        setVerificationStatus('Email verified successfully!');
        setTimeout(() => navigate('/login'), 3000);
      } catch (error) {
        setVerificationStatus('Verification failed. Please try again.');
      }
    }
    verify();
  }, [token, navigate]);

  return (
    <div>
      <h1>Email Verification</h1>
      <p>{verificationStatus}</p>
    </div>
  );
}

export default EmailVerificationPage;

