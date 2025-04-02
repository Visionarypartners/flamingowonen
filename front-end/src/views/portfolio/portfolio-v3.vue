<template>
    <div>   
        <NavbarOne/>

        <div class="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" :style="{backgroundImage:'url( ' + bg + ' )'}">
            <div class="text-center w-full">
                <h2 class="text-white text-8 md:text-[40px] font-normal leading-none text-center">Portfolio</h2>
                <ul class="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4">
                    <li><router-link to="/">Home</router-link></li>
                    <li>/</li>
                    <li class="text-primary">Portfolio</li>
                </ul>
            </div>
        </div>

        <div class="s-py-100 overflow-hidden relative">
            <div class="container-fluid">
                <div class="max-w-[1720px] mx-auto">
                    <div class="portfolio2-button flex items-center gap-3 md:gap-4 lg:gap-6 flex-wrap mb-8 md:mb-12" data-aos="fade-up" data-aos-delay="100">
                        <button @click="activeTab = 1" class="text-base md:text-[17px] leading-none font-medium hover:text-primary duration-300" :class="activeTab === 1 ? 'active' : ''">
                            All
                        </button>
                        <svg class="fill-current text-paragraph dark:text-white-light" width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.894 0.194247C6.054 2.48625 5.214 4.77825 4.374 7.07025C3.534 9.36225 2.688 11.6542 1.836 13.9462H0.306C1.158 11.6542 2.004 9.36225 2.844 7.07025C3.684 4.77825 4.53 2.48625 5.382 0.194247H6.894Z"/>
                        </svg>
                        <button @click="activeTab = 2" class="text-base md:text-[17px] leading-none font-medium hover:text-primary duration-300" :class="activeTab === 2 ? 'active' : ''">
                            Full Interior
                        </button>
                        <svg class="fill-current text-paragraph dark:text-white-light" width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.894 0.194247C6.054 2.48625 5.214 4.77825 4.374 7.07025C3.534 9.36225 2.688 11.6542 1.836 13.9462H0.306C1.158 11.6542 2.004 9.36225 2.844 7.07025C3.684 4.77825 4.53 2.48625 5.382 0.194247H6.894Z"/>
                        </svg>
                        <button @click="activeTab = 3" class="text-base md:text-[17px] leading-none font-medium hover:text-primary duration-300" :class="activeTab === 3 ? 'active' : ''">
                            Lamp & Vase
                        </button>
                        <svg class="fill-current text-paragraph dark:text-white-light" width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.894 0.194247C6.054 2.48625 5.214 4.77825 4.374 7.07025C3.534 9.36225 2.688 11.6542 1.836 13.9462H0.306C1.158 11.6542 2.004 9.36225 2.844 7.07025C3.684 4.77825 4.53 2.48625 5.382 0.194247H6.894Z"/>
                        </svg>
                        <button @click="activeTab = 4" class="text-base md:text-[17px] leading-none font-medium hover:text-primary duration-300" :class="activeTab === 4 ? 'active' : ''">
                            Table
                        </button>
                        <svg class="fill-current text-paragraph dark:text-white-light" width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.894 0.194247C6.054 2.48625 5.214 4.77825 4.374 7.07025C3.534 9.36225 2.688 11.6542 1.836 13.9462H0.306C1.158 11.6542 2.004 9.36225 2.844 7.07025C3.684 4.77825 4.53 2.48625 5.382 0.194247H6.894Z"/>
                        </svg>
                        <button @click="activeTab = 5" class="text-base md:text-[17px] leading-none font-medium hover:text-primary duration-300" :class="activeTab === 5 ? 'active' : ''">
                            Art Design
                        </button>
                    </div>

                    <div v-if="activeTab === 1" class="portfolio2-isotope -m-[10px] sm:-m-[15px]" >
                        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
                            <router-link v-for="(item, index) in portfolioTwo.slice(0,3)" :key="index" :to="`/portfolio-details-v1/${item.id}`" class="">
                                <div class="portfolio-card relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:opacity-0 before:duration-300 hover:before:opacity-100 group overflow-hidden">
                                    <img class="w-full object-cover" :src="item.image" alt="Portfolio">
                                    <div class="absolute left-7 bottom-7 z-10 transform translate-y-8 duration-300 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                        <span class="inline-block text-[15px] leading-none text-title font-medium p-[10px] bg-[#DBCBBD] rounded-md">{{item.tag}}</span>
                                        <span class="block text-lg md:text-xl font-semibold leading-none text-white mt-3 md:mt-4">
                                            {{item.name}}
                                        </span>
                                    </div>
                                    <span class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 scale-50 duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-100 block">
                                        <i class="mdi mdi-arrow-expand-all text-white text-[40px]"></i>
                                    </span>
                                </div>
                            </router-link>
                        </div>
                        <div class="grid md:grid-cols-2 grid-cols-1 gap-7 mt-7 mb-7">
                            <router-link to="/portfolio-details-v1">
                                <div class="portfolio-card relative h-full before:absolute before:top-0 before:left-0 before:w-full before:h-full before:opacity-0 before:duration-300 hover:before:opacity-100 group overflow-hidden">
                                    <img class="w-full h-full object-cover" :src="image1" alt="Portfolio"/>
                                    <div class="absolute left-7 bottom-7 z-10 transform translate-y-8 duration-300 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                        <span class="inline-block text-[15px] leading-none text-title font-medium p-[10px] bg-[#DBCBBD] rounded-md">Table</span>
                                        <span class="block text-lg md:text-xl font-semibold leading-none text-white mt-3 md:mt-4">
                                            Classic Vase & Chair
                                        </span>
                                    </div>
                                    <span class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 scale-50 duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-100 block">
                                        <i class="mdi mdi-arrow-expand-all text-white text-[40px]"></i>
                                    </span>
                                </div>
                            </router-link>

                            <div class="">
                                <div class="relative">
                                    <Swiper
                                        :modules="[Autoplay,Navigation]" 
                                        :slides-per-view="3" 
                                        :space-between="20" 
                                        :loop="true"  
                                        :navigation="true" 
                                        :autoplay="{ delay: 3000}" 
                                        :breakpoints="{
                                            320: { slidesPerView: 1, spaceBetween: 0 },
                                            576: { slidesPerView: 1, spaceBetween: 0 },
                                            1024: { slidesPerView: 1, spaceBetween: 0 },
                                        }" 
                                     class="portfolio-v3-slider owl-carousel block">
                                        <SwiperSlide>
                                            <router-link class="relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-title before:bg-opacity-20" to="/portfolio-details-v1">
                                                <img class="w-full" :src="image2" alt="Portfolio"/>
                                            </router-link>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <router-link class="relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-title before:bg-opacity-20" to="/portfolio-details-v1">
                                                <img class="w-full" :src="image3" alt="Portfolio"/>
                                            </router-link>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <router-link class="relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-title before:bg-opacity-20" to="/portfolio-details-v1">
                                                <img class="w-full" :src="image4" alt="Portfolio"/>
                                            </router-link>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
                            <router-link v-for="(item, index) in portfolioTwo.slice(3,6)" :key="index" :to="`/portfolio-details-v1/${item.id}`" class="">
                                <div class="portfolio-card relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:opacity-0 before:duration-300 hover:before:opacity-100 group overflow-hidden">
                                    <img class="w-full object-cover" :src="item.image" alt="Portfolio">
                                    <div class="absolute left-7 bottom-7 z-10 transform translate-y-8 duration-300 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                        <span class="inline-block text-[15px] leading-none text-title font-medium p-[10px] bg-[#DBCBBD] rounded-md">{{item.tag}}</span>
                                        <span class="block text-lg md:text-xl font-semibold leading-none text-white mt-3 md:mt-4">
                                            {{item.name}}
                                        </span>
                                    </div>
                                    <span class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 scale-50 duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-100 block">
                                        <i class="mdi mdi-arrow-expand-all text-white text-[40px]"></i>
                                    </span>
                                </div>
                            </router-link>
                        </div>
                    </div>
                    <div v-if="activeTab === 2" class="portfolio2-isotope -m-[10px] sm:-m-[15px]" >
                        <div class="grid md:grid-cols-2 grid-cols-1 gap-7 mt-7 mb-7">
                            <router-link to="/portfolio-details-v1">
                                <div class="portfolio-card relative h-full before:absolute before:top-0 before:left-0 before:w-full before:h-full before:opacity-0 before:duration-300 hover:before:opacity-100 group overflow-hidden">
                                    <img class="w-full h-full object-cover" :src="image1" alt="Portfolio"/>
                                    <div class="absolute left-7 bottom-7 z-10 transform translate-y-8 duration-300 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                        <span class="inline-block text-[15px] leading-none text-title font-medium p-[10px] bg-[#DBCBBD] rounded-md">Table</span>
                                        <span class="block text-lg md:text-xl font-semibold leading-none text-white mt-3 md:mt-4">
                                            Classic Vase & Chair
                                        </span>
                                    </div>
                                    <span class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 scale-50 duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-100 block">
                                        <i class="mdi mdi-arrow-expand-all text-white text-[40px]"></i>
                                    </span>
                                </div>
                            </router-link>
                        </div>
                    </div>
                    <div v-if="activeTab === 3" class="portfolio2-isotope -m-[10px] sm:-m-[15px]" >
                        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
                            <router-link v-for="(item, index) in portfolioTwo.slice(0,3)" :key="index" :to="`/portfolio-details-v1/${item.id}`" class="">
                                <div class="portfolio-card relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:opacity-0 before:duration-300 hover:before:opacity-100 group overflow-hidden">
                                    <img class="w-full object-cover" :src="item.image" alt="Portfolio">
                                    <div class="absolute left-7 bottom-7 z-10 transform translate-y-8 duration-300 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                        <span class="inline-block text-[15px] leading-none text-title font-medium p-[10px] bg-[#DBCBBD] rounded-md">{{item.tag}}</span>
                                        <span class="block text-lg md:text-xl font-semibold leading-none text-white mt-3 md:mt-4">
                                            {{item.name}}
                                        </span>
                                    </div>
                                    <span class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 scale-50 duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-100 block">
                                        <i class="mdi mdi-arrow-expand-all text-white text-[40px]"></i>
                                    </span>
                                </div>
                            </router-link>
                        </div>
                    </div>
                    <div v-if="activeTab === 4" class="portfolio2-isotope -m-[10px] sm:-m-[15px]" >
                        <div class="grid md:grid-cols-2 grid-cols-1 gap-7 mt-7 mb-7">
                            <div class="">
                                <div class="relative">
                                    <Swiper
                                        :modules="[Autoplay,Navigation]" 
                                        :slides-per-view="3" 
                                        :space-between="20" 
                                        :loop="true"  
                                        :navigation="true" 
                                        :autoplay="{ delay: 3000}" 
                                        :breakpoints="{
                                            320: { slidesPerView: 1, spaceBetween: 0 },
                                            576: { slidesPerView: 1, spaceBetween: 0 },
                                            1024: { slidesPerView: 1, spaceBetween: 0 },
                                        }" 
                                     class="portfolio-v3-slider owl-carousel block">
                                        <SwiperSlide>
                                            <router-link class="relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-title before:bg-opacity-20" to="/portfolio-details-v1">
                                                <img class="w-full" :src="image2" alt="Portfolio"/>
                                            </router-link>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <router-link class="relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-title before:bg-opacity-20" to="/portfolio-details-v1">
                                                <img class="w-full" :src="image3" alt="Portfolio"/>
                                            </router-link>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <router-link class="relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-title before:bg-opacity-20" to="/portfolio-details-v1">
                                                <img class="w-full" :src="image4" alt="Portfolio"/>
                                            </router-link>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="activeTab === 5" class="portfolio2-isotope -m-[10px] sm:-m-[15px]" >
                        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
                            <router-link v-for="(item, index) in portfolioTwo.slice(3,6)" :key="index" :to="`/portfolio-details-v1/${item.id}`" class="">
                                <div class="portfolio-card relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:opacity-0 before:duration-300 hover:before:opacity-100 group overflow-hidden">
                                    <img class="w-full object-cover" :src="item.image" alt="Portfolio">
                                    <div class="absolute left-7 bottom-7 z-10 transform translate-y-8 duration-300 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                        <span class="inline-block text-[15px] leading-none text-title font-medium p-[10px] bg-[#DBCBBD] rounded-md">{{item.tag}}</span>
                                        <span class="block text-lg md:text-xl font-semibold leading-none text-white mt-3 md:mt-4">
                                            {{item.name}}
                                        </span>
                                    </div>
                                    <span class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 scale-50 duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-100 block">
                                        <i class="mdi mdi-arrow-expand-all text-white text-[40px]"></i>
                                    </span>
                                </div>
                            </router-link>
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
    import { onMounted, ref } from 'vue';

    import NavbarOne from '@/components/navbar/navbar-one.vue';
    import FooterOne from '@/components/footer/footer-one.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';

    import bg from '@/assets/img/shortcode/breadcumb.jpg'
    import image1 from '@/assets/img/gallery/portfolio-03/portfolio-01.jpg'
    import image2 from '@/assets/img/gallery/portfolio-03/portfolio-02.jpg'
    import image3 from '@/assets/img/gallery/portfolio-03/portfolio-03.jpg'
    import image4 from '@/assets/img/gallery/portfolio-03/portfolio-04.jpg'

    import { portfolioTwo } from '@/data/portfolio-data';

    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay,Navigation } from 'swiper/modules';
    import 'swiper/swiper-bundle.css';

    import Aos from 'aos';

    const activeTab = ref(1)

    onMounted(()=>{
        Aos.init()
    })

</script>
