const { google } = require("googleapis");
const path = require("path");

const PROJECT_ID = " manishfcm-8c910"; // Replace with your Firebase project ID
const MESSAGING_SCOPE = "https://www.googleapis.com/auth/firebase.messaging";
const SCOPES = [MESSAGING_SCOPE];

/**
 * Get a valid access token.
 */
function getAccessToken() {
  return new Promise(function (resolve, reject) {
    try {
      const serviceAccountPath = path.resolve(
        __dirname,
        "../getAccessToken/service-account.json"
      );
      const key = require(serviceAccountPath);

      const jwtClient = new google.auth.JWT(
        key.client_email,
        null,
        key.private_key,
        SCOPES,
        null
      );

      jwtClient.authorize(function (err, tokens) {
        if (err) {
          reject(err);
          return;
        }
        resolve(tokens.access_token);
      });
    } catch (error) {
      reject(error);
    }
  });
}

// Usage example:
getAccessToken()
  .then((accessToken) => {
    console.log("Access token:", accessToken);
  })
  .catch((err) => {
    console.error("Error getting access token:", err);
  });
