const fs = require('fs');

const data = JSON.parse(fs.readFileSync('./users.json','utf8'));

async function updateUsersBD (value) {
    fs.writeFile('./users.json', JSON.stringify(value), (err) => {
        if (err) throw err;
        console.log('The file has been successfully changed!');
    });
};

const getAllUsers = async function(){
    return data;
};

const getUserById = async function(req){
    const userId = req.params.id;
    const userIndex = data.findIndex(e => e.id === userId);
    if (userIndex === -1) {
        throw new Error ('no user found');
    } else {
        return data[userIndex];
    };
};

const addUser = async function(req){
    const newUser = req.body;
    data.push(newUser);
    updateUsersBD(data);
    return {message : 'user added'};
};

const updateUser = async function(req){
    const user = req.body;
    const userIndex = data.findIndex(e => e.id === user.id);
    if (userIndex === -1) {
        throw new Error ('no user found');
    } else {
        data[userIndex] = {...data[userIndex], ...user};
        updateUsersBD(data);
        return {message : 'user updated'};
    };
};

const deleteUser = async function(req){
    const userId = req.params.id;
    const userIndex = data.findIndex(e => e.id === userId);
    if (userIndex === -1) {
        throw new Error ('no user found');
    } else {
        data.splice(userIndex, 1);
        updateUsersBD(data);
        return {message : 'user deleted'};
    };
};

module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser
};