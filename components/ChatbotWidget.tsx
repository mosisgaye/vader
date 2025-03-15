"use client"; // Indique que ce composant est rendu côté client

import { useEffect } from "react";

declare global {
  interface Window {
    initChatbot: (config: {
      apiKey: string;
      apiUrl: string;
      primaryColor: string;
      secondaryColor: string;
      welcomeMessage: string;
      position: string;
      collectUserData: boolean;
      widgetTitle: string;
      container: HTMLElement;
    }) => void;
  }
}

export default function ChatbotWidget() {
  useEffect(() => {
    (function() {
      // Configuration
      const apiKey = "votre-clé-api";
      const apiUrl = "http://localhost:3000/api/chatbot/message";
      const primaryColor = "#4F46E5";
      const secondaryColor = "#FFFFFF";
      const welcomeMessage = "Bonjour ! Comment puis-je vous aider aujourd'hui ?";
      const position = "right";
      const collectUserData = false;
      const widgetTitle = "Mon Assistant Virtuel";
      
      // Créer l'élément div pour le chatbot
      const chatbotContainer = document.createElement('div');
      chatbotContainer.id = 'chatbot-container-votre-clé-api';
      document.body.appendChild(chatbotContainer);
      
      // Charger le script React du chatbot
      const script = document.createElement('script');
      script.src = 'http://localhost:3000/chatbot-widget.js';
      script.async = true;
      script.onload = function() {
        // Initialiser le chatbot avec la configuration
        if (window.initChatbot) {
          window.initChatbot({
            apiKey,
            apiUrl,
            primaryColor,
            secondaryColor,
            welcomeMessage,
            position,
            collectUserData,
            widgetTitle,
            container: chatbotContainer
          });
        }
      };
      document.head.appendChild(script);
      
      // Styles CSS pour le container
      const style = document.createElement('style');
      style.textContent = `
        #chatbot-container-votre-clé-api {
          position: fixed;
          z-index: 9999;
          bottom: 20px;
          right: 20px;
        }
      `;
      document.head.appendChild(style);
    })();
  }, []);

  return null; // Ce composant ne rend rien dans le DOM, il se contente d'injecter le widget
}
