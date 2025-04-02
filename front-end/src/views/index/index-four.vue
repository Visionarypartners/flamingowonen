<template>
    <div>
        <NavbarFour/>

        <div class="pt-40 sm:pt-52 lg:pt-[280px] pb-52 lg:pb-[350px] 2xl:pb-[450px] bg-overlay dark:before:bg-title dark:before:bg-opacity-70" :style="{backgroundImage:'url(' + bg  + ')'}">
            <div class="container">
                <div class="max-w-[751px] mx-auto">
                    <h2 class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-snug sm:leading-snug md:leading-snug lg:leading-snug" data-aos="fade-up">A Collection of World Top Class <span class="font-secondary text-primary font-normal">Furniture</span></h2>
                    <div data-aos="fade-up" data-aos-delay="100">
                        <router-link to="/shop-v1" class="group md:text-lg font-medium leading-none text-title dark:text-white flex items-center gap-3 mt-3">
                            <span class="text-underline leading-none">Go to Shop </span>
                            <svg class="fill-current text-title dark:text-white w-5 md:w-7" viewBox="0 0 31 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.2303 6.58892C30.5232 6.29603 30.5232 5.82116 30.2303 5.52826L25.4574 0.755293C25.1645 0.462399 24.6896 0.462399 24.3967 0.755293C24.1038 1.04819 24.1038 1.52306 24.3967 1.81595L28.6393 6.05859L24.3967 10.3012C24.1038 10.5941 24.1038 11.069 24.3967 11.3619C24.6896 11.6548 25.1645 11.6548 25.4574 11.3619L30.2303 6.58892ZM0 6.80859L29.7 6.80859V5.30859L0 5.30859L0 6.80859Z"/>
                            </svg>                        
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="max-w-1366 mx-auto">
                <div class="hv3-service-wrapper bg-white dark:bg-title rounded-[10px] -mt-16 relative z-10 xl:flex xl:justify-between sm:gap-5 grid sm:grid-cols-2">
                    <div v-for="(item, index) in servicesData" :key="index" class="relative">
                        <router-link to="/product-category" class="group flex items-center gap-5 p-6">
                            <div class="w-14 md:w-[70px] h-14 p-[10px] md:h-[70px] flex items-center justify-center border border-primary rounded-[10px] group-hover:bg-primary duration-300">
                                <div class="block group-hover:hidden">
                                    <img :src="item.image" alt=""/>                           
                                </div>
                                <div class="hidden group-hover:block">
                                    <img :src="item.image2" alt=""/>                           
                                </div>
                            </div>
                            <div>
                                <h5 class="font-medium leading-none text-lg lg:text-xl">{{item.title}}</h5>
                                <p class="leading-none mt-[10px]">{{item.product}}</p>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

        <div class="s-py-100">
            <div class="container">
                <div class="max-w-1366 mx-auto">
                    <div class="flex items-center justify-between gap-5 flex-wrap mb-6 pb-4 md:pb-6 border-b border-bdr-clr dark:border-bdr-clr-drk" data-aos="fade-up">
                        <h2 class="font-semibold leading-none text-2xl sm:text-3xl lg:text-4xl">New Arrival</h2>
                        <router-link to="/shop-v3" class="group flex items-center gap-[10px] font-medium md:text-lg leading-none text-title dark:text-white">
                            <span class="text-underline leading-none">See All Collection</span>
                            <svg class="w-5 md:w-[30px] fill-current text-title dark:text-white" viewBox="0 0 31 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.5311 6.43072C30.824 6.13783 30.824 5.66295 30.5311 5.37006L25.7581 0.59709C25.4653 0.304196 24.9904 0.304196 24.6975 0.59709C24.4046 0.889983 24.4046 1.36486 24.6975 1.65775L28.9401 5.90039L24.6975 10.143C24.4046 10.4359 24.4046 10.9108 24.6975 11.2037C24.9904 11.4966 25.4653 11.4966 25.7581 11.2037L30.5311 6.43072ZM0.300781 6.65039L30.0008 6.65039V5.15039L0.300781 5.15039L0.300781 6.65039Z"/>
                            </svg>                        
                        </router-link>
                    </div>
                    
                    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8" data-aos="fade-up" data-aos-delay="100">
                        <div v-for="(item, index) in productList.slice(0,4)" :key="index" class="group">
                            <div class="relative overflow-hidden before:absolute card-gradient-overlay before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:opacity-0 group-hover:before:opacity-100 before:duration-300 ">
                                <img class="w-full transform duration-300 group-hover:scale-110" :src="item.image" alt="product-card">

                                <div class="flex flex-col gap-[10px] absolute z-20 bottom-5 right-5">
                                    <button class="w-9 lg:w-12 h-9 p-2 lg:h-12 flex items-center justify-center transition-all duration-300 bg-white dark:bg-title bg-opacity-10 dark:bg-opacity-80 transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 quick-view tooltip-icon-2">
                                        <i class="mdi mdi-eye-outline dtransition-all duration-300 text-white text-[24px]"></i>  
                                        <span class="p-2 bg-white dark:bg-title text-xs text-title dark:text-white absolute right-[70px] top-1/2 transform -translate-y-1/2 whitespace-nowrap rounded-[4px] opacity-0 invisible duration-300">Quick View
                                            <span class="w-3 h-3 bg-white dark:bg-title absolute -right-[6px] top-1/2 transform -translate-y-1/2 rotate-45"></span>
                                        </span>
                                    </button>
                                    
                                    <router-link to="/cart" class="w-9 lg:w-12 h-9 p-2 lg:h-12 flex items-center justify-center transition-all duration-500 bg-white dark:bg-title bg-opacity-10 dark:bg-opacity-60 transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 tooltip-icon-2">
                                        <i class="mdi mdi-shopping-outline dtransition-all duration-300 text-white text-[24px]"></i> 
                                        <span class="p-2 bg-white dark:bg-title text-xs text-title dark:text-white absolute right-[70px] top-1/2 transform -translate-y-1/2 whitespace-nowrap rounded-[4px] opacity-0 invisible duration-300">Add to Cart
                                            <span class="w-3 h-3 bg-white dark:bg-title absolute -right-[6px] top-1/2 transform -translate-y-1/2 rotate-45"></span>
                                        </span>
                                    </router-link>

                                    <button class="w-9 lg:w-12 h-9 p-2 lg:h-12 flex items-center justify-center transition-all duration-700 bg-white dark:bg-title bg-opacity-10 dark:bg-opacity-80 faveIcon transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 tooltip-icon-2">
                                        <i class="mdi mdi-cards-heart-outline dtransition-all duration-300 text-white text-[24px]"></i>
                                        <span class="p-2 bg-white dark:bg-title text-xs text-title dark:text-white absolute right-[70px] top-1/2 transform -translate-y-1/2 whitespace-nowrap rounded-[4px] opacity-0 invisible duration-300">Add to wishlist
                                            <span class="w-3 h-3 bg-white dark:bg-title absolute -right-[6px] top-1/2 transform -translate-y-1/2 rotate-45"></span>
                                        </span>
                                    </button>
                                </div>
        
                                <ul class="flex items-center gap-2 mt-1 absolute z-20 left-5 bottom-5 transform -translate-x-8 opacity-0 group-hover:opacity-100 group-hover:-translate-x-0 duration-300">
                                    <li><i class="fa-solid fa-star text-[#EE9818] text-[14px]"></i></li>
                                    <li><i class="fa-solid fa-star text-[#EE9818] text-[14px]"></i></li>
                                    <li><i class="fa-solid fa-star text-[#EE9818] text-[14px]"></i></li>
                                    <li><i class="fa-solid fa-star text-[#EE9818] text-[14px]"></i></li>
                                    <li><i class="fa-solid fa-star text-slate-300 text-[14px]"></i></li>
                                    <li class="text-white">( 1,230 )</li>
                                </ul>
                            </div>
                            <div class="mt-5 md:mt-7">
                                <h4 class="font-medium leading-none dark:text-white text-lg">{{item.price}}</h4>
                                <h5 class="mt-3 text-xl font-normal dark:text-white leading-[1.5]"><router-link to="/product-details">{{item.name}}</router-link></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="s-py-100 bg-[#f5f5f5] dark:bg-dark-secondary">
            <div class="container">
                <div class="max-w-1366 mx-auto">
                    <div class="mb-6 pb-4 md:pb-6 border-b border-bdr-clr dark:border-bdr-clr-drk" data-aos="fade-up">
                        <h2 class="font-semibold leading-none text-2xl sm:text-3xl lg:text-4xl text-center  sm:text-left">Why you Choose Us</h2>
                    </div>
                    <div class="grid sm:grid-cols-2 lg:flex lg:justify-between gap-7 flex-wrap lg:flex-nowrap">
                        <div v-for="(item, index) in featureOne.slice(0,4)" :key="index" class="lg:max-w-[290px] w-full 2xl:flex items-center justify-between gap-7" data-aos="fade-up" data-aos-delay="200">
                            <div class="w-[1px] h-[120px] border-l border-dashed border-primary hidden 2xl:block" :class="index === 0 ? '2xl:hidden' : ''"></div>
                            <div class="text-center sm:text-left lg:max-w-[220px] w-full">
                                <img :src="item.image" alt="" class='size-12 mx-auto sm:mx-0' />
                                <h5 class="font-semibold text-xl md:text-2xl mt-3 md:mt-7">Easy to Return</h5>
                                <p class="mt-2 sm:mt-3">Satisfaction guaranteed or your money back! Enjoy stress-free returns with our hassle-free process. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="s-py-100-50">
            <BestSeller/>
        </div> 

        <div class="s-py-50-100">
            <div class="container">
                <div class="max-w-1366 mx-auto">
                    <div class="flex items-center justify-between gap-5 flex-wrap mb-6 pb-4 md:pb-6 border-b border-bdr-clr dark:border-bdr-clr-drk" data-aos="fade-up">
                        <h2 class="font-semibold leading-none text-2xl sm:text-3xl lg:text-4xl">Trending</h2>
                        <router-link to="/shop-v3" class="group flex items-center gap-[10px] font-medium md:text-lg leading-none text-title dark:text-white">
                            <span class="text-underline leading-none">See All Collection</span>
                            <svg class="w-5 md:w-[30px] fill-current text-title dark:text-white" viewBox="0 0 31 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.5311 6.43072C30.824 6.13783 30.824 5.66295 30.5311 5.37006L25.7581 0.59709C25.4653 0.304196 24.9904 0.304196 24.6975 0.59709C24.4046 0.889983 24.4046 1.36486 24.6975 1.65775L28.9401 5.90039L24.6975 10.143C24.4046 10.4359 24.4046 10.9108 24.6975 11.2037C24.9904 11.4966 25.4653 11.4966 25.7581 11.2037L30.5311 6.43072ZM0.300781 6.65039L30.0008 6.65039V5.15039L0.300781 5.15039L0.300781 6.65039Z"/>
                            </svg>                        
                        </router-link>
                    </div>
                    
                    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-8" data-aos="fade-up" data-aos-delay="100">
                        <div v-for="(item, index) in productList.slice(8,12)" :key="index" class="group">
                            <div class="relative overflow-hidden before:absolute card-gradient-overlay before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:opacity-0 group-hover:before:opacity-100 before:duration-300 ">
                                <img class="w-full transform duration-300 group-hover:scale-110" :src="item.image" alt="product-card">

                                <div class="flex flex-col gap-[10px] absolute z-20 bottom-5 right-5">
                                    <button class="w-9 lg:w-12 h-9 p-2 lg:h-12 flex items-center justify-center transition-all duration-300 bg-white dark:bg-title bg-opacity-10 dark:bg-opacity-80 transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 quick-view tooltip-icon-2">
                                        <i class="mdi mdi-eye-outline dtransition-all duration-300 text-white text-[24px]"></i>   
                                        <span class="p-2 bg-white dark:bg-title text-xs text-title dark:text-white absolute right-[70px] top-1/2 transform -translate-y-1/2 whitespace-nowrap rounded-[4px] opacity-0 invisible duration-300">Quick View
                                            <span class="w-3 h-3 bg-white dark:bg-title absolute -right-[6px] top-1/2 transform -translate-y-1/2 rotate-45"></span>
                                        </span>
                                    </button>
                                    
                                    <router-link to="/cart" class="w-9 lg:w-12 h-9 p-2 lg:h-12 flex items-center justify-center transition-all duration-500 bg-white dark:bg-title bg-opacity-10 dark:bg-opacity-60 transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 tooltip-icon-2">
                                        <i class="mdi mdi-shopping-outline dtransition-all duration-300 text-white text-[24px]"></i>
                                        <span class="p-2 bg-white dark:bg-title text-xs text-title dark:text-white absolute right-[70px] top-1/2 transform -translate-y-1/2 whitespace-nowrap rounded-[4px] opacity-0 invisible duration-300">Add to Cart
                                            <span class="w-3 h-3 bg-white dark:bg-title absolute -right-[6px] top-1/2 transform -translate-y-1/2 rotate-45"></span>
                                        </span>
                                    </router-link>

                                    <button class="w-9 lg:w-12 h-9 p-2 lg:h-12 flex items-center justify-center transition-all duration-700 bg-white dark:bg-title bg-opacity-10 dark:bg-opacity-80 faveIcon transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 tooltip-icon-2">
                                        <i class="mdi mdi-cards-heart-outline dtransition-all duration-300 text-white text-[24px]"></i>
                                        <span class="p-2 bg-white dark:bg-title text-xs text-title dark:text-white absolute right-[70px] top-1/2 transform -translate-y-1/2 whitespace-nowrap rounded-[4px] opacity-0 invisible duration-300">Add to wishlist
                                            <span class="w-3 h-3 bg-white dark:bg-title absolute -right-[6px] top-1/2 transform -translate-y-1/2 rotate-45"></span>
                                        </span>
                                    </button>
                                </div>
        
                            <ul class="flex items-center gap-2 mt-1 absolute z-20 left-5 bottom-5 transform -translate-x-8 opacity-0 group-hover:opacity-100 group-hover:-translate-x-0 duration-300">
                                <li><i class="fa-solid fa-star text-[#EE9818] text-[14px]"></i></li>
                                <li><i class="fa-solid fa-star text-[#EE9818] text-[14px]"></i></li>
                                <li><i class="fa-solid fa-star text-[#EE9818] text-[14px]"></i></li>
                                <li><i class="fa-solid fa-star text-[#EE9818] text-[14px]"></i></li>
                                <li><i class="fa-solid fa-star text-slate-300 text-[14px]"></i></li>
                                <li class="text-white">( 1,230 )</li>
                            </ul>
                            </div>
                            <div class="mt-5 md:mt-7">
                                <h4 class="font-medium leading-none dark:text-white text-lg">$122.75</h4>
                                <h5 class="mt-3 text-xl font-normal dark:text-white leading-[1.5]"><router-link to="/product-details">Fashionable Wooden Sofa</router-link></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="py-16 bg-[#f5f5f5] dark:bg-dark-secondary" data-aos="fade-up">
            <div class="container">
                <PartnerOne/>
            </div>
        </div>

        <div class="s-py-100">
            <div class="container">
                <BlogFour/>
            </div>
        </div>

        <NewsLetterTwo/>

        <FooterFour/>

        <ScrollToTop/>

    </div>
</template>

<script setup>
    import { onMounted } from 'vue';
    import NavbarFour from '@/components/navbar/navbar-four.vue';
    import BestSeller from '@/components/product/best-seller.vue';
    import PartnerOne from '@/components/partner/partner-one.vue';
    import BlogFour from '@/components/blog/blog-four.vue';
    import NewsLetterTwo from '@/components/news/news-letter-two.vue';
    import FooterFour from '@/components/footer/footer-four.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';

    import bg from '@/assets/img/home-v4/banner-bg.jpg'

    import { servicesData } from '@/data/index-three';
    import { featureOne, productList } from '@/data/data';
    
    import Aos from 'aos';

    onMounted(()=>{
        Aos.init()
    })

</script>
