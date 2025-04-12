import React, { useEffect } from 'react';
import '../index.css'; // Import the index.css file for styling

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://apps.aitext.cloud/inc/core/Aitext/Assets/js/chat.js";
    script.async = true;
    document.body.appendChild(script);

    const chatConfig = {
      baseUrl: "https://apps.aitext.cloud/aitext",
      instance_id: "670F3D5EC965F",
      access_token: "66eb929d72646"
    };

    script.onload = () => {
      window.loadCSS(chatConfig);
      window.initializeChatWidget(chatConfig);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className="chatbot-container" />; // This will use the styles from index.css
};

export default Chatbot;
