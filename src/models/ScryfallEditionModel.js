const axios = require("axios");

const baseUrl = "https://api.magicthegathering.io/v1"

module.exports = class ScryfallEditionModel {
    async getById(code) {
        const editions = await axios.get(`${baseUrl}/sets/${code}`);
        return editions;
    }

    async getAll() {
        const editions = await axios.get(`${baseUrl}/sets`);
        return editions;
    }

    async getBooster(code) {
        const editions = await axios.get(`${baseUrl}/sets/${code}/booster`);
        return editions;
    }
}