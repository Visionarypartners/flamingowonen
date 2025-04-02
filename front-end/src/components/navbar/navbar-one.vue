<template>
    <div class="header-area default-header relative z-50 bg-white dark:bg-title" :class="scroll ? 'sticky-header' : ''">
        <div class="container-fluid">
            <div
                class="flex items-center justify-between gap-x-6 max-w-[1720px] mx-auto relative py-[10px] sm:py-4 lg:py-0">
                <router-link class="cursor-pointer block" to="/" aria-label="Furnixar">
                    <img :src="logoDark" alt="" class='dark:hidden w-[180px] sm:w-[240px]' />
                    <img :src="logoLight" alt="" class='dark:block hidden w-[180px] sm:w-[240px]' />
                </router-link>

                <div
                    class="main-menu absolute z-50 w-full lg:w-auto top-full left-0 lg:static bg-white dark:bg-title lg:bg-transparent lg:dark:bg-transparent px-5 sm:px-[30px] py-[10px] sm:py-5 lg:px-0 lg:py-0"
                    :class="toggle ? 'active' : ''">
                    <ul class="text-lg leading-none text-title dark:text-white lg:flex lg:gap-[30px]">
                        <li class="relative" :class="['/'].includes(current) ? 'active' : ''">
                            <router-link to="/">Home</router-link>
                        </li>
                        <li class="relative" :class="{ active: isActiveCategory('pcat_01JPKF851BBRYV42PPYSPJT8R1') }">
                            <router-link
                                :to="{ path: '/shop-v2', query: { category: getCategoryId('Meubels') } }">
                                Meubels<span></span></router-link>
                            <ul class="sub-menu lg:absolute z-50 lg:top-full lg:left-0 lg:min-w-[220px] lg:invisible lg:transition-all lg:bg-white lg:dark:bg-title lg:py-[15px] lg:pr-[30px]">
                                <li :class="{ active: isActiveCategory('pcat_01JPJ57BXHDE1K04BAZWT41E0S') }">
                                    <router-link
                                        :to="{ path: '/shop-v2', query: { category: getCategoryId('Meubels') } }">
                                        Banken</router-link>
                                </li>
                                <li>
                                    <router-link
                                        :to="{ path: '/shop-v2', query: { category: getCategoryId('Meubels') } }">
                                        Eettafels</router-link>
                                </li>
                                <li>
                                    <router-link
                                        :to="{ path: '/shop-v2', query: { category: getCategoryId('Meubels') } }">
                                        Salontafels</router-link>
                                </li>
                                <li>
                                    <router-link
                                        :to="{ path: '/shop-v2', query: { category: getCategoryId('Meubels') } }">
                                        Bijzettafels</router-link>
                                </li>
                                <li>
                                    <router-link
                                        :to="{ path: '/shop-v2', query: { category: getCategoryId('Meubels') } }">
                                        Stoelen</router-link>
                                </li>
                                <li>
                                    <router-link
                                        :to="{ path: '/shop-v2', query: { category: getCategoryId('Meubels') } }">
                                        TV Meubel</router-link>
                                </li>
                                <li>
                                    <router-link
                                        :to="{ path: '/shop-v2', query: { category: getCategoryId('Meubels') } }">
                                        Dressoir</router-link>
                                </li>
                                <li>
                                    <router-link
                                        :to="{ path: '/shop-v2', query: { category: getCategoryId('Meubels') } }">
                                        Wandkasten</router-link>
                                </li>
                            </ul>
                        </li>
                        <li >
                            <router-link
                                :to="{ path: '/shop-v2', query: { category: getCategoryId('Meubels') } }">
                                Slapen
                            </router-link>
                        </li>
                        <li >
                            <router-link
                                :to="{ path: '/shop-v2', query: { category: getCategoryId('Meubels') } }">
                                Verlichting
                            </router-link>
                        </li>
                        <li >
                            <router-link
                                :to="{ path: '/shop-v2', query: { category: getCategoryId('Meubels') } }">
                                Sfeerhaarden
                            </router-link>
                        </li>
                        <li class="relative">
                            <router-link
                                :to="{ path: '/shop-v2', query: { category: getCategoryId('Meubels') } }">
                                Vloeren<span></span></router-link>
                            <ul class="sub-menu lg:absolute z-50 lg:top-full lg:left-0 lg:min-w-[220px] lg:invisible lg:transition-all lg:bg-white lg:dark:bg-title lg:py-[15px] lg:pr-[30px]">
                                <li :class="{ active: isActiveCategory('pcat_01JPJ57BXHDE1K04BAZWT41E0S') }">
                                    <router-link
                                        :to="{ path: '/shop-v2', query: { category: getCategoryId('Meubels') } }">
                                        PVC</router-link>
                                </li>
                                <li>
                                    <router-link
                                        :to="{ path: '/shop-v2', query: { category: getCategoryId('Meubels') } }">
                                        Laminaat</router-link>
                                </li>
                                <li>
                                    <router-link
                                        :to="{ path: '/shop-v2', query: { category: getCategoryId('Meubels') } }">
                                        Parket</router-link>
                                </li><li>
                                    <router-link
                                        :to="{ path: '/shop-v2', query: { category: getCategoryId('Meubels') } }">
                                        Vloerkleden</router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="relative" :class="{ active: isActiveCategory('pcat_01JPKF851BBRYV42PPYSPJT8R1') }">
                            <router-link
                                :to="{ path: '/shop-v2', query: { category: getCategoryId('Meubels') } }">
                                Woondecoratie<span></span></router-link>
                            <ul class="sub-menu lg:absolute z-50 lg:top-full lg:left-0 lg:min-w-[220px] lg:invisible lg:transition-all lg:bg-white lg:dark:bg-title lg:py-[15px] lg:pr-[30px]">
                                <li :class="{ active: isActiveCategory('pcat_01JPJ57BXHDE1K04BAZWT41E0S') }">
                                    <router-link
                                        :to="{ path: '/shop-v2', query: { category: getCategoryId('Meubels') } }">
                                        Potten en vazen</router-link>
                                </li>
                                <li>
                                    <router-link
                                        :to="{ path: '/shop-v2', query: { category: getCategoryId('Meubels') } }">
                                        Schilderijen</router-link>
                                </li>
                                <li>
                                    <router-link
                                        :to="{ path: '/shop-v2', query: { category: getCategoryId('Meubels') } }">
                                        Spiegels</router-link>
                                </li>
                                <li>
                                    <router-link
                                        :to="{ path: '/shop-v2', query: { category: getCategoryId('Meubels') } }">
                                        Klokken</router-link>
                                </li>
                                <li>
                                    <router-link
                                        :to="{ path: '/shop-v2', query: { category: getCategoryId('Meubels') } }">
                                        Decoratie</router-link>
                                </li>
                            </ul>
                        </li>
                        <li :class="current === '/contact' ? 'active' : ''">
                            <router-link to="/contact">Contact</router-link>
                        </li>
                        <li :class="current === '/login' ? 'active' : ''" class="lg:hidden">
                            <router-link to="/login">Login</router-link>
                        </li>
                    </ul>
                </div>

                <NavMenuOne :toggle="toggle" @toggle-change="toggle = $event" />
            </div>
        </div>
    </div>
</template>

<script>
import NavMenuOne from './nav-menu-one.vue';
import logoDark from '@/assets/img/svg/logo.svg';
import logoLight from '@/assets/img/svg/logo-light.svg';
import add from '@/assets/img/thumb/add.png';

export default {
    components: {
        NavMenuOne
    },
    data() {
        return {
            categories: [
                { name: 'Shirts', id: 'pcat_01JQT4GCKMA8AZKB1BR1T7GHHA' },
                { name: 'Pants', id: 'pcat_01JQT4GCKMA8AZKB1BR1T7GHHA' },
                { name: 'Sweatshirts', id: 'pcat_01JQT4GCKMA8AZKB1BR1T7GHHA' },
                { name: 'Merch', id: 'pcat_01JQT4GCKMA8AZKB1BR1T7GHHA' },
                { name: 'Banken', id: 'pcat_01JQT4GCKMA8AZKB1BR1T7GHHA' },
                { name: 'Meubels', id: 'pcat_01JQT4GCKMA8AZKB1BR1T7GHHA' },
                { name: 'Salontafels', id: 'pcat_01JQT4GCKMA8AZKB1BR1T7GHHA' },
                { name: 'Eettafels', id: 'pcat_01JQT4GCKMA8AZKB1BR1T7GHHA' },
                { name: 'Home', id: 'pcat_01JQT4GCKMA8AZKB1BR1T7GHHA' },
                { name: 'Bijzettafels', id: 'pcat_01JQT4GCKMA8AZKB1BR1T7GHHA' },
                { name: 'Woondecoratie', id: 'pcat_01JQT4GCKMA8AZKB1BR1T7GHHA' },
                { name: 'Wandkasten', id: 'pcat_01JQT4GCKMA8AZKB1BR1T7GHHA' },
                { name: 'Tafels', id: 'pcat_01JQT4GCKMA8AZKB1BR1T7GHHA' },
                { name: 'Boxspring', id: 'pcat_01JQT4GCKMA8AZKB1BR1T7GHHA' },
                { name: 'Uitgelicht', id: 'pcat_01JQT4GCKMA8AZKB1BR1T7GHHA' }
            ],
            logoDark,
            logoLight,
            add,
            toggle: false,
            scroll: false,
            current: this.$route.path, // Track current route
            currentCategory: null // Track active category
        };
    },
    computed: {
        isActiveCategory() {
            return (categoryId) => {
                return this.$route.path === '/shop-v2' && this.currentCategory === categoryId;
            };
        }
    },
    watch: {
        '$route.query.category'(newCategory) {
            this.currentCategory = newCategory || null;
        }
    },
    methods: {
        getCategoryId(categoryName) {
            if (!this.categories || this.categories.length === 0) {
                console.warn("Categories not loaded yet.");
                return null;
            }

            const category = this.categories.find(cat => cat.name.toLowerCase() === categoryName.toLowerCase());

            if (!category) {
                console.error(`Category "${categoryName}" not found.`);
                return null;
            }

            return category.id;
        },

        handleScroll() {
            this.scroll = window.scrollY >= 50;
        }
    },
    mounted() {
        this.currentCategory = this.$route.query.category || null;
        window.scrollTo(0, 0);
        window.addEventListener('scroll', this.handleScroll);
    }
};
</script>

