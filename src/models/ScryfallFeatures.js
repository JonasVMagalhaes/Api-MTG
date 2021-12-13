const axios = require("axios");

const baseUrl = "https://api.magicthegathering.io/v1"

module.exports = class ScryfallEditionModel {
    async getAllTypes() {
        const editions = await axios.get(`${baseUrl}/types`);
        return editions;
    }

    async getAllSubtypes() {
        const editions = await axios.get(`${baseUrl}/subtypes`);
        return editions;
    }

    async getAllSupertypes() {
        const editions = await axios.get(`${baseUrl}/supertypes`);
        return editions;
    }

    async getAllFormats() {
        const editions = await axios.get(`${baseUrl}/formats`);
        return editions;
    }
}