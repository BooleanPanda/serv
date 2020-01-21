const express = require('express');
const PetController = require('../controllers/pet-controller');
const admin = require('../middleware/admin');

const petController = new PetController();
const petRouter = new express.Router();

petRouter.get('/:id', petController.getPetById);
petRouter.get('', petController.getAllPets);
petRouter.post('', petController.addPet);
petRouter.put('/:id', petController.updatePet);
petRouter.delete('/:id', petController.deletePet);

module.exports = petRouter;