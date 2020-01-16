const User = require('../models/user');

const getAllUsers = async function () {
    try {
        return await User.find({});
    } catch (error) {
        console.log(error);
    };
};

const getUserById = async function (userId) {
    try {
        return await User.findById(userId);
    } catch (error) {
        console.log(error);
    };
};

const addUser = async function (newUser) {
    try {
        const user = new User(newUser);
        await user.save();
        return {
            message : 'user added',
            user: user
        };
    } catch (error) {
        console.log(error);
    };
};

const updateUser = async function (userId, data) {
    try {
        await User.findByIdAndUpdate(userId, data);
        return { message : `user with id ${userId} updated` };
    } catch (error) {
        console.log(error);
    };
};

const deleteUser = async function (userId) {
    try {
        await User.deleteOne({_id : userId});
        return { message : `user with id ${userId} deleted` };
    } catch (error) {
        console.log(error);
    };
};

module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser
};