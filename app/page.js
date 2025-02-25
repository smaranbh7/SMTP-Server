'use client';

import { useState } from 'react';

export default function Home() {
  const [status, setStatus] = useState('');

  const handleSendDemo = async () => {
    setStatus('Sending emergency alert...');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // TODO: change to the email you want to send to
          // Look at Emb folder
          email: 'testbloodbond@gmail.com',
          message: `🚨 URGENT BLOOD NEEDED 🚨

Location: Local Blood Bank
Blood Type Needed: All blood types welcome
Contact: For immediate response
Additional Info: This is an emergency blood requirement alert.

Please respond immediately if you can donate.
Your donation can save a life.

This is an automated emergency alert system.`
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setStatus('Emergency alert sent successfully!');
      } else {
        setStatus('Failed to send alert: ' + data.error);
      }
    } catch (error) {
      setStatus('Failed to send alert');
    }
  };

  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
        <h1 className="text-3xl font-bold mb-2 text-center text-red-600">🚨 Emergency Blood Alert 🚨</h1>
        <p className="text-gray-600 mb-6 text-center">Send immediate blood requirement alert</p>
        
        <button
          onClick={handleSendDemo}
          className="w-full bg-red-600 text-white py-4 px-6 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-lg font-semibold transition-colors duration-200"
        >
          Send Emergency Alert
        </button>

        {status && (
          <p className={`mt-4 text-center ${status.includes('success') ? 'text-green-600' : 'text-red-600'} font-semibold`}>
            {status}
          </p>
        )}
      </div>
    </main>
  );
} 