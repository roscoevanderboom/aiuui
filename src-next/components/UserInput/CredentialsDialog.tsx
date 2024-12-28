import React, { useState } from 'react';
import './styles.css';

interface CredentialsDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const CredentialsDialog: React.FC<CredentialsDialogProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [secret, setSecret] = useState('');

  const handleSave = () => {
    if (name && secret) {
      localStorage.setItem('credentials', JSON.stringify({ name, secret }));
      setName('');
      setSecret('');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="credentials-dialog-overlay">
      <div className="credentials-dialog">
        <h2>Create Credentials</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Secret"
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
        />
        <div className="dialog-buttons">
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default CredentialsDialog;
