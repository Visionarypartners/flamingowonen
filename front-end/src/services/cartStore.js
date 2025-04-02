import { defineStore } from 'pinia'
import axios from 'axios'

const API_BASE_URL = process.env.VUE_APP_MEDUSA_API_URL
const PUBLISHABLE_KEY = process.env.VUE_APP_MEDUSA_PUBLISHABLE_KEY

export const useCartStore = defineStore('cart', {
    state: () => ({
        cart: null,
        loading: false,
    }),
    actions: {
        async initCart() {
            this.loading = true
            try {
                const existingCartId = localStorage.getItem('cart_id')

                if (existingCartId) {
                    const response = await axios.get(`${API_BASE_URL}/store/carts/${existingCartId}`, {
                        headers: {
                            'x-publishable-api-key': PUBLISHABLE_KEY
                        }
                    })
                    this.cart = response.data.cart
                } else {
                    // 1. Fetch available regions
                    const regionsResponse = await axios.get(`${API_BASE_URL}/store/regions`, {
                        headers: {
                            'x-publishable-api-key': PUBLISHABLE_KEY
                        }
                    })
                    const defaultRegion = regionsResponse.data.regions[0]
                    console.log('✅ PUBLISHABLE_KEY:', PUBLISHABLE_KEY)

                    // 2. Create a new cart with the region ID
                    const cartResponse = await axios.post(`${API_BASE_URL}/store/carts`,
                        {
                            region_id: defaultRegion.id
                        },
                        {
                            headers: {
                                'x-publishable-api-key': PUBLISHABLE_KEY
                            }
                        }
                    )

                    this.cart = cartResponse.data.cart
                    localStorage.setItem('cart_id', this.cart.id)
                }
            } catch (error) {
                console.error('Cart init error:', error.response?.data || error)
            } finally {
                this.loading = false
            }
        },

        async addToCart(variantId, quantity = 1) {
            try {
                const response = await axios.post(
                    `${API_BASE_URL}/store/carts/${this.cart.id}/line-items`,
                    {
                        variant_id: variantId,
                        quantity,
                    },
                    {
                        headers: {
                            'x-publishable-api-key': PUBLISHABLE_KEY
                        }
                    }
                )
                this.cart = response.data.cart
            } catch (error) {
                console.error('Add to cart error:', error.response?.data || error)
            }
        },


        async updateItem(itemId, quantity) {
            console.log(itemId, quantity)
            try {
                const res = await axios.post(`${API_BASE_URL}/store/carts/${this.cart.id}/line-items/${itemId}`, {
                    quantity,
                }, {
                    headers: {
                        'x-publishable-api-key': PUBLISHABLE_KEY
                    }
                })
                this.cart = res.data.cart
            } catch (error) {
                console.error('Update item error', error.response?.data || error)
            }
        },

        async removeItem(itemId) {
            try {
                const res = await axios.delete(`${API_BASE_URL}/store/carts/${this.cart.id}/line-items/${itemId}`, {
                    headers: {
                        'x-publishable-api-key': PUBLISHABLE_KEY
                    }
                })
                this.cart = res.data.cart
            } catch (error) {
                console.error('Remove item error', error.response?.data || error)
            }
        },

        async fetchCart(cartId) {
            try {
                const res = await axios.get(`${API_BASE_URL}/store/carts/${cartId}`, {
                    headers: {
                        'x-publishable-api-key': PUBLISHABLE_KEY
                    }
                })
                this.cart = res.data.cart
            } catch (error) {
                console.error('Fetch cart error:', error.response?.data || error)
            }
        }
    }
})
