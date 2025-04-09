DB_NAME = process.env.DB_NAME || "fundi";

const modelsNames = {
  user: "User",
  chat: "Chat",
  payment: "Payment",
  jobs: "Job",
};

const Tokens = {
  ACCESS_TOKEN_EXPIRY: process.env.ACCESS_TOKEN_EXPIRY || "10d",  
  REFRESH_TOKEN_EXPIRY: process.env.REFRESH_TOKEN_EXPIRY || '24h', 
};

const cloudinaryFolderName = {
  profile: {
    folder: "fundi/profile",
    resourceType: "image",
  },
  document: {
    folder: "fundi/document",
    resourceType: "pdf",
  },
  invoices: {
    folder: "fundi/invoices",
    resourceType: "pdf",
  },
};
const ENV = process.env.NODE_ENV || "development";

module.exports = { DB_NAME,ENV, modelsNames, cloudinaryFolderName,Tokens };
