import { useState } from 'react';
import './EmailModal.css';

const EMAIL = 'conleth@umich.edu';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmailModal = ({ isOpen, onClose }: EmailModalProps) => {
  const [heading, setHeading] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSend = () => {
    const subject = encodeURIComponent(heading.trim() || 'Website inquiry');
    const body = encodeURIComponent(message.trim());
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setHeading('');
    setMessage('');
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="email-modal-backdrop" onClick={handleBackdropClick} role="dialog" aria-modal="true" aria-labelledby="email-modal-title">
      <div className="email-modal">
        <div className="email-modal-header">
          <div>
            <h2 id="email-modal-title" className="email-modal-title">Contact</h2>
            <p className="email-modal-subtitle">Send a message to conleth@umich.edu</p>
          </div>
          <button type="button" className="email-modal-close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        <div className="email-modal-body">
          <label htmlFor="email-subject" className="email-modal-label">Subject</label>
          <input
            id="email-subject"
            type="text"
            className="email-modal-input"
            placeholder="e.g. Project inquiry, collaboration"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
          />
          <label htmlFor="email-message" className="email-modal-label">Message</label>
          <textarea
            id="email-message"
            className="email-modal-textarea"
            placeholder="How can I help? Share your project details or question."
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <p className="email-modal-hint">Click Send to open your email client with this message ready to send.</p>
        </div>
        <div className="email-modal-footer">
          <button type="button" className="email-modal-btn email-modal-btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button type="button" className="email-modal-btn email-modal-btn-primary" onClick={handleSend}>
            Send email
          </button>
        </div>
      </div>
    </div>
  );
};
