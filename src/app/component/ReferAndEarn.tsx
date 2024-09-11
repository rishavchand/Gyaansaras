"use client"
import React, { useEffect, useState } from 'react';

const ReferAndEarn: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [referralLink, setReferralLink] = useState<string | null>(null);

  // Set the referral link only when the component is mounted on the client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setReferralLink(`${window.location.origin}/referral?code=ABC123`);
    }
  }, []);

  const handleCopy = () => {
    if (referralLink) {
      navigator.clipboard.writeText(referralLink).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copy status after 2 seconds
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-blue-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">Refer and Earn</h2>
      <p className="text-lg text-gray-700 mb-4">
        Share your unique referral link with friends and earn rewards when they sign up!
      </p>
      <div className="flex items-center mb-4">
        <input
          type="text"
          readOnly
          value={referralLink || 'Generating referral link...'}
          className="flex-1 p-2 border border-gray-300 rounded-lg mr-2 bg-white text-gray-700"
        />
        <button
          onClick={handleCopy}
          className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
          disabled={!referralLink}
        >
          {copied ? 'Copied!' : 'Copy Link'}
        </button>
      </div>
      <p className="text-sm text-gray-500">
        Share this link via email, social media, or any other platform to start earning rewards.
      </p>
    </div>
  );
};

export default ReferAndEarn;
