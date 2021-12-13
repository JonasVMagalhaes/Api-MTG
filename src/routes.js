const { Router } = require("express");
const { getEditionAll, getEditionById, getEditionBooster } = require("./controllers/editionController");
const { getCardById, getCardAll } = require("./controllers/cardController");
const { getAllTypes, getAllFormats, getAllSupertypes, getAllSubtypes} = require("./controllers/featuresController");

const router = Router();

router.get("/edition/:code", (request, response) => getEditionById(request, response));
router.get("/edition", (request, response) => getEditionAll(request, response));
router.get("/edition/:code/booster", (request, response) => getEditionBooster(request, response));

router.get("/card/:id", (request, response) => getCardById(request, response));
router.get("/card", (request, response) => getCardAll(request, response));

router.get("/type", (request, response) => getAllTypes(request, response));
router.get("/subtype", (request, response) => getAllSubtypes(request, response));
router.get("/supertype", (request, response) => getAllSupertypes(request, response));
router.get("/format", (request, response) => getAllFormats(request, response));

module.exports = router;