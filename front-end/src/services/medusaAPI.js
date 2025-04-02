// src/lib/medusa.js
import Medusa from "@medusajs/medusa-js";
const API_BASE_URL = process.env.VUE_APP_MEDUSA_API_URL;

const medusa = new Medusa({
    baseUrl: API_BASE_URL, // or process.env if using Vue 2
    maxRetries: 3,
});

export default medusa;
