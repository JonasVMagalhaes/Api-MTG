const ScryfallCard = require("../models/ScryfallCardModel");

const getCardById = async (request, response) => {
    const { id } = request.params;

    const scryfallCard = new ScryfallCard();
    const card = await scryfallCard.getById(id);

    return response.status(200).json(card.data);
}

const getCardAll = async (request, response) => {
    const { page } = request.query;

    const index = page || 1;

    const scryfallCard = new ScryfallCard();
    const allCards = await scryfallCard.getAll(index);

    return response.status(200).json(allCards.data);
}

module.exports = {
    getCardById,
    getCardAll
}