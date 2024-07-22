import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { generateProfileDocument } from '../services/documentService';

function ProfileDetailPage() {
  const { id } = useParams();
  const [documentUrl, setDocumentUrl] = useState(null);

  const handleGenerateDocument = async () => {
    try {
      const url = await generateProfileDocument(id);
      setDocumentUrl(url);
    } catch (error) {
      alert('Failed to generate document. Please try again.');
    }
  };

  return (
    <div>
      <button onClick={handleGenerateDocument}>Generate Document</button>
      {documentUrl && (
        <a href={documentUrl} target="_blank" rel="noopener noreferrer">
          Download Generated Document
        </a>
      )}
    </div>
  );
}

export default ProfileDetailPage;






