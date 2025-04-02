<script>
import NavbarOne from '@/components/navbar/navbar-one.vue';
import FooterOne from '@/components/footer/footer-one.vue';
import ScrollToTop from '@/components/scroll-to-top.vue';
import LayoutOne from '@/components/product/layout-one.vue';
import Aos from 'aos';
import bg from '@/assets/img/shortcode/breadcumb.jpg';
import card from '@/assets/img/thumb/shop-card.jpg';
import { getAllProductCategories, getProductsByCategory } from '@/services/medusa';

export default {
    components: {
        NavbarOne,
        FooterOne,
        ScrollToTop,
        LayoutOne
    },
    data() {
        return {
            categories: [],
            selectedCategoryId: null,
            products: [],
            bg,
            card,
            currentPage: 1,
            pageSize: 9,
            totalProducts: 0
        };
    },
    watch: {
        '$route.query.category': {
            immediate: true,
            handler(newCategory) {
                this.selectedCategoryId = newCategory || null;
                this.fetchProducts();
            }
        }
    },
    methods: {
        async fetchProductCategories() {
            try {
                this.categories = await getAllProductCategories();
            } catch (error) {
                console.error('Error fetching product categories:', error);
            }
        },

        async fetchProducts(categoryId = this.selectedCategoryId, page = this.currentPage) {
            try {
                const offset = (page - 1) * this.pageSize;
                const { products, count } = await getProductsByCategory(categoryId, this.pageSize, offset);
                this.products = products;
                console.log(products);
                console.log(count);
                this.totalProducts = count;
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        },
        changePage(page) {
            this.currentPage = page;
            this.fetchProducts(this.selectedCategoryId, page);
        },
        selectCategory(categoryId) {
            console.log(categoryId);
            this.selectedCategoryId = categoryId; // Set the selected category
            this.fetchProducts(categoryId); // Fetch products for this category
        }
    },
    computed: {
        totalPages() {
            return Math.ceil(this.totalProducts / this.pageSize);
        },
        paginationItems() {
            const pages = [];
            const total = this.totalPages;
            const current = this.currentPage;

            if (total <= 5) {
                // If total pages is 5 or less, show all
                for (let i = 1; i <= total; i++) {
                    pages.push(i);
                }
                return pages;
            }

            pages.push(1); // Always show first page

            let middlePages = [];

            if (current <= 3) {
                middlePages = [2, 3, 4];
            } else if (current >= total - 2) {
                middlePages = [total - 3, total - 2, total - 1];
            } else {
                middlePages = [current - 1, current, current + 1];
            }

            if (middlePages[0] > 2) {
                pages.push("...");
            }

            pages.push(...middlePages);

            if (middlePages[2] < total - 1) {
                pages.push("...");
            }

            pages.push(total); // Always show last page

            return pages;
        }

    },

    mounted() {
        Aos.init();
        this.fetchProductCategories();
    }
};
</script>


<template>
    <div>
        <NavbarOne />

        <div class="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70"
             :style="{backgroundImage:'url('+ bg + ')'}">
            <div class="text-center w-full">
                <h2 class="text-white text-8 md:text-[40px] font-normal leading-none text-center">Shop</h2>
                <ul class="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4">
                    <li>
                        <router-link to="/">Home</router-link>
                    </li>
                    <li>/</li>
                    <li class="text-primary">Shop</li>
                </ul>
            </div>
        </div>

        <div class="s-py-100">
            <div class="container">
                <div
                    class="max-w-[1477px] mx-auto flex items-start justify-between gap-8 md:gap-10 flex-col lg:flex-row">

                    <!-- Sidebar with categories -->
                    <div class="grid gap-[15px] lg:max-w-[300px] w-full sm:grid-cols-2 lg:grid-cols-1"
                         data-aos="fade-up">
                        <div class="bg-[#F8F8F9] dark:bg-dark-secondary p-5 sm:p-[30px]">
                            <h4 class="font-medium leading-none text-xl sm:text-2xl mb-5 sm:mb-6">Categories</h4>
                            <div class="grid gap-5">
                                <label
                                    v-for="category in categories"
                                    :key="category.id"
                                    @click="selectCategory(category.id)"
                                    class="categoryies-iteem flex items-center gap-[10px] cursor-pointer"
                                >
                                    <input class="appearance-none hidden" type="checkbox">
                                    <span
                                        class="w-4 h-4 rounded-[5px] border border-title dark:border-white flex items-center justify-center">
                                        <svg v-if="selectedCategoryId === category.id" width="9" height="8"
                                             viewBox="0 0 9 8" fill="none">
                                            <path
                                                d="M3.05203 7.04122C2.87283 7.04122 2.69433 6.97322 2.5562 6.83864L0.532492 4.8553C0.253409 4.58189 0.249159 4.13351 0.522576 3.85372C0.796701 3.57393 1.24578 3.57039 1.52416 3.84309L3.05203 5.34122L7.61512 0.868804C7.89491 0.595387 8.34328 0.59822 8.6167 0.87872C8.89082 1.1578 8.88657 1.60689 8.60749 1.8803L3.54787 6.83864C3.40974 6.97322 3.23124 7.04122 3.05203 7.04122Z"
                                                fill="#BB976D" />
                                        </svg>
                                    </span>
                                    <span class="text-title dark:text-white block sm:leading-none">
                                        {{ category.name }}
                                    </span>
                                </label>
                            </div>
                        </div>
                        <img class="w-full" :src="card" alt="shop-card">

                    </div>
                    <!-- Products Grid -->
                    <div class="lg:max-w-[1100px] w-full" data-aos="fade-up" data-aos-delay="200">
                        <!--paginations-->
                        <div class="mt-10 md:mt-12 flex items-center justify-center gap-[10px] flex-wrap">
                            <!-- Prev Arrow -->
                            <button
                                @click="changePage(currentPage - 1)"
                                :disabled="currentPage === 1"
                                class="text-title dark:text-white text-xl"
                            >
                                &lt;
                            </button>

                            <!-- Page Numbers with dots -->
                            <button
                                v-for="item in paginationItems"
                                :key="item + '-btn'"
                                @click="typeof item === 'number' && changePage(item)"
                                :disabled="item === '...'"
                                :class="[
      'w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center leading-none text-base sm:text-lg font-medium transition-all duration-300',
      currentPage === item
        ? 'bg-title text-white dark:bg-white dark:text-title'
        : 'bg-title bg-opacity-5 text-title hover:bg-opacity-100 hover:text-white dark:bg-white dark:bg-opacity-5 dark:text-white dark:hover:bg-opacity-100 dark:hover:text-title'
    ]"
                            >
                                {{ item }}
                            </button>

                            <!-- Next Arrow -->
                            <button
                                @click="changePage(currentPage + 1)"
                                :disabled="currentPage >= totalPages"
                                class="text-title dark:text-white text-xl"
                            >
                                &gt;
                            </button>
                        </div>
                        <LayoutOne
                            :classList="'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'"
                            :categoryId="selectedCategoryId"
                            :products="products"
                        />
                        <!--paginations-->
                        <div class="mt-10 md:mt-12 flex items-center justify-center gap-[10px] flex-wrap">
                            <!-- Prev Arrow -->
                            <button
                                @click="changePage(currentPage - 1)"
                                :disabled="currentPage === 1"
                                class="text-title dark:text-white text-xl"
                            >
                                &lt;
                            </button>

                            <!-- Page Numbers with dots -->
                            <button
                                v-for="item in paginationItems"
                                :key="item + '-btn'"
                                @click="typeof item === 'number' && changePage(item)"
                                :disabled="item === '...'"
                                :class="[
      'w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center leading-none text-base sm:text-lg font-medium transition-all duration-300',
      currentPage === item
        ? 'bg-title text-white dark:bg-white dark:text-title'
        : 'bg-title bg-opacity-5 text-title hover:bg-opacity-100 hover:text-white dark:bg-white dark:bg-opacity-5 dark:text-white dark:hover:bg-opacity-100 dark:hover:text-title'
    ]"
                            >
                                {{ item }}
                            </button>

                            <!-- Next Arrow -->
                            <button
                                @click="changePage(currentPage + 1)"
                                :disabled="currentPage >= totalPages"
                                class="text-title dark:text-white text-xl"
                            >
                                &gt;
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <FooterOne />
        <ScrollToTop />
    </div>
</template>
