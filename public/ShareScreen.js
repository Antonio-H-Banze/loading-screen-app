import React, { useState } from 'react';

function ShareScreen({ contentId }) {
    const [email, setEmail] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    function handleChange(e) {
        setEmail(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setIsSending(true);
        setError(null);
        setSuccess(null);
        try {
            await fetch(`http://localhost:3000/share`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ contentId, email }),
            });
            setSuccess(true);
        } catch (err) {
            setError(err.message);
        }
        setIsSending(false);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={handleChange} />
            <button type="submit" disabled={isSending}>
                Share
            </button>
            {error && <div>{error}</div>}
            {success && <div>

