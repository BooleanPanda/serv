const Pet = require('../models/pet');

const getAllPets = async function () {
    try {
        return await Pet.find({}).populate('owner');
    } catch (error) {
        console.log(error);
    };
};

const getPetById = async function (petId) {
    try {
        return await Pet.findById(petId);
    } catch (error) {
        console.log(error);
    };
};

const addPet = async function (newPet) {
    try {
        const pet = new Pet(newPet);
        await pet.save();
        return {
            message : 'pet added',
            pet: pet
        };
    } catch (error) {
        console.log(error);
    };
};

const updatePet = async function (petId, data) {
    try {
        await Pet.findByIdAndUpdate(petId, data);
        return { message : `pet with id ${petId} updated` };
    } catch (error) {
        console.log(error);
    };
};

const deletePet = async function (petId) {
    try {
        await Pet.deleteOne({_id : petId});
        return { message : `pet with id ${petId} deleted` };
    } catch (error) {
        console.log(error);
    };
};

module.exports = {
    getAllPets,
    getPetById,
    addPet,
    updatePet,
    deletePet
};