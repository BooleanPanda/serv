const service = require('../services/user-service');

class UserController {
    constructor(){};
    addUser = async (req, res) => {
        try {
            const result = await service.addUser(req.body);
            res.status(201).send(result);
        } catch (e) {
            res.status(400).send({error:e.message});
        };
    };
    deleteUser = async (req, res) => {
        try {
            const result = await service.deleteUser(req.params.id);
            res.status(201).send(result);
        } catch (e) {
            res.status(400).send({error: e.message});
        };
    };
    updateUser = async (req, res) => {
        try {
            const result = await service.updateUser(req.params.id, req.body);
            res.status(201).send(result);
        } catch (e) {
            res.status(400).send({error: e.message});
        };
    };
    getAllUsers = async (req, res) => {
        try {
            const result = await service.getAllUsers();
            res.send(result);
        } catch (e) {
            res.status(400).send({error:e.message});
        };
    };
    getUserById = async (req, res) => {
        try {
            const result = await service.getUserById(req.params.id);
            res.send(result);
        } catch (e) {
            res.status(400).send({error:e.message});
        };
    };
    getUserPets = async (req, res) => {
        try {
            const result = await service.getUserPets(req.params.id);
            res.send(result);
        } catch (e) {
            res.status(400).send({error:e.message});
        };
    };
};

module.exports = UserController;