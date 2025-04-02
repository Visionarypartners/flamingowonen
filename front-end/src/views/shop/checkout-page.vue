<template>
    <div>
        <NavbarOne />

        <!-- Hero Section -->
        <div class="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70"
             :style="{ backgroundImage: 'url(' + bg + ')' }">
            <div class="text-center w-full">
                <h2 class="text-white text-8 md:text-[40px] font-normal leading-none text-center">Checkout</h2>
                <ul class="flex items-center justify-center gap-[10px] text-base md:text-lg text-white mt-3 md:mt-4 flex-wrap">
                    <li><router-link to="/">Home</router-link></li>
                    <li>/</li>
                    <li class="text-primary">Checkout</li>
                </ul>
            </div>
        </div>

        <!-- Checkout Content -->
        <div class="s-py-100">
            <div class="container">
                <div class="max-w-[1220px] mx-auto grid lg:grid-cols-2 gap-[30px] lg:gap-[70px]">

                    <!-- Billing Info -->
                    <div class="bg-[#FAFAFA] dark:bg-dark-secondary p-[30px] md:p-[40px] lg:p-[50px] border rounded-xl">
                        <p class='mb-5 bg-white p-4 text-title'>Coupon code?
                            <button @click="open = !open" class="ml-1 underline text-[#209A60]">Click here to add</button>
                        </p>

                        <div v-if="open" class="coupon-wrapper gap-3 md:flex mb-[30px]">
                            <input type="text" placeholder="Coupon code"
                                   class="max-w-[220px] w-full h-12 border p-4" />
                            <router-link to="#" class="btn btn-sm-px btn-theme-solid">
                                <span>Apply coupon</span>
                            </router-link>
                        </div>

                        <h4 class="font-semibold text-xl md:text-2xl mb-6">Billing Information</h4>
                        <div class="grid gap-5">
                            <input v-model="fullName" type="text" placeholder="Full Name" class="form-input" />
                            <input v-model="email" type="email" placeholder="Email" class="form-input" />
                            <input v-model="phone" type="tel" placeholder="Phone Number" class="form-input" />
                        </div>

                        <div class="grid md:grid-cols-2 gap-5 mt-5">
                            <input v-model="city" type="text" placeholder="City" class="form-input" />
                            <input v-model="zip" type="text" placeholder="Zip Code" class="form-input" />
                            <input v-model="address1" type="text" placeholder="Address Line 1" class="form-input md:col-span-2" />
                            <input v-model="address2" type="text" placeholder="Address Line 2" class="form-input md:col-span-2" />
                        </div>

                        <textarea placeholder="Additional Text" class="form-input w-full h-[120px] mt-5"></textarea>
                    </div>

                    <!-- Order Summary -->
                    <div>
                        <div class="bg-[#FAFAFA] dark:bg-dark-secondary border rounded-xl p-[30px] md:p-[40px]">
                            <h4 class="font-semibold text-xl md:text-2xl mb-6">Product Information</h4>
                            <div class="grid gap-5">
                                <div v-for="item in cart?.items" :key="item.id" class="flex justify-between items-center">
                                    <div class="flex items-center gap-3">
                                        <img :src="item.thumbnail || cart1" class="w-16" />
                                        <div>
                                            <h6 class="font-medium">{{ item.product_title }}</h6>
                                            <p class="text-sm">x{{ item.quantity }}</p>
                                        </div>
                                    </div>
                                    <span>€{{ ((item.unit_price * item.quantity)).toFixed(2) }}</span>
                                </div>
                            </div>

                            <!-- Totals -->
                            <div class="mt-6 pt-6 border-t">
                                <div class="flex justify-between text-lg">
                                    <span>Subtotal:</span>
                                    <span>€{{ (subtotal).toFixed(2) }}</span>
                                </div>
                                <div class="flex justify-between text-lg mt-3">
                                    <span>VAT:</span>
                                    <span>€{{ (vat).toFixed(2) }}</span>
                                </div>
                            </div>

                            <!-- Shipping Options -->
                            <div class="mt-6 pt-6 border-t">
                                <h4 class="font-semibold text-xl mb-3">Shipping Method</h4>
                                <div v-if="shippingOptions.length">
                                    <div v-for="option in shippingOptions" :key="option.id" class="mb-2">
                                        <label class="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                :value="option.id"
                                                v-model="selectedShippingOption"
                                            />
                                            <span>{{ option.name }} – €{{ (option.amount).toFixed(2) }}</span>
                                        </label>
                                    </div>
                                </div>
                                <div v-else>
                                    <p class="text-sm text-red-500">No shipping options found.</p>
                                </div>
                            </div>

                            <!-- Total -->
                            <div class="mt-6 pt-6 border-t">
                                <div class="flex justify-between text-2xl font-semibold">
                                    <span>Total:</span>
                                    <span>€{{ (total).toFixed(2) }}</span>
                                </div>
                            </div>
                        </div>

                        <div class="mt-8 flex gap-3">
                            <router-link to="/cart" class="btn btn-outline">Back to Cart</router-link>
                            <button @click="placeOrder" class="btn btn-theme-solid">Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <FooterOne />
        <ScrollToTop />
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useCartStore } from '@/services/cartStore'
import { medusa } from '@/services/medusa'

import NavbarOne from '@/components/navbar/navbar-one.vue'
import FooterOne from '@/components/footer/footer-one.vue'
import ScrollToTop from '@/components/scroll-to-top.vue'

import bg from '@/assets/img/shortcode/breadcumb.jpg'
import cart1 from '@/assets/img/gallery/cart/cart-01.jpg'

import Aos from 'aos'

const open = ref(false)

const cartStore = useCartStore()
const cart = computed(() => cartStore.cart)

const subtotal = computed(() =>
    cart.value?.items?.reduce((acc, item) => acc + item.unit_price * item.quantity, 0) || 0
)
const vat = computed(() => subtotal.value * 0.21)

const total = computed(() => {
    const shipping = cart.value?.shipping_total || 0
    return subtotal.value + vat.value + shipping
})

// Billing form refs
const fullName = ref('')
const email = ref('')
const phone = ref('')
const city = ref('')
const zip = ref('')
const address1 = ref('')
const address2 = ref('')

// Shipping options
const shippingOptions = ref([])
const selectedShippingOption = ref(null)

import { watch } from 'vue'

watch(selectedShippingOption, async (newOptionId) => {
    if (!newOptionId || !cart.value?.id) return

    try {
        await medusa.carts.addShippingMethod(cart.value.id, {
            option_id: newOptionId,
        })

        // Re-fetch the updated cart to get new shipping total
        await cartStore.fetchCart(cart.value.id)
    } catch (err) {
        console.error('Error updating shipping method:', err)
    }
})

// Stripe checkout flow
const placeOrder = async () => {
    if (!cart.value?.id) return alert('Cart not ready.')

    try {
        // 1. Update cart
        await medusa.carts.update(cart.value.id, {
            shipping_address: {
                first_name: fullName.value,
                last_name: 'Customer',
                address_1: address1.value,
                address_2: address2.value,
                city: city.value,
                postal_code: zip.value,
                country_code: 'nl',
                phone: phone.value,
            },
            email: email.value,
        })

        // 2. Set shipping method
        if (!selectedShippingOption.value) {
            return alert('Please select a shipping method.')
        }

        await medusa.carts.addShippingMethod(cart.value.id, {
            option_id: selectedShippingOption.value,
        })

        // 3. Create Payment Collection
        const paymentColRes = await medusa.paymentCollections.create(cart.value.id)
        const paymentCollectionId = paymentColRes.data.payment_collection.id

        // 4. Create Stripe Payment Session
        const sessionRes = await medusa.paymentCollections.createPaymentSessions(paymentCollectionId, {
            provider_id: 'pp_stripe_stripe'
        })

        // 5. Haal de URL op om te redirecten naar Stripe Checkout
        const session = sessionRes.data.payment_collection.payment_sessions?.[0]

        const url = session?.data?.url || session?.data?.next_action?.redirect_to_url?.url

        if (!url) {
            throw new Error('Stripe checkout URL not gevonden.')
        }

        // ✅ Redirect
        window.location.href = url

    } catch (err) {
        console.error('Checkout error:', err)
        alert('Checkout failed – check console')
    }
}

onMounted(async () => {
    Aos.init()

    if (!cart.value) {
        console.log('Cart is not loaded. Initializing...')
        await cartStore.initCart()
    }

    console.log('Cart after init:', cart.value)

    // Load shipping options
    try {
        const result = await medusa.shippingOptions.listCart(cart.value.id)
        shippingOptions.value = result.shipping_options
        if (shippingOptions.value.length > 0) {
            selectedShippingOption.value = shippingOptions.value[0].id
        }
    } catch (err) {
        console.error('Failed to load shipping options:', err)
    }
})
</script>

<style scoped>
.form-input {
    @apply w-full h-12 border border-gray-300 p-3 rounded-md;
}
</style>
