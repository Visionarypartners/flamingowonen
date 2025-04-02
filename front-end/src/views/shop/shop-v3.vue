<template>
    <div>
        <NavbarOne/>

        <div class="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" :style="{backgroundImage:'url('+ bg +')'}">
            <div class="text-center w-full">
                <h2 class="text-white text-8 md:text-[40px] font-normal leading-none text-center">Shop</h2>
                <ul class="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4">
                    <li><router-link to="/">Home</router-link></li>
                    <li>/</li>
                    <li class="text-primary">Shop</li>
                </ul>
            </div>
        </div>

        <div class="s-py-100-50 overflow-hidden" data-aos="fade-up">
            <div class="relative">
                <div class="">
                    <Swiper
                        :modules="[Autoplay,Navigation]" 
                        :slides-per-view="3" 
                        :space-between="20" 
                        :loop="true"  
                        :navigation="true" 
                        :autoplay="{ delay: 3000}" 
                        :breakpoints="{
                            320: { slidesPerView: 1, spaceBetween: 0 },
                            576: { slidesPerView: 2, spaceBetween: 0 },
                            1024: { slidesPerView: 3, spaceBetween: 0 },
                            1200: { slidesPerView: 4, spaceBetween: 0 },
                        }"
                        class="owl-carousel mx-auto block">
                        <SwiperSlide v-for="(item, index) in productSlider" :key="index" class="relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-title before:bg-opacity-70 group before:opacity-0 before:duration-300 hover:before:opacity-100 overflow-hidden before:z-10 block">
                            <img class="w-full object-cover transform duration-300 group-hover:scale-110" :src="item.image" alt="shop"/>
                            <div class="absolute z-20 w-full h-full flex top-0 left-0 flex-col items-center justify-center px-5">
                                <h3 class="text-white leading-tight font-semibold transform -translate-y-5 opacity-0 duration-300 group-hover:-translate-y-0 group-hover:opacity-100">{{item.name}}</h3>
                                <span class="text-white leading-none divide-black mt-3 transform translate-y-5 opacity-0 duration-300 group-hover:translate-y-0 group-hover:opacity-100">{{item.product}}</span>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>

        <div class="s-py-50-100" data-aos="fade-up">
            <div class="container-fluid">
                <div class="flex items-center lg:justify-center gap-6 flex-wrap" >
                    <div class="flex items-start sm:items-center gap-[15px] flex-wrap sm:flex-nowrap sm:max-w-[420px] w-full flex-col sm:flex-row">
                        <h4 class="font-medium leading-none text-xl flex-none">Choose Brand</h4>
                        <div class="nice-select bg-white dark:bg-dark outline-select small-select" :class="isOpen ? 'open' : ''" @click="toggleDropdown">
                            <span class="current">{{ selectedOption }}</span>
                            <ul class="list">
                                <li v-for="(item, index) in options" :key="index" data-value="1" class="option" @click="handleSelect(item, $event)">
                                    {{ item }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="hidden 2xl:block">
                        <svg width="24" height="41" viewBox="0 0 24 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.566987" y1="40.6689" x2="23.567" y2="0.831777" stroke="#BB976D"/>
                        </svg>
                    </div>
                    <div class="flex items-start sm:items-center gap-[15px] flex-wrap sm:flex-nowrap sm:max-w-[347px] w-full flex-col sm:flex-row">
                        <h4 class="font-medium leading-none text-xl flex-none">Sort By</h4>
                        <div class="nice-select bg-white dark:bg-dark outline-select small-select" :class="isOpen2 ? 'open' : ''" @click="toggleDropdown2">
                            <span class="current">{{ selectedOption2 }}</span>
                            <ul class="list">
                                <li v-for="(item, index) in options2" :key="index" data-value="1" class="option" @click="handleSelect2(item, $event)">
                                    {{ item }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="hidden 2xl:block">
                        <svg width="24" height="41" viewBox="0 0 24 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.566987" y1="40.6689" x2="23.567" y2="0.831777" stroke="#BB976D"/>
                        </svg>
                    </div>
                    <div class="sm:max-w-[411px] w-full flex items-start sm:items-center gap-[15px] flex-wrap sm:flex-nowrap flex-col sm:flex-row">
                        <h4 class="font-medium leading-none text-xl flex-none">Price Range</h4>
                        <div class="grid grid-cols-2 gap-[15px] sm:max-w-[260px] w-full">
                            <div class="py-[10px] px-5 border border-title dark:border-white-light flex items-center justify-center gap-[5px]">
                                <span class="text-title dark:text-white font-medium leading-none">Min:</span>
                                <div class="relative">
                                    <span class="text-title dark:text-white font-medium leading-none absolute left-0 top-1/2 block transform -translate-y-1/2">$</span>
                                    <input class="pl-[10px] w-full appearance-none bg-transparent text-title dark:text-white font-medium leading-none placeholder:text-title dark:placeholder:text-white placeholder  placeholder:font-medium placeholder:leading-none outline-none " type="number" placeholder="0" value="0">
                                </div>
                            </div>
                            <div class="py-[10] px-5 border border-title dark:border-white-light flex items-center justify-center gap-[5px]">
                                <span class="text-title dark:text-white font-medium leading-none">Max:</span>
                                <div class="relative">
                                    <span class="text-title dark:text-white  font-medium leading-none absolute left-0 top-1/2 block transform -translate-y-1/2">$</span>
                                    <input class="pl-[10px] w-full appearance-none bg-transparent text-title dark:text-white font-medium leading-none placeholder:text-title dark:placeholder:text-white  placeholder:font-medium placeholder:leading-none outline-none " type="number" placeholder="100" value="100">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="max-w-[1720px] mx-auto mt-8 md:mt-12" data-aos="fade-up" data-aos-delay="200">
                    <LayoutOne :classList="'grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 lg:gap-[30px]'" :productList="productList.slice(0,10)"/>
                </div>
                <div class="text-center mt-7 md:mt-12" data-aos="fade-up">
                    <router-link to="/shop-v1" class="btn btn-outline" data-text="Load More">
                        <span>Load More</span>
                    </router-link>
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
    import LayoutOne from '@/components/product/layout-one.vue';
    import FooterOne from '@/components/footer/footer-one.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';

    import bg from '@/assets/img/shortcode/breadcumb.jpg'
    
    import { productList, productSlider } from '@/data/data';
    
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay,Navigation } from 'swiper/modules';
    import 'swiper/swiper-bundle.css';

    import Aos from 'aos';

    onMounted(()=>{
        Aos.init()
    })

    const isOpen = ref(false)
    const selectedOption = ref('Navana Furniture')

    const options = [
        "Navana Furniture",
        "RFL Furniture",
        "Gazi Furniture",
        "Plastic Furniture",
        "Luxury Furniture",
    ];

    const toggleDropdown = () =>{
        isOpen.value = !isOpen.value
    }

    const handleSelect = (option,event) => {
        event.stopPropagation();
        selectedOption.value = option
        isOpen.value = false
    }

    const isOpen2 = ref(false)
    const selectedOption2 = ref('Sort by Latest')

    const options2 = [
        "Sort by Latest",
        "Sort by Name",
        "Sort by Number",
        "Sort by Price",
        "Sort by Date",
    ];

    const toggleDropdown2 = () =>{
        isOpen2.value = !isOpen2.value
    }

    const handleSelect2 = (option,event) => {
        event.stopPropagation();
        selectedOption2.value = option
        isOpen2.value = false
    }
</script>
