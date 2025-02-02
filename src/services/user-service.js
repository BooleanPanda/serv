const mongoose = require('mongoose');
const User = require('../models/user');
const Pet = require('../models/pet');

const getAllUsers = async function () {
    try {
        return await User.find({});
    } catch (error) {
        return {
            message : `something went wrong`,
            error : error 
        };
    };
};

const getUserById = async function (userId) {
    try {
        /*return await User.findById(userId);*/
        return await User.aggregate([
            {
                $match : { '_id': mongoose.Types.ObjectId(userId) }
            },
            {
                $lookup : {
                    from: 'pets',
                    localField: '_id',
                    foreignField: 'owner',
                    as: 'pets'
                }
            }
        ]);
    } catch (error) {
        return {
            message : `something went wrong`,
            error : error 
        };
    };
};

const addUser = async function (newUser) {
    try {
        const user = new User(newUser);
        await user.save();
        const token = await user.generateAuthToken();
        return {
            message : 'user added',
            user: user
        };
    } catch (error) {
        return {
            message : `something went wrong`,
            error : error 
        };
    };
};

const updateUser = async function (userId, data) {
    try {
        await User.findByIdAndUpdate(userId, data);
        return { message : `user with id ${userId} updated` };
    } catch (error) {
        return {
            message : `something went wrong`,  
            error : error 
        };
    };
};

const deleteUser = async function (userId) {
    try {
        await User.deleteOne({_id : userId});
        return { message : `user with id ${userId} deleted` };
    } catch (error) {
        return {
            message : `something went wrong`,
            error : error 
        };
    };
};

const getUserPets = async function (userId) {
    try {
        return await Pet.find({owner: userId}).populate('owner');
    } catch (error) {
        return {
            message : `something went wrong`,
            error : error
        };
    };
};

const login = async function (req) {
    try {
        const user = await User.findByCredentials(req.login, req.password);
        const token = await user.generateAuthToken();
        return {user, token};
    } catch (error) {
        return {
            message : `something went wrong`,
            error : error
        };
    };
};

module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser,
    getUserPets,
    login
};