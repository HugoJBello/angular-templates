interface AuthConfig {
    CLIENT_ID: string;
    CLIENT_DOMAIN: string;
    AUDIENCE: string;
    REDIRECT: string;
    SCOPE: string;
  }
  
  export const AUTH_CONFIG: AuthConfig = {
    CLIENT_ID: 'DN4VGn4YJsikf5k87EuJ44lVZi9mBFrh',
    CLIENT_DOMAIN: 'cam-viewer-hjbello.eu.auth0.com', // e.g., you.auth0.com
    AUDIENCE: 'https://cam-viewer-hjbello.eu.auth0.com/userinfo', // e.g., http://localhost:3001
    REDIRECT: 'http://localhost:4200/callback',
    SCOPE: 'openid profile email'
  };
  