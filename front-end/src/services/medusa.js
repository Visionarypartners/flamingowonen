import axios from 'axios';

const API_BASE_URL = process.env.VUE_APP_MEDUSA_API_URL;
const PUBLISHABLE_KEY = process.env.VUE_APP_MEDUSA_PUBLISHABLE_KEY;
// const ADMIN_API_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY3Rvcl9pZCI6InVzZXJfMDFKUDhCRFFCV0NBSEYyWUI3NzZLQzRNQ0oiLCJhY3Rvcl90eXBlIjoidXNlciIsImF1dGhfaWRlbnRpdHlfaWQiOiJhdXRoaWRfMDFKUDhCRFFGUFNTMzdRSk1UNTUzME1GM0QiLCJhcHBfbWV0YWRhdGEiOnsidXNlcl9pZCI6InVzZXJfMDFKUDhCRFFCV0NBSEYyWUI3NzZLQzRNQ0oifSwiaWF0IjoxNzQzMTE5NjgxLCJleHAiOjE3NDMyMDYwODF9.CsIY3J37vWN2FKnDc30YC1ut5RiSA_2v96LisRzwcig";

export const getAllProducts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/store/products`, {
            headers: {
                'x-publishable-api-key': PUBLISHABLE_KEY
            }
        });
        return response.data.products;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};

// Get products from a specific collection by ID
export const getProductsByCollection = async (collectionId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/store/products?collection_id=${collectionId}`, {
            headers: {
                'x-publishable-api-key': PUBLISHABLE_KEY
            },
            params: {
                fields: '*variants.calculated_price',
                region_id: process.env.VUE_APP_MEDUSA_REGION_ID,
                country_code: process.env.VUE_APP_MEDUSA_COUNTRY_CODE,
            }
        });
        return response.data.products;
    } catch (error) {
        console.error(`Error fetching products for collection ${collectionId}:`, error);
        return [];
    }
};

export const getAllProductCategories = async () => {
    console.log(API_BASE_URL + "/store/product-categories")
    try {
        const response = await axios.get(`${API_BASE_URL}/store/product-categories`, {
            headers: {
                'x-publishable-api-key': PUBLISHABLE_KEY
            }
        });

        // Only return id and name for performance
        return response.data.product_categories.map(category => ({
            id: category.id,
            name: category.name
        }));
    } catch (error) {
        console.error('Error fetching product categories:', error);
        return [];
    }
};

export const getProductsByCategory = async (categoryId, limit = 9, offset = 0) => {
    if (!categoryId.startsWith('pcat_')) {
        console.error(`❌ Invalid categoryId: ${categoryId}. Expected format: "pcat_..."`);
        return [];
    }

    try {
        const response = await axios.get(`${API_BASE_URL}/store/products`, {
            headers: {
                'x-publishable-api-key': PUBLISHABLE_KEY
            },
            params: {
                fields: '*variants.calculated_price',
                region_id: process.env.VUE_APP_MEDUSA_REGION_ID,
                country_code: process.env.VUE_APP_MEDUSA_COUNTRY_CODE,
                category_id: categoryId,
                limit,
                offset
            }
        });
        return {
            products: response.data.products,
            count: response.data.count // Total number of products for pagination
        };
    } catch (error) {
        console.error(`Error fetching products for category ${categoryId}:`, error.response?.data || error.message);
        return { products: [], count: 0 };
    }
};

export const getProductById = async (productId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/store/products/${productId}`, {
            headers: {
                'x-publishable-api-key': PUBLISHABLE_KEY
            }
        });

        return response.data.product; // Return the single product object
    } catch (error) {
        console.error(`Error fetching product ${productId}:`, error.response?.data || error.message);
        return null; // Return null if an error occurs
    }
};

export const medusa = {
    carts: {
        update: (id, data) =>
            axios.post(`${API_BASE_URL}/store/carts/${id}`, data, {
                headers: {
                    'x-publishable-api-key': PUBLISHABLE_KEY,
                },
            }),

        addShippingMethod: (id, data) =>
            axios.post(`${API_BASE_URL}/store/carts/${id}/shipping-methods`, data, {
                headers: {
                    'x-publishable-api-key': PUBLISHABLE_KEY,
                },
            }),

        setPaymentSession: (id, data) =>
            axios.post(`${API_BASE_URL}/store/carts/${id}/payment-session`, data, {
                headers: {
                    'x-publishable-api-key': PUBLISHABLE_KEY,
                },
            }),

        complete: (id) =>
            axios.post(`${API_BASE_URL}/store/carts/${id}/complete`, {}, {
                headers: {
                    'x-publishable-api-key': PUBLISHABLE_KEY,
                },
            }),
    },

    shippingOptions: {
        listCart: (id) =>
            axios
                .get(`${API_BASE_URL}/store/shipping-options?cart_id=${id}`, {
                    headers: {
                        'x-publishable-api-key': PUBLISHABLE_KEY,
                    },
                })
                .then((res) => res.data),
    },
    paymentCollections: {
        create: (cart_id) =>
            axios.post(`${API_BASE_URL}/store/payment-collections`, {
                cart_id,
            }, {
                headers: {
                    'x-publishable-api-key': PUBLISHABLE_KEY,
                },
            }),

        createPaymentSessions: (paymentCollectionId, data) =>
            axios.post(`${API_BASE_URL}/store/payment-collections/${paymentCollectionId}/payment-sessions`, data, {
                headers: {
                    'x-publishable-api-key': PUBLISHABLE_KEY,
                },
            }),
    }
}


