const asyncHandler = require("express-async-handler")
const {UsersSchema} = require('../models/index')
const res = require("express/lib/response");

const getAllUsersListService = asyncHandler(async (userData) => {
    // const user = new UsersSchema(userData);
    // await user.save();
    // return user;

    res.status(200).json({
        status: "welcome to user api",
        data: 'No data'
    })
})

module.exports = {
    getAllUsersListService
}