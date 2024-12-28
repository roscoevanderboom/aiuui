import React, { useState } from 'react';
import CredentialsDialog from './CredentialsDialog';
import './styles.css';

const UserToolbar: React.FC = () => {
  const [isCredentialsOpen, setIsCredentialsOpen] = useState(false);

  const handleUploadFile = () => {
    // Implement file upload logic
    console.log('Upload file clicked');
  };

  const handleSettings = () => {
    // Implement settings logic
    console.log('Settings clicked');
  };

  return (
    <div className="user-toolbar">
      <button onClick={handleUploadFile}>Upload File</button>
      <button onClick={handleSettings}>Settings</button>
      <button onClick={() => setIsCredentialsOpen(true)}>Create Credentials</button>
      <CredentialsDialog 
        isOpen={isCredentialsOpen}
        onClose={() => setIsCredentialsOpen(false)}
      />
    </div>
  );
};

export default UserToolbar;

