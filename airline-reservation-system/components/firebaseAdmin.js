
const admin = require("firebase-admin");
const serviceAccount = require("../../skyhub.json");

// Initialising the SDK
export const verifyIDToken = (token) => {
    if (!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "",
        });
    }

    // Returning the verification of the JSON Token as a promise
    return admin
    .auth()
    .verifyIDToken(token)
    .catch((error) => {
        throw error;
    })
};