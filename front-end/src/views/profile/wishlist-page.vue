<template>
    <div>
        <NavbarOne/>

        <div class="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" :style="{backgroundImage:'url(' + bg + ')'}">
            <div class="text-center w-full">
                <h2 class="text-white text-8 md:text-[40px] font-normal leading-none text-center">Wishlist</h2>
                <ul class="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4">
                    <li><router-link to="/">Home</router-link></li>
                    <li>/</li>
                    <li class="text-primary">wishlist</li>
                </ul>
            </div>
        </div>

        <div class="s-py-100" data-aos="fade-up">
            <div class="container-fluid">
                <div class="max-w-[1720px] mx-auto flex items-start gap-8 md:gap-12 2xl:gap-24 flex-col md:flex-row my-profile-navtab">
                    <div class="w-full md:w-[200px] lg:w-[300px] flex-none">
                        <ProfileTab/>
                    </div>
                    <div class="w-full md:w-auto md:flex-1">
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg::gap-8">
                            <div v-for="(item, index) in productList.slice(0,6)" :key="index" class="group" data-aos="fade-up" data-aos-delay="100">
                                <div class="relative overflow-hidden group z-[5] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-title before:opacity-0 before:duration-300 before:z-[5] hover:before:opacity-80">
                                    <img class="w-full transform duration-300 group-hover:scale-110" :src="item.image" alt="product-card">

                                    <div class="absolute z-10 top-1/2 left-1/2 transform -translate-y-2/4 -translate-x-2/4 flex gap-2">
                                        <router-link to="/cart" class="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-10 flex items-center justify-center transform translate-y-8 opacity-0 transition-all group-hover:duration-500 group-hover:opacity-100 group-hover:translate-y-0 relative tooltip-icon">
                                            <i class="mdi mdi-shopping-outline text-white text-[24px]"></i>
                                            <span class="p-2 bg-white dark:bg-title text-xs text-title dark:text-white absolute -top-[60px] left-1/2 transform -translate-x-1/2 whitespace-nowrap rounded-[4px] opacity-0 invisible duration-300">Add to Cart
                                                <span class="w-3 h-3 bg-white dark:bg-title absolute -bottom-[6px] left-1/2 transform -translate-x-1/2 rotate-45"></span>
                                            </span>
                                        </router-link>
                                        <button class="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-10 flex items-center justify-center translate-y-8 opacity-0 transition-all group-hover:duration-300 group-hover:opacity-100 group-hover:translate-y-0 relative tooltip-icon">                                            
                                            <i class="fa-solid fa-heart dark:text-white text-[#F0264A] text-[24px]"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="lg:pt-7 pt-5 flex gap-3 md:gap-4 flex-col">
                                    <h4 class="font-medium leading-none dark:text-white text-lg">{{item.price}}</h4>
                                    <div>
                                        <h5 class="font-normal dark:text-white text-xl leading-[1.5]">
                                            <router-link to="/product-details" class="text-underline">{{item.name}}</router-link>
                                        </h5>
                                        <ul class="flex items-center gap-2 mt-1">
                                            <li><i class="fa-solid fa-star text-[#EE9818] text-[14px]"></i></li>
                                            <li><i class="fa-solid fa-star text-[#EE9818] text-[14px]"></i></li>
                                            <li><i class="fa-solid fa-star text-[#EE9818] text-[14px]"></i></li>
                                            <li><i class="fa-solid fa-star text-[#EE9818] text-[14px]"></i></li>
                                            <li><i class="fa-solid fa-star text-slate-300 text-[14px]"></i></li>
                                            <li class="dark:text-gray-100">( 1,230 )</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <FooterOne/>

        <ScrollToTop/>

    </div>
</template>

<script setup>
    import { onMounted } from 'vue';

    import NavbarOne from '@/components/navbar/navbar-one.vue';
    import ProfileTab from '@/components/profile-tab.vue'
    import FooterOne from '@/components/footer/footer-one.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';

    import bg from '@/assets/img/shortcode/breadcumb.jpg'

    import { productList } from '@/data/data';

    import Aos from 'aos';

    onMounted(()=>{
        Aos.init()
    })
</script>
