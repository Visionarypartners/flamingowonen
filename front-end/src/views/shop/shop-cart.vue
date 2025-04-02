<template>
    <div>
        <NavbarOne />

        <div class="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70"
             :style="{backgroundImage:'url('+ bg +')'}">
            <div class="text-center w-full">
                <h2 class="text-white text-8 md:text-[40px] font-normal leading-none text-center">Cart</h2>
                <ul class="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4">
                    <li>
                        <router-link to="/">Home</router-link>
                    </li>
                    <li>/</li>
                    <li class="text-primary">Cart</li>
                </ul>
            </div>
        </div>

        <div class="s-py-100" data-aos="fade-up">
            <div class="container ">
                <div class="flex xl:flex-row flex-col gap-[30px] lg:gap-[30px] xl:gap-[70px]">
                    <div class="flex-1 overflow-auto">
                        <table id="cart-table" class="responsive nowrap table-wrapper" style="width:100%">
                            <thead class="table-header">
                            <tr>
                                <th class="text-lg md:text-xl font-semibold leading-none text-title dark:text-white">
                                    Product Info
                                </th>
                                <th class="text-lg md:text-xl font-semibold leading-none text-title dark:text-white">
                                    Price
                                </th>
                                <th class="text-lg md:text-xl font-semibold leading-none text-title dark:text-white">
                                    Quantity
                                </th>
                                <th class="text-lg md:text-xl font-semibold leading-none text-title dark:text-white">
                                    Total
                                </th>
                                <th class="text-lg md:text-xl font-semibold leading-none text-title dark:text-white">
                                    Remove
                                </th>
                            </tr>
                            </thead>
                            <tbody class="table-body">
                            <tr v-for="item in cart?.items" :key="item.id">
                                <td class="w-[42%]">
                                    <div class="flex items-center gap-3 md:gap-4 lg:gap-6 cart-product">
                                        <div class="w-14 sm:w-20 flex-none py-3">
                                            <img :src="item.thumbnail || cart1" alt="product" />
                                        </div>
                                        <div class="flex-1">
                                            <router-link :to="`/product-details/${item.product_id}`">
                                                <h6 class="leading-none font-medium">{{ item.product_title }}</h6>
                                            </router-link>
                                            <h5 class="font-semibold leading-none mt-2">
                                                <router-link v-if="item.variant"
                                                             :to="'/product/' + item.variant.product_id">
                                                    {{ item.description }}
                                                </router-link>
                                                <span v-else>
                                                    {{ item.description }}
                                                  </span>
                                            </h5>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h6 class="text-base md:text-lg leading-none text-title dark:text-white font-semibold">
                                        €{{ (item.unit_price).toFixed(2) }}
                                    </h6>
                                </td>
                                <td>
                                    <IncDec :initial="item.quantity" @update="(qty) => cartStore.updateItem(item.id, qty)" />
                                </td>
                                <td>
                                    <h6 class="text-base md:text-lg leading-none text-title dark:text-white font-semibold">
                                        €{{ (item.unit_price * item.quantity).toFixed(2) }}
                                    </h6>
                                </td>
                                <td>
                                    <button
                                        class="w-8 h-8 bg-[#E8E9EA] dark:bg-dark-secondary flex items-center justify-center ml-auto duration-300 text-title dark:text-white"
                                        @click="handleRemove(item.id)">
                                        <svg class="fill-current" width="12" height="12" viewBox="0 0 12 12"
                                             fill="none">
                                            <path
                                                d="M0.546875 1.70822L1.70481 0.550293L5.98646 4.83195L10.2681 0.550293L11.3991 1.6813L7.11746 5.96295L11.453 10.2985L10.295 11.4564L5.95953 7.12088L1.67788 11.4025L0.546875 10.2715L4.82853 5.98988L0.546875 1.70822Z"
                                            />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <div class="mb-[30px]">
                            <h4 class="text-lg md:text-xl font-semibold leading-none text-title dark:text-white mb-[15px]">
                                Promo Code
                            </h4>
                            <div class="flex xs:flex-row flex-col gap-3">
                                <input
                                    class="h-12 md:h-14 bg-snow dark:bg-dark-secondary border border-[#E3E5E6] text-title dark:text-white focus:border-primary p-4 outline-none duration-300 placeholder:text-title dark:placeholder:text-white flex-1"
                                    type="text" placeholder="Coupon Code">
                                <button class="btn btn-solid" data-text="Apply">
                                    <span>Apply</span>
                                </button>
                            </div>
                        </div>
                        <div
                            class="bg-[#FAFAFA] dark:bg-dark-secondary pt-[30px] md:pt-[40px] px-[30px] md:px-[40px] pb-[30px] border border-[#17243026] border-opacity-15 rounded-xl">
                            <div class="text-right flex justify-end flex-col w-full ml-auto mr-0">
                                <div
                                    class="flex justify-between flex-wrap text-base sm:text-lg text-title dark:text-white font-medium">
                                    <span>Sub Totaal:</span>
                                    <span>€{{ subtotal }}</span>
                                </div>

                            </div>
                            <p>Prijzen zijn inclusief btw*</p>

                            <div class="mt-6 pt-6 border-t border-bdr-clr dark:border-bdr-clr-drk">
                                <div
                                    class="flex justify-between flex-wrap text-base sm:text-lg text-title dark:text-white font-medium mt-3">
                                    <div>
                                        <label class="flex items-center gap-[10px] categoryies-iteem">
                                            <input class="appearance-none hidden" type="radio" name="item-type">
                                            <span
                                                class="w-4 h-4 rounded-full border border-title dark:border-white flex items-center justify-center duration-300">
                                                <svg class="duration-300 opacity-0" width="8" height="8"
                                                     viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="10" height="10" rx="5" fill="#BB976D" />
                                                </svg>
                                            </span>
                                            <span
                                                class="sm:text-lg text-title dark:text-white block sm:leading-none transform translate-y-[3px] select-none">Gratis verzending:</span>
                                        </label>
                                    </div>
                                    <span> Gratis</span>
                                </div>
<!--                                <div
                                    class="flex justify-between flex-wrap text-base sm:text-lg text-title dark:text-white font-medium mt-3">
                                    <div>
                                        <label class="flex items-center gap-[10px] categoryies-iteem">
                                            <input class="appearance-none hidden" type="radio" name="item-type">
                                            <span
                                                class="w-4 h-4 rounded-full border border-title dark:border-white flex items-center justify-center duration-300">
                                                <svg class="duration-300 opacity-0" width="8" height="8"
                                                     viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="10" height="10" rx="5" fill="#BB976D" />
                                                </svg>
                                            </span>
                                            <span
                                                class="sm:text-lg text-title dark:text-white block sm:leading-none transform translate-y-[3px] select-none"> Snelle Verzending:</span>
                                        </label>
                                    </div>
                                    <span>€100</span>
                                </div>
                                <div
                                    class="flex justify-between flex-wrap text-base sm:text-lg text-title dark:text-white font-medium mt-3">
                                    <div>
                                        <label class="flex items-center gap-[10px] categoryies-iteem">
                                            <input class="appearance-none hidden" type="radio" name="item-type">
                                            <span
                                                class="w-4 h-4 rounded-full border border-title dark:border-white flex items-center justify-center duration-300">
                                                <svg class="duration-300 opacity-0" width="8" height="8"
                                                     viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="10" height="10" rx="5" fill="#BB976D" />
                                                </svg>
                                            </span>
                                            <span
                                                class="sm:text-lg text-title dark:text-white block sm:leading-none transform translate-y-[3px] select-none"> Zelf ophalen:</span>
                                        </label>
                                    </div>
                                    <span>Gratis</span>
                                </div>-->
                            </div>
                            <div class="mt-6 pt-6 border-t border-bdr-clr dark:border-bdr-clr-drk">
                                <div class="flex justify-between flex-wrap font-semibold leading-none text-2xl">
                                    <span>Totaal:</span>
                                    <span>€{{ total }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="sm:mt-[10px] py-5 flex items-end gap-3 flex-wrap justify-end">
                            <router-link to="/shop-v1"
                                         class="btn btn-sm btn-theme-solid hover:!text-primary before:!z-[-1]">
                                Continue Shopping
                            </router-link>
                            <router-link to="/checkout"
                                         class="btn btn-sm btn-theme-solid hover:!text-primary before:!z-[-1]">
                                Checkout
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <FooterOne />

        <ScrollToTop />
    </div>
</template>

<script>
import { useCartStore } from '@/services/cartStore'

import NavbarOne from '@/components/navbar/navbar-one.vue'
import IncDec from '@/components/inc-dec.vue'
import FooterOne from '@/components/footer/footer-one.vue'
import ScrollToTop from '@/components/scroll-to-top.vue'

import bg from '@/assets/img/shortcode/breadcumb.jpg'
import cart1 from '@/assets/img/gallery/cart/cart-01.jpg'
import Aos from 'aos'

export default {
    components: {
        NavbarOne,
        IncDec,
        FooterOne,
        ScrollToTop
    },
    data() {
        return {
            cart1,
            bg,
            cartStore: null,
        }
    },
    computed: {
        cart() {
            return this.cartStore?.cart || null
        },
        subtotal() {
            if (!this.cart?.items) return 0
            const sum = this.cart.items.reduce((acc, item) => acc + (item.unit_price * item.quantity), 0)
            return (sum).toFixed(2) // convert cents to euros
        },

        total() {
            return this.subtotal
        }
    },

    methods: {
        async handleRemove(itemId) {
            await this.cartStore.removeItem(itemId)
            await this.cartStore.initCart()
        }
    },
    async created() {
        this.cartStore = useCartStore()
        if (!this.cartStore.cart) {
            await this.cartStore.initCart()
        }
    },
    mounted() {
        Aos.init()
    }
}
</script>

