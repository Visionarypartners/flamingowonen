<template>
    <div class="header-area header-v2 absolute top-0 left-0 right-0 z-10 w-full border-b-[3px] border-[#EEF1F3] dark:border-bdr-clr-drk bg-white bg-opacity-50 dark:bg-dark-secondary dark:bg-opacity-50" :class="scroll ? 'sticky-header' : ''">
        <div class="absolute top-full left-0 h-[3px] w-0 bg-primary" id="indicator" :style="{ width: scrollWidth + '%' }"></div>
        <div class="container">
            <div class="flex items-center justify-between gap-5 relative py-3 sm:py-5 max-w-1366 mx-auto header-wrapper">
                <div class="flex items-center gap-5 sm:gap-8 md:gap-12">
                    <router-link class="cursor-pointer block" to="/" aria-label="Furnixar">
                        <img :src="logoDark" alt="" class='dark:hidden w-[120px] sm:w-[200px]'/> 
                        <img :src="logoLight" alt="" class='dark:block hidden w-[120px] sm:w-[200px]'/>
                    </router-link>

                    <button class="hamburger hamburger-v2 transform translate-y-1 sm:translate-y-[6px]" :class="toggle ? 'opened' : ''" @click="toggle = !toggle">
                        <svg class="stroke-current text-title dark:text-white" width="40" viewBox="0 0 100 100">
                        <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                        <path class="line line2" d="M 20,50 H 80" />
                        <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                        </svg>
                    </button>
                </div>
                <NavMenuTwo/>
            </div>
        </div>
        <div class="hdr-v2-menu absolute top-full left-0 w-64 sm:w-80 bg-[#f5f5f5] py-[15px] px-5 sm:px-[30px] transform translate-y-[3px] z-50 dark:bg-dark-secondary shadow-lg -translate-x-[256px] sm:-translate-x-[300px] opacity-0 invisible" :class="toggle ? 'active' : ''">
            <ul>
                <li class="relative" :class="['/','/index-v2','/index-v3','/index-v4','/index-v5','/index-v6'].includes(current) ? 'active' : ''">
                    <router-link to="#">Home<span></span></router-link>
                    <ul class="sub-menu">
                        <li :class="current === '/' ? 'active' : ''"><router-link to="/" class="menu-item">Home Minimal</router-link></li>
                        <li :class="current === '/index-v2' ? 'active' : ''"><router-link to="/index-v2" class="menu-item">Home Stylish</router-link></li>
                        <li :class="current === '/index-v3' ? 'active' : ''"><router-link to="/index-v3" class="menu-item">Home Accessories</router-link></li>
                        <li :class="current === '/index-v4' ? 'active' : ''"><router-link to="/index-v4" class="menu-item">Home Collection</router-link></li>
                        <li :class="current === '/index-v5' ? 'active' : ''"><router-link to="/index-v5" class="menu-item">Home Luxury</router-link></li>
                        <li :class="current === '/index-v6' ? 'active' : ''"><router-link to="/index-v6" class="menu-item">Home Retro</router-link></li>
                    </ul>
                </li>
                <li :class="['/portfolio-v1','/portfolio-v2','/portfolio-v3','/portfolio-details-v1','/portfolio-details-v2','/error','/my-profile','/login','/register','/forger-password','/coming-soon','/thank-you','/shipping-method','/payment-method','/invoice','/payment-confirmation','/payment-success','/payment-failure'].includes(current) ? 'active' : ''">
                    <router-link to="#">Pages<span></span></router-link>
                    <div class="mega-menu">
                        <div class="megamenu-item">
                            <ul>
                                <li :class="current === '/about' ? 'active' : ''"><router-link to="/about">About Us</router-link></li>
                                <li :class="current === '/pricing' ? 'active' : ''"><router-link to="/pricing">Price Plan</router-link></li>
                                <li :class="current === '/team' ? 'active' : ''"><router-link to="/team">Team Member</router-link></li>
                                <li :class="current === '/our-clients' ? 'active' : ''"><router-link to="/our-clients">Clients</router-link></li>
                                <li :class="current === '/faq' ? 'active' : ''"><router-link to="/faq">FAQs</router-link></li>
                                <li :class="current === '/terms-and-conditions' ? 'active' : ''"><router-link to="/terms-and-conditions">Terms & conditions</router-link></li>
                            </ul>
                        </div>
                        <div class="megamenu-item">
                            <ul>
                                <li :class="current === '/portfolio-v1' ? 'active' : ''"><router-link to="/portfolio-v1">Portolfio 1</router-link></li>
                                <li :class="current === '/portfolio-v2' ? 'active' : ''"><router-link to="/portfolio-v2">Portolfio 2</router-link></li>
                                <li :class="current === '/portfolio-v3' ? 'active' : ''"><router-link to="/portfolio-v3">Portolfio 3</router-link></li>
                                <li :class="current === '/portfolio-details-v1' ? 'active' : ''"><router-link to="/portfolio-details-v1">Portolfio details 1</router-link></li>
                                <li :class="current === '/portfolio-details-v2' ? 'active' : ''"><router-link to="/portfolio-details-v2">Portolfio details 2</router-link></li>
                                <li :class="current === '/error' ? 'active' : ''"><router-link to="/error">404 Error</router-link></li>
                            </ul>
                        </div>
                        <div class="megamenu-item">
                            <ul>
                                <li :class="current === '/my-profile' ? 'active' : ''"><router-link to="/my-profile">My Profile</router-link></li>
                                <li :class="current === '/login' ? 'active' : ''"><router-link to="/login">Login</router-link></li>
                                <li :class="current === '/register' ? 'active' : ''"><router-link to="/register">Register</router-link></li>
                                <li :class="current === '/forger-password' ? 'active' : ''"><router-link to="/forger-password">Forget Password</router-link></li>
                                <li :class="current === '/coming-soon' ? 'active' : ''"><router-link to="/coming-soon">Coming Soon</router-link></li>
                                <li :class="current === '/thank-you' ? 'active' : ''"><router-link to="/thank-you">Thank you</router-link></li>
                            </ul>
                        </div>
                        <div class="megamenu-item">
                            <ul>
                                <li :class="current === '/shipping-method' ? 'active' : ''"><router-link to="/shipping-method">Shipping Method</router-link></li>
                                <li :class="current === '/payment-method' ? 'active' : ''"><router-link to="/payment-method">Payment Method</router-link></li>
                                <li :class="current === '/invoice' ? 'active' : ''"><router-link to="/invoice">Invoice</router-link></li>
                                <li :class="current === '/payment-confirmation' ? 'active' : ''"><router-link to="/payment-confirmation">Payment Confirmation</router-link></li>
                                <li :class="current === '/payment-success' ? 'active' : ''"><router-link to="/payment-success">Payment Completed</router-link></li>
                                <li :class="current === '/payment-failure' ? 'active' : ''"><router-link to="/payment-failure">Payment Failure</router-link></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="relative" :class="['/shop-v1','/shop-v2','/shop-v3','/shop-v4','/product-details','/cart','/checkout'].includes(current) ? 'active' : ''">
                    <router-link to="#">Shop<span></span></router-link>
                    <ul class="sub-menu">
                        <li :class="current === '/shop-v1' ? 'active' : ''"><router-link to="/shop-v1">Shop Layout 01</router-link></li>
                        <li :class="current === '/shop-v2' ? 'active' : ''"><router-link to="/shop-v2">Shop Layout 02</router-link></li>
                        <li :class="current === '/shop-v3' ? 'active' : ''"><router-link to="/shop-v3">Shop Layout 03</router-link></li>
                        <li :class="current === '/shop-v4' ? 'active' : ''"><router-link to="/shop-v4">Shop Layout 04</router-link></li>
                        <li :class="current === '/product-details' ? 'active' : ''"><router-link to="/product-details">Product Details</router-link></li>
                        <li :class="current === '/cart' ? 'active' : ''"><router-link to="/cart">My Cart</router-link></li>
                        <li :class="current === '/checkout' ? 'active' : ''"><router-link to="/checkout">Checkout</router-link></li>
                    </ul>
                </li>
                <li class="relative" :class="['/blog-v1','/blog-v2','/blog-details-v1','/blog-details-v2','/blog-details-v3','/blog-tag'].includes(current) ? 'active' : ''">
                    <router-link to="#">Blog<span></span></router-link>
                    <ul class="sub-menu">
                        <li :class="current === '/blog-v1' ? 'active' : ''"><router-link to="/blog-v1">Blog Layout 1</router-link></li>
                        <li :class="current === '/blog-v2' ? 'active' : ''"><router-link to="/blog-v2">Blog Layout 2</router-link></li>
                        <li :class="current === '/blog-details-v1' ? 'active' : ''"><router-link to="/blog-details-v1">Blog Details 1</router-link></li>
                        <li :class="current === '/blog-details-v2' ? 'active' : ''"><router-link to="/blog-details-v2">Blog Details 2</router-link></li>
                        <li :class="current === '/blog-details-v3' ? 'active' : ''"><router-link to="/blog-details-v3">Blog Details 3</router-link></li>
                        <li :class="current === '/blog-tag' ? 'active' : ''"><router-link to="/blog-tag">Blog Tag</router-link></li>
                    </ul>
                </li>
                <li :class="current === '/contact' ? 'active' : ''"><router-link to="/contact">Contact</router-link></li>
                <li :class="current === '/login' ? 'active' : ''" class="lg:hidden"><router-link to="/login">Login</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

import logoDark from '@/assets/img/svg/logo.svg'
import logoLight from '@/assets/img/svg/logo-light.svg'

import { useRoute } from 'vue-router';
import NavMenuTwo from './nav-menu-two.vue';

const toggle = ref(false);

const router = useRoute();
const current = ref(router.path);

const scroll = ref(false)
const scrollWidth = ref(0)

const handleScroll = () => {
    if (window.scrollY >= 50) {
        scroll.value = true
    } else {
        scroll.value = false
    }
}

const updateScrollWidth =()=>{
    const scrollTop = window.scrollY; // Pixels scrolled from the top
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
    scrollWidth.value = (scrollTop / scrollHeight) * 100; // Calculate width percentage
}
onMounted(()=>{
    window.scrollTo(0,0)
    window.addEventListener('scroll', handleScroll)
    window.addEventListener("scroll", updateScrollWidth);
})


</script>
