const axios = require("axios");

const baseUrl = "https://api.magicthegathering.io/v1"

module.exports = class ScryfallEditionModel {
    async getById(id) {
        const editions = await axios.get(`${baseUrl}/cards/${id}`);
        return editions;
    }

    async getAll(index) {
        const editions = await axios.get(`${baseUrl}/cards?page=${index}`);
        return editions;
    }
}