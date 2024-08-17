const asyncHandler = require('express-async-handler');
const { getAllUsersListService } = require('../service/usersService');



const getAllUsersListController = asyncHandler(async (req, res) => {
    try {
        const user = await getAllUsersListService(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
})

const getUserByIdController = asyncHandler(async (req, res) => { })

const createUserController = asyncHandler(async (req, res) => { })

const updateUserController = asyncHandler(async (req, res) => { })

const deleteUserController = asyncHandler(async (req, res) => { })

module.exports = {
    getAllUsersListController,
    getUserByIdController,
    createUserController,
    updateUserController,
    deleteUserController
};