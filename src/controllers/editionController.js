const ScryfallEdition = require("../models/ScryfallEditionModel");

const getEditionById = async (request, response) => {
    const { code } = request.params;

    const scryFallEdition = new ScryfallEdition();
    const edition = await scryFallEdition.getById(code);

    return response.status(200).json(edition.data);
}

const getEditionAll = async (request, response) => {
    const scryFallEdition = new ScryfallEdition();
    const allEditions = await scryFallEdition.getAll();

    return response.status(200).json(allEditions.data);
}

const getEditionBooster = async (request, response) => {
    const { code } = request.params;

    const scryFallEdition = new ScryfallEdition();
    const boosterEdition = await scryFallEdition.getBooster(code);

    return response.status(200).json(boosterEdition.data);
}

module.exports = {
    getEditionById,
    getEditionAll,
    getEditionBooster
}