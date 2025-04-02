<template>
    <div>
        <NavbarOne/>

        <div class="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" :style="{backgroundImage:'url(' + bg + ')'}">
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
                <div class="max-w-[1720px] mx-auto" data-aos="fade-up" data-aos-delay="100">
                    <div class="portfolio1-button flex justify-center gap-[15px] flex-wrap mb-8 md:mb-12">
                        <button class="btn btn-sm btn-theme-outline" :class="activeFilter === '*' ? 'active' : ''" @click="tabChange('*')" data-text="All">
                            <span>All</span>
                        </button>
                        <button class="btn btn-sm btn-theme-outline" :class="activeFilter === 'Sofa' ? 'active' : ''" @click="tabChange('Sofa')" data-text="Sofa & Chair">
                            <span>Sofa & Chair</span>
                        </button>
                        <button class="btn btn-sm btn-theme-outline" :class="activeFilter === 'Interior' ? 'active' : ''" @click="tabChange('Interior')" data-text="Full Interior">
                            <span>Full Interior</span>
                        </button>
                        <button class="btn btn-sm btn-theme-outline" :class="activeFilter === 'Vase' ? 'active' : ''" @click="tabChange('Vase')" data-text="Lamp & Vase">
                            <span>Lamp & Vase</span>
                        </button>
                        <button class="btn btn-sm btn-theme-outline" :class="activeFilter === 'Table' ? 'active' : ''" @click="tabChange('Table')" data-text="Table">
                            <span>Table</span>
                        </button>
                        <button class="btn btn-sm btn-theme-outline" :class="activeFilter === 'Design' ? 'active' : ''" @click="tabChange('Design')" data-text="Art Design">
                            <span>Art Design</span>
                        </button>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 md:gap-4 gap-2 -m-[10px] md:-m-[15px] mt-5">
                        <div class="portfolio1-item Sofa" v-for="(item, index) in filterItem" :key="index">
                            <router-link :to="`/portfolio-details-v2/${item.id}`" class="portfolio-card relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:opacity-0 before:duration-300 hover:before:opacity-100 group overflow-hidden block">
                                <img class="w-full object-cover" :src="item.image" alt="Portfolio">
                                <span class="absolute left-7 bottom-7 z-10 transform translate-y-8 duration-300 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 block">
                                    <span class="inline-block text-[15px] leading-none text-title font-medium p-[10px] bg-[#DBCBBD] rounded-md">
                                        {{item.tag}}
                                    </span>
                                    <span class="block text-lg md:text-xl font-semibold leading-none text-white mt-3 md:mt-4">
                                        {{item.name}}
                                    </span>
                                </span>
                                <span class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 scale-50 duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-100 block">
                                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.8941 12.4837C2.6642 12.4837 3.2882 11.8595 3.2882 11.0896V5.14552L12.2671 14.1226C12.5395 14.3947 12.8962 14.5308 13.2529 14.5308C13.6098 14.5308 13.9666 14.3947 14.2388 14.1224C14.7832 13.578 14.7832 12.6952 14.2386 12.151L5.25927 3.1737H11.2046C11.9746 3.1737 12.5988 2.54951 12.5988 1.7796C12.5988 1.00968 11.9748 0.385498 11.2046 0.385498H1.8941C1.124 0.385498 0.5 1.00968 0.5 1.7796V11.0898C0.5 11.8595 1.124 12.4837 1.8941 12.4837Z" fill="white"/>
                                        <path d="M39.1075 28.3816C38.3374 28.3816 37.7134 29.0058 37.7134 29.7757V35.7199L28.4581 26.4646C27.9135 25.9202 27.0309 25.9202 26.4865 26.4646C25.942 27.009 25.942 27.8918 26.4865 28.436L35.7416 37.6912H29.7977C29.0276 37.6912 28.4036 38.3154 28.4036 39.0853C28.4036 39.8552 29.0276 40.4794 29.7977 40.4794H39.1077C39.8778 40.4794 40.5018 39.8552 40.5018 39.0853V29.7757C40.5016 29.0058 39.8774 28.3816 39.1075 28.3816Z" fill="white"/>
                                        <path d="M12.5426 26.4634L3.2882 35.7186V29.7745C3.2882 29.0046 2.6642 28.3804 1.8941 28.3804C1.124 28.3804 0.5 29.0046 0.5 29.7745V39.0845C0.5 39.8544 1.124 40.4786 1.8941 40.4786H11.2037C11.9736 40.4786 12.5978 39.8544 12.5978 39.0845C12.5978 38.3146 11.9738 37.6904 11.2037 37.6904H5.25965L14.5142 28.4349C15.0587 27.8904 15.0587 27.0077 14.5141 26.4632C13.97 25.919 13.0872 25.919 12.5426 26.4634Z" fill="white"/>
                                        <path d="M39.1071 0.385498H29.7972C29.0271 0.385498 28.4031 1.00968 28.4031 1.7796C28.4031 2.54951 29.0271 3.1737 29.7972 3.1737H35.7414L26.7638 12.1519C26.2193 12.6963 26.2193 13.5791 26.764 14.1235C27.0361 14.3957 27.393 14.5317 27.7497 14.5317C28.1064 14.5317 28.4633 14.3955 28.7356 14.1233L37.7132 5.14514V11.0896C37.7132 11.8595 38.3372 12.4837 39.1073 12.4837C39.8774 12.4837 40.5014 11.8595 40.5014 11.0896V1.7796C40.5012 1.0095 39.8771 0.385498 39.1071 0.385498Z" fill="white"/>
                                    </svg>
                                </span>
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
    import Aos from 'aos';
    import { portfolioTwo } from '@/data/portfolio-data';

    onMounted(()=>{
        Aos.init()

        updateFilteredItems();
    })

    const activeFilter = ref('*')

    const filterItem = ref()

    const tabChange = (item) => {
        activeFilter.value = item
        updateFilteredItems();
    }

    const updateFilteredItems = () =>{
        filterItem.value = activeFilter.value === "*"
        ? portfolioTwo
        : portfolioTwo.filter((item) => item.category?.includes(activeFilter.value));
    }

</script>
