const router = require('express').Router()

const {
  getAllUsersListController,
  getUserByIdController,
  createUserController,
  updateUserController,
  deleteUserController
} = require('../controllers/usersController')

router.get('/', getAllUsersListController)
router.get('/:id', getUserByIdController)
router.post('/create', createUserController)
router.post('/update/:id', updateUserController)
router.post('/delete/:id', deleteUserController)

module.exports = router