import React from 'react'

export const loadGoogleAnalytic = () => {
    // Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = process.env.GOOGLE_TAG_URL || '';
    document.head.appendChild(script);

    const scriptContent = document.createTextNode(`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '');
        `);
    script.appendChild(scriptContent);

    return () => {
        document.head.removeChild(script);
    };
}

