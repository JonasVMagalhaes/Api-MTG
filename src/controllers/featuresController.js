const ScryfallFeatures = require("../models/ScryfallFeatures");

const getAllTypes = async (request, response) => {
    const scryfallFeatures = new ScryfallFeatures();
    const allTypes = await scryfallFeatures.getAllTypes();

    return response.status(200).json(allTypes.data);
}

const getAllSubtypes = async (request, response) => {
    const scryfallFeatures = new ScryfallFeatures();
    const allSubtypes = await scryfallFeatures.getAllSubtypes();

    return response.status(200).json(allSubtypes.data);
}

const getAllSupertypes = async (request, response) => {
    const scryfallFeatures = new ScryfallFeatures();
    const allSuperTypes = await scryfallFeatures.getAllSupertypes();

    return response.status(200).json(allSuperTypes.data);
}

const getAllFormats = async (request, response) => {
    const scryfallFeatures = new ScryfallFeatures();
    const allFormats = await scryfallFeatures.getAllFormats();

    return response.status(200).json(allFormats.data);
}

module.exports = {
    getAllTypes,
    getAllSubtypes,
    getAllSupertypes,
    getAllFormats
}