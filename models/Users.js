const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsersSchema = new Schema(
    {
        organizationId: {
            type: Schema.Types.ObjectId,
            ref: 'organizations',
            required: true
        },
        userTypeId: {
            type: Schema.Types.ObjectId,
            ref: 'userTypes',
            required: true
        },
        fullName: {
            type: String,
            required: true,
            trim: true
        },
        userName: {
            type: String,
            unique: true,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model('users', UsersSchema)