<template>
    <div>
        <NavbarOne/>

        <div class="bg-primary-light dark:bg-dark-secondary relative overflow-hidden">
            <div class="absolute min-h-full left-0 top-0 w-[300px] xl:w-96 h-full bg-[#DBCBBD] dark:bg-primary home-v5-ctagory pt-[30px] xl:pt-16 xl:pl-24 2xl:pb-7 z-10 transform translate-x-[-300px] xl:translate-x-0 duration-300" :class="showCategory ? 'active' : ''">
                <button @click="showCategory = !showCategory" class="ctgry-slider-btn flex items-center gap-2 text-base font-medium text-title bg-primary py-[10px] px-5 absolute left-full top-5 xl:opacity-0">
                    Category 
                    <svg class="fill-current text-title" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.28754 10.875C0.104206 10.6917 0.01254 10.4583 0.01254 10.175C0.01254 9.89167 0.104206 9.65833 0.28754 9.475L4.16254 5.575L0.28754 1.675C0.104206 1.49167 0.00853994 1.26233 0.000539938 0.987C-0.00812673 0.712333 0.0875396 0.475 0.28754 0.275C0.470873 0.0916663 0.704207 0 0.98754 0C1.27087 0 1.50421 0.0916663 1.68754 0.275L6.28754 4.875C6.38754 4.975 6.45854 5.08333 6.50054 5.2C6.54187 5.31667 6.56254 5.44167 6.56254 5.575C6.56254 5.70833 6.54187 5.83333 6.50054 5.95C6.45854 6.06667 6.38754 6.175 6.28754 6.275L1.68754 10.875C1.50421 11.0583 1.27487 11.154 0.99954 11.162C0.724873 11.1707 0.48754 11.075 0.28754 10.875ZM6.88754 10.875C6.70421 10.6917 6.61254 10.4583 6.61254 10.175C6.61254 9.89167 6.70421 9.65833 6.88754 9.475L10.7625 5.575L6.88754 1.675C6.70421 1.49167 6.60821 1.26233 6.59954 0.987C6.59154 0.712333 6.68754 0.475 6.88754 0.275C7.07087 0.0916663 7.30421 0 7.58754 0C7.87087 0 8.10421 0.0916663 8.28754 0.275L12.8875 4.875C12.9875 4.975 13.0582 5.08333 13.0995 5.2C13.1415 5.31667 13.1625 5.44167 13.1625 5.575C13.1625 5.70833 13.1415 5.83333 13.0995 5.95C13.0582 6.06667 12.9875 6.175 12.8875 6.275L8.28754 10.875C8.10421 11.0583 7.87521 11.154 7.60054 11.162C7.32521 11.1707 7.08754 11.075 6.88754 10.875Z"/>
                    </svg>                    
                </button>
                <h3 class="font-semibold leading-none mb-6 pl-5 xl:pl-0 text-title dark:text-white">Product Category</h3>
                <ul class="divide-y divide-[#C5B7AA] dark:divide-bdr-clr-white sm:text-lg leading-none sm:leading-none text-title dark:text-white pb-5">
                    <li v-for="(item, index) in category" :key="index" class="pl-5 xl:pl-0 py-4 sm:py-5 xl:py-6 relative z-[1] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-[-1] block before:duration-500 dark:text-white"><router-link to="/product-category">{{item}}</router-link></li>
                </ul>
            </div>
            <div class="container-fluid">
                <div class="max-w-[1720px] mx-auto">
                    <div class="xl:max-w-[800px] 2xl:max-w-[1180px] ml-auto flex items-center justify-between gap-10 flex-col sm:flex-row">
                        <div class="max-w-[285px] md:max-w-[364px] w-full sm:pb-12">
                            <Swiper
                                :modules="[Autoplay,]"
                                :slides-per-view="1" 
                                :loop="true" 
                                :autoplay="{ delay: 3000}"
                             class="carousel-slider-one sm:h-[500px] md:h-[600px] xl:h-[765px] pb-8 sm:pb-0 block">

                                <SwiperSlide class=" mx-auto lg:w-[240px] flex-none crsl-slider-one-thumb">
                                    <div class="relative h-[350px] md:h-[500px] xl:h-auto">
                                        <img class="h-full xl:h-auto mx-auto" :src="bg1" alt="carousel">
                                        <div class="absolute z-30 flex items-center justify-center bg-[#BB976D] bg-opacity-20 dark:bg-white dark:bg-opacity-20 rounded-full p-3 right-0 sm:right-[0%] bottom-[17%]">
                                            <div class="w-16 md:w-20 h-16 md:h-20 bg-white rounded-full dark:bg-title flex items-center justify-center">
                                                <h4 class="font-normal leading-none text-title"><sup>$</sup>25</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-center mt-6 md:mt-9 xl:mt-12 group">
                                        <router-link to="#" class="text-lg leading-tight text-underline text-title dark:text-white inline-block">Buy Now</router-link>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide class="mx-auto lg:w-[240px] flex-none crsl-slider-one-thumb">
                                    <div class="relative h-[350px] md:h-[500px] xl:h-auto">
                                        <img class="h-full xl:h-auto mx-auto" :src="bg2" alt="carousel">
                                        <div class="absolute z-30 flex items-center justify-center bg-[#BB976D] bg-opacity-20 dark:bg-white dark:bg-opacity-20 rounded-full p-3 right-[30%] bottom-[30%]">
                                            <div class="w-16 md:w-20 h-16 md:h-20 bg-white rounded-full dark:bg-title flex items-center justify-center">
                                                <h4 class="font-normal leading-none text-title"><sup>$</sup>55</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-center mt-6 md:mt-9 xl:mt-12 group">
                                        <router-link to="/shop-v1" class="text-lg leading-tight text-underline text-title dark:text-white inline-block">Buy Now</router-link>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide class="mx-auto lg:w-[240px] flex-none crsl-slider-one-thumb">
                                    <div class="relative h-[350px] md:h-[500px] xl:h-auto">
                                        <img class="h-full xl:h-auto mx-auto" :src="bg3" alt="carousel">
                                        <div class="absolute z-30 flex items-center justify-center bg-[#BB976D] bg-opacity-20 dark:bg-white dark:bg-opacity-20 rounded-full p-3 right-[18%] bottom-[24%]">
                                            <div class="w-16 md:w-20 h-16 md:h-20 bg-white rounded-full dark:bg-title flex items-center justify-center">
                                                <h4 class="font-normal leading-none text-title"><sup>$</sup>120</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-center mt-6 md:mt-9 xl:mt-12 group">
                                        <router-link to="/shop-v2" class="text-lg leading-tight text-underline text-title dark:text-white inline-block">Buy Now</router-link>
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </div>
                        <div class="max-w-[735px] w-full relative pb-12 sm:pb-0">
                            <svg class="w-full fill-[#BB976D] absolute top-1/2 left-1/2 transfrom -translate-x-1/2 -translate-y-1/2" viewBox="0 0 735 614" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.1" d="M465.663 12.3984C608.469 51.1584 736.824 180.997 734.98 300.933C733.582 421.174 601.229 531.645 449.583 582.603C298.382 633.866 126.374 625.88 49.0544 532.389C-27.9532 438.459 -11.0285 259.156 76.9747 142.994C164.533 26.5264 322.546 -25.924 465.663 12.3984Z"/>
                            </svg>                            
                            <div class="text-center sm:text-left max-w-[438px] mx-auto">
                                <h4 class="leading-none font-medium dark:text-white">All products in store</h4>
                                <h2 class="leading-none text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-bold mt-6 dark:text-white">Get <span class="text-primary">25%</span> Off</h2>
                                <p class="mt-4 dark:text-white-light">Unlock unbeatable savings on every purchase. Enjoy a generous 25% off on all in-store products today. </p>
                                <div class="button">
                                    <router-link class="btn btn-outline mt-6" to="/shop-v1" data-text="Let's Shop Now"><span>Let's Shop Now</span></router-link>
                                </div>
                            </div>
                        </div>

                        <div class="pt-0 pb-12 md:pb-[70px] lg:pb-8 2xl:pb-52 hidden">
                            <Swiper
                                :modules="[Autoplay,]"
                                :slides-per-view="1" 
                                :loop="true" 
                                :autoplay="{ delay: 3000}"
                             class="carousel-slider-one home-v5-banner-slider owl-carousel block">
                                <SwiperSlide>
                                    <div class="flex items-center xl:items-end gap-10 sm:gap-16 2xl:gap-20 justify-between flex-col sm:flex-row">
                                        <div class="max-w-xs mx-auto lg:w-[326px] flex-none crsl-slider-one-thumb">
                                            <div class="relative h-[300px] md:h-[400px] xl:h-auto">
                                                <img class="h-full xl:h-auto" :src="bg1" alt="carousel">
                                                <div class="absolute z-30 flex items-center justify-center bg-[#BB976D] bg-opacity-20 dark:bg-white dark:bg-opacity-20 rounded-full p-3 right-0 sm:right-[-10%] bottom-[17%]">
                                                    <div class="w-16 md:w-20 h-16 md:h-20 bg-white rounded-full dark:bg-title flex items-center justify-center">
                                                        <h4 class="font-normal leading-none text-title"><sup>$</sup>25</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center mt-6 md:mt-9 xl:mt-12 group">
                                                <router-link to="/shop-v2" class="text-lg leading-tight text-underline text-title dark:text-white inline-block">Buy Now</router-link>
                                            </div>
                                        </div>
                                        <div class="xl:flex-1 max-w-[400px] sm:max-w-xl xl:pb-16 2xl:pb-24 crsl-slider-one-content text-center sm:text-left">
                                            <h4 class="leading-none font-medium dark:text-white">All products in store</h4>
                                            <h2 class="leading-none text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-bold mt-6 dark:text-white">Get <span class="text-primary">25%</span> Off</h2>
                                            <p class="mt-4 md:mt-5 dark:text-white-light">Unlock unbeatable savings on every purchase. Enjoy a generous 25% off on all in-store products today. </p>
                                            <div class="button">
                                                <router-link class="btn btn-outline mt-6" to="/shop-v1" data-text="Let's Shop Now"><span>Let's Shop Now</span></router-link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide class="pt-8">
                                    <div class="flex items-center xl:items-end gap-10 sm:gap-16 2xl:gap-20 justify-between flex-col sm:flex-row">
                                        <div class="max-w-xs mx-auto lg:w-[326px] flex-none crsl-slider-one-thumb">
                                            <div class="relative h-[300px] md:h-[400px] xl:h-auto">
                                                <img class="h-full xl:h-auto" :src="bg2" alt="carousel">
                                                <div class="absolute z-30 flex items-center justify-center bg-[#BB976D] bg-opacity-20 dark:bg-white dark:bg-opacity-20 rounded-full p-3 right-[30%] bottom-[30%]">
                                                    <div class="w-16 md:w-20 h-16 md:h-20 bg-white rounded-full dark:bg-title flex items-center justify-center">
                                                        <h4 class="font-normal leading-none text-title"><sup>$</sup>55</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-6 md:mt-9 xl:mt-12 pl-14 group">
                                                <router-link to="/shop-v1" class="text-lg leading-tight text-underline text-title dark:text-white inline-block">Buy Now</router-link>
                                            </div>
                                        </div>
                                        <div class="xl:flex-1 max-w-[400px] sm:max-w-xl xl:pb-16 2xl:pb-24 crsl-slider-one-content text-center sm:text-left">
                                            <h4 class="leading-none font-medium dark:text-white">All products in store</h4>
                                            <h2 class="leading-none text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-bold mt-6 dark:text-white">Get <span class="text-primary">55%</span> Off</h2>
                                            <p class="mt-4 md:mt-5 dark:text-white-light">Unlock unbeatable savings on every purchase. Enjoy a generous 25% off on all in-store products today. </p>
                                            <div class="button">
                                                <router-link class="btn btn-outline mt-6" to="/shop-v2" data-text="Let's Shop Now"><span>Let's Shop Now</span></router-link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide class="pt-8">
                                    <div class="flex items-center xl:items-end gap-10 sm:gap-16 2xl:gap-20 justify-between flex-col sm:flex-row">
                                        <div class="max-w-xs mx-auto lg:w-[326px] flex-none crsl-slider-one-thumb">
                                            <div class="relative h-[300px] md:h-[400px] xl:h-auto">
                                                <img class="h-full xl:h-auto" :src="bg3" alt="carousel">
                                                <div class="absolute z-30 flex items-center justify-center bg-[#BB976D] bg-opacity-20 dark:bg-white dark:bg-opacity-20 rounded-full p-3 right-[18%] bottom-[24%]">
                                                    <div class="w-16 md:w-20 h-16 md:h-20 bg-white rounded-full dark:bg-title flex items-center justify-center">
                                                        <h4 class="font-normal leading-none text-title"><sup>$</sup>120</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="pl-20 mt-6 md:mt-9 xl:mt-12 group">
                                                <router-link to="/shop-v2" class="text-lg leading-tight text-underline text-title dark:text-white inline-block">Buy Now</router-link>
                                            </div>
                                        </div>
                                        <div class="xl:flex-1 max-w-[400px] sm:max-w-xl xl:pb-16 2xl:pb-24 crsl-slider-one-content text-center sm:text-left">
                                            <h4 class="leading-none font-medium dark:text-white">All products in store</h4>
                                            <h2 class="leading-none text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-bold mt-6 dark:text-white">Get <span class="text-primary">120%</span> Off</h2>
                                            <p class="mt-4 md:mt-5 dark:text-white-light">Furnixar is a modern furniture HTML template for an eCommerce website designed to help you create an impressive online store for your furniture. </p>
                                            <div class="button">
                                                <router-link class="btn btn-outline mt-6" to="/shop-v3" data-text="Let's Shop Now"><span>Let's Shop Now</span></router-link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="s-py-100-50">
            <div class="container">
                <div class="grid sm:grid-cols-2 lg:flex lg:justify-between gap-7 flex-wrap lg:flex-nowrap max-w-1366 mx-auto">
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

        <div class="s-py-50" data-aos="fade-up">
            <div class="container-fluid">
                <div class="max-w-[1720px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3">
                    <router-link v-for="(item, index) in feature" :key="index" to="/product-category" class="relative group overflow-hidden">
                        <img class="duration-300 transform scale-100 group-hover:scale-110 w-full" :src="item.image" alt="product">
                        <div class="absolute bottom-5 sm:bottom-8 lg:bottom-12 w-full left-0 px-7 flex justify-center">
                            <div class=" bg-white bg-opacity-80 dark:bg-title dark:bg-opacity-80 p-5 z-10">
                                <h4 class="font-semibold leading-[1.5]">{{item.name}}</h4>
                                <p class="leading-none mt-[10px]">{{item.product}}</p>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="s-py-50">
            <div class="container-fluid">
                <div class="max-w-[1720px] mx-auto">
                    <div class="max-w-[547px] mx-auto mb-8 md:mb-12 text-center" data-aos="fade-up">
                        <img :src="bed" alt=""  class="mx-auto size-16"/>                    
                        <h2 class="mt-[15px] leading-none">Latest Products</h2>
                        <p class="mt-[10px] md:mt-[15px]">Be the first to experience innovation with our latest arrivals. Stay ahead of the curve and discover what's new in style, technology, and more. </p>
                    </div>
                    <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 lg:gap-[30px]" data-aos="fade-up" data-aos-delay="100">
                        <div v-for="(item, index) in productList.slice(0,10)" :key="index" class="relative group z-[5] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-title before:opacity-0 before:duration-300 before:z-[5] overflow-hidden hover:before:opacity-80">
                            <img class="w-full transform duration-300 group-hover:scale-110" :src="item.image" alt="product-card">
                            <div class="absolute z-10 top-0 left-0 w-full h-full items-start justify-end flex flex-col p-7">
                                <div>
                                    <h4 class="font-normal leading-none text-white transition-all group-hover:duration-100 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">{{item.price}}</h4>
                                    <h6 class="font-normal mt-1 text-white transition-all group-hover:duration-300 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 leading-[1.5]"><router-link to="/product-details">{{item.name}}</router-link></h6>

                                    <ul class="flex items-center gap-2 mt-1 transition-all group-hover:duration-500 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                        <li><i class="fa-solid fa-star text-[#EE9818] text-[14px]"></i></li>
                                        <li><i class="fa-solid fa-star text-[#EE9818] text-[14px]"></i></li>
                                        <li><i class="fa-solid fa-star text-[#EE9818] text-[14px]"></i></li>
                                        <li><i class="fa-solid fa-star text-[#EE9818] text-[14px]"></i></li>
                                        <li><i class="fa-solid fa-star text-slate-300 text-[14px]"></i></li>
                                        <li class="text-gray-100">( 123 )</li>
                                    </ul> 
                                </div>  
                            </div>
                            <div class="flex flex-col gap-[10px] absolute z-20 top-5 right-5">
                                <button class="w-9 lg:w-12 h-9 p-2 lg:h-12 flex items-center justify-center transition-all duration-300 bg-white dark:bg-title bg-opacity-10 dark:bg-opacity-80 transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 quick-view tooltip-icon-2">
                                    <i class="mdi mdi-eye-outline transition-all duration-300 text-white text-[24px]"></i>   
                                    <span class="p-2 bg-white dark:bg-title text-xs text-title dark:text-white absolute right-[70px] top-1/2 transform -translate-y-1/2 whitespace-nowrap rounded-[4px] opacity-0 invisible duration-300">Quick View
                                        <span class="w-3 h-3 bg-white dark:bg-title absolute -right-[6px] top-1/2 transform -translate-y-1/2 rotate-45"></span>
                                    </span>
                                </button>
                                
                                <router-link to="/cart" class="w-9 lg:w-12 h-9 p-2 lg:h-12 flex items-center justify-center transition-all duration-500 bg-white dark:bg-title bg-opacity-10 dark:bg-opacity-60 transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 tooltip-icon-2">
                                    <i class="mdi mdi-shopping-outline transition-all duration-300 text-white text-[24px]"></i>
                                    <span class="p-2 bg-white dark:bg-title text-xs text-title dark:text-white absolute right-[70px] top-1/2 transform -translate-y-1/2 whitespace-nowrap rounded-[4px] opacity-0 invisible duration-300">Add to Cart
                                        <span class="w-3 h-3 bg-white dark:bg-title absolute -right-[6px] top-1/2 transform -translate-y-1/2 rotate-45"></span>
                                    </span>
                                </router-link>

                                <button class="w-9 lg:w-12 h-9 p-2 lg:h-12 flex items-center justify-center transition-all duration-700 bg-white dark:bg-title bg-opacity-10 dark:bg-opacity-80 faveIcon transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 tooltip-icon-2">
                                    <i class="mdi mdi-cards-heart-outline transition-all duration-300 text-white text-[24px]"></i>
                                    <span class="p-2 bg-white dark:bg-title text-xs text-title dark:text-white absolute right-[70px] top-1/2 transform -translate-y-1/2 whitespace-nowrap rounded-[4px] opacity-0 invisible duration-300">Add to wishlist
                                        <span class="w-3 h-3 bg-white dark:bg-title absolute -right-[6px] top-1/2 transform -translate-y-1/2 rotate-45"></span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="text-center mt-7 md:mt-12" data-aos="fade-up" data-aos-delay="200">
                        <router-link to="/shop-v1" class="btn btn-outline" data-text="See all Products">
                            <span>See all Products</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

        <div class="s-py-50 overflow-hidden">
            <div class="container-fluid" data-aos="fade-up">
                <div class="max-w-[547px] mx-auto mb-8 sm:mb-[70px] text-center">
                    <img :src="comment" class="mx-auto" alt="">  
                    <h2 class="mt-[15px] leading-none">From the Blog</h2>
                    <p class="mt-[10px] md:mt-[15px]">Stay informed and inspired with our latest blog posts. Explore insightful content that keeps you ahead of trends and informed on topics you love. </p>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
                <BlogFive/>
            </div>
        </div>
        <div class="s-py-50-100">
            <NewsLetterOne/>
        </div>

        <div class="bg-title dark:bg-dark-secondary">
            <div class="container-fluid max-w-[1720px] mx-auto">
                <div class=" py-[50px] border-b border-[#3A454F]">
                    <PartnerTwo/>
                </div>
                <FooterFive/>
            </div>
        </div>

        <ScrollToTop/>

    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';

    import NavbarOne from '@/components/navbar/navbar-one.vue';
    import BlogFive from '@/components/blog/blog-five.vue';
    import NewsLetterOne from '@/components/news/news-letter-one.vue';
    import PartnerTwo from '@/components/partner/partner-two.vue';
    import FooterFive from '@/components/footer/footer-five.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';

    import bg1 from '@/assets/img/shortcode/carousel/carousel-01.png'
    import bg2 from '@/assets/img/shortcode/carousel/carousel-022.png'
    import bg3 from '@/assets/img/shortcode/carousel/carousel-03.png'
    import bed from '@/assets/img/svg/bed.svg'
    import comment from '@/assets/img/svg/comment-2.svg'

    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/swiper-bundle.css';
    import { Autoplay } from 'swiper/modules';

    import { featureOne,productList } from '@/data/data';
    import { feature } from '@/data/index-five';
    
    import Aos from 'aos';

    const showCategory = ref(false)

    const category = ref([
    'Chair','Table','Sofa Set','Vases','Lamp & Light','Almirah','Dressing table','Watch','Mirror'
  ])

  onMounted(()=>{
    Aos.init()
  })
</script>
