<template>
    <div>
        <NavbarOne/>

        <div class="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" :style="{backgroundImage:'url(' + bg + ')'}">
            <div class="text-center w-full">
                <h2 class="text-white text-8 md:text-[40px] font-normal leading-none text-center">Blog Tags</h2>
                <ul class="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4">
                    <li><router-link to="/">Home</router-link></li>
                    <li>/</li>
                    <li><router-link to="/blog-v1">Blog</router-link></li>
                    <li>/</li>
                    <li class="text-primary">Vase</li>
                </ul>
            </div>
        </div>

        <div class="s-py-100">
            <div class="container-fluid">
                <div class="max-w-[1720px] mx-auto">
                    <div class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-[30px]" data-aos="fade-up" data-aos-delay="100">
                        <div v-for="(item, index) in blogOneData" :key="index" class="group">
                            <router-link to="/blog-details-v2" class="overflow-hidden block">
                                <img class="duration-300 transform scale-100 group-hover:scale-110 w-full" :src="item.image" alt="blog">
                            </router-link>
                            <div class="text-center mt-4 px-3">
                                <ul class="flex items-center justify-center gap-[10px] flex-wrap">
                                    <li class="text-[15px] leading-none dark:text-white">{{item.date}}</li>
                                    <li><router-link to="/blog-tag" class="inline-block text-title font-medium text-[15px] leading-none py-[10px] px-5 rounded-md bg-primary-midum">{{item.tag}}</router-link></li>
                                </ul>
                                <h5 class="mt-3 font-medium dark:text-white leading-[1.5]"><router-link to="/blog-details-v2" class="text-underline">{{item.title}} </router-link></h5>
                            </div>
                        </div>
                    </div>
                    <div class="text-center mt-7 md:mt-12">
                        <router-link to="#" class="btn btn-outline" data-text="Load More">
                            <span>Load More</span>
                        </router-link>
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
    import FooterOne from '@/components/footer/footer-one.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';

    import bg from '@/assets/img/shortcode/breadcumb.jpg'

    import Aos from 'aos';
    import { blogOneData } from '@/data/blog';

    onMounted(()=>{
        Aos.init()
    })
</script>
