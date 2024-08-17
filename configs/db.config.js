const URI =
    process.env.NODE_ENV === "production"
        ? process.env.PROD_DATABASE
        : process.env.DEV_DATABASE;
module.exports = { URI };