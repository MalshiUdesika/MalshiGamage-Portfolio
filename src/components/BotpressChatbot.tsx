import { useEffect } from "react";

const BotpressChatbot = () => {
  useEffect(() => {
    // جلوگیری duplicate loading
    if (document.getElementById("botpress-script")) return;

    // 1. Load inject.js FIRST
    const injectScript = document.createElement("script");
    injectScript.src = "https://cdn.botpress.cloud/webchat/v3.6/inject.js";
    injectScript.async = true;
    injectScript.id = "botpress-script";

    injectScript.onload = () => {
      console.log("Inject script loaded");

      // 2. Then load your bot script
      const botScript = document.createElement("script");
      botScript.src =
        "https://files.bpcontent.cloud/2026/04/17/01/20260417011536-68TOEFKO.js";
      botScript.async = true;

      botScript.onload = () => {
        console.log("Botpress chatbot loaded successfully");
      };

      botScript.onerror = () => {
        console.error("Failed to load Botpress chatbot");
      };

      document.body.appendChild(botScript);
    };

    injectScript.onerror = () => {
      console.error("Failed to load inject.js");
    };

    document.body.appendChild(injectScript);
  }, []);

  return null;
};

export default BotpressChatbot;