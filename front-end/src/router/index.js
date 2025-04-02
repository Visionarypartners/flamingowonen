import { createRouter, createWebHistory } from 'vue-router'
import IndexOne from '@/views/index/index-one.vue'
import IndexTwo from '@/views/index/index-two.vue'
import IndexThree from '@/views/index/index-three.vue'
import IndexFour from '@/views/index/index-four.vue'
import IndexFive from '@/views/index/index-five.vue'
import IndexSix from '@/views/index/index-six.vue'
import AboutUs from '@/views/inner-pages/about-us.vue'
import PricingPage from '@/views/inner-pages/pricing-page.vue'
import TeamPage from '@/views/inner-pages/team-page.vue'
import OurClients from '@/views/inner-pages/our-clients.vue'
import FaqPage from '@/views/inner-pages/faq-page.vue'
import TermsAndConditions from '@/views/inner-pages/terms-and-conditions.vue'
import PortfolioV1 from '@/views/portfolio/portfolio-v1.vue'
import PortfolioV2 from '@/views/portfolio/portfolio-v2.vue'
import PortfolioV3 from '@/views/portfolio/portfolio-v3.vue'
import PortfolioDetailsV1 from '@/views/portfolio/portfolio-details-v1.vue'
import PortfolioDetailsV2 from '@/views/portfolio/portfolio-details-v2.vue'
import ErrorPage from '@/views/special/error-page.vue'
import MyProfile from '@/views/profile/my-profile.vue'
import MyAccount from '@/views/profile/my-account.vue'
import EditAccount from '@/views/profile/edit-account.vue'
import OrderHistory from '@/views/profile/order-history.vue'
import WishlistPage from '@/views/profile/wishlist-page.vue'
import LoginPage from '@/views/auth/login-page.vue'
import RegisterPage from '@/views/auth/register-page.vue'
import ForgerPassword from '@/views/auth/forger-password.vue'
import ComingSoon from '@/views/special/coming-soon.vue'
import ThankYou from '@/views/special/thank-you.vue'
import ShippingMethod from '@/views/shop/shipping-method.vue'
import PaymentMethod from '@/views/shop/payment-method.vue'
import InvoicePage from '@/views/shop/invoice-page.vue'
import PaymentConfirmation from '@/views/shop/payment-confirmation.vue'
import PaymentSuccess from '@/views/shop/payment-success.vue'
import PaymentFailure from '@/views/shop/payment-failure.vue'
import ShopV1 from '@/views/shop/shop-v1.vue'
import ShopV2 from '@/views/shop/shop-v2.vue'
import ShopV3 from '@/views/shop/shop-v3.vue'
import ShopV4 from '@/views/shop/shop-v4.vue'
import ProductDetails from '@/views/shop/product-details.vue'
import ShopCart from '@/views/shop/shop-cart.vue'
import CheckoutPage from '@/views/shop/checkout-page.vue'
import BlogV1 from '@/views/blog/blog-v1.vue'
import BlogV2 from '@/views/blog/blog-v2.vue'
import BlogDetailsV1 from '@/views/blog/blog-details-v1.vue'
import BlogDetailsV2 from '@/views/blog/blog-details-v2.vue'
import BlogDetailsV3 from '@/views/blog/blog-details-v3.vue'
import BlogTag from '@/views/blog/blog-tag.vue'
import ContactPage from '@/views/inner-pages/contact-page.vue'
import ProductCategory from '@/views/shop/product-category.vue'

const routes = [
  {path: '/',component: IndexOne},
  {path: '/index-v2',component: IndexTwo},
  {path: '/index-v3',component: IndexThree},
  {path: '/index-v4',component: IndexFour},
  {path: '/index-v5',component: IndexFive},
  {path: '/index-v6',component: IndexSix},
  {path: '/about',component: AboutUs},
  {path: '/pricing',component: PricingPage},
  {path: '/team',component: TeamPage},
  {path: '/our-clients',component: OurClients},
  {path: '/faq',component: FaqPage},
  {path: '/terms-and-conditions',component: TermsAndConditions},
  {path: '/portfolio-v1',component: PortfolioV1},
  {path: '/portfolio-v2',component: PortfolioV2},
  {path: '/portfolio-v3',component: PortfolioV3},
  {path: '/portfolio-details-v1',component: PortfolioDetailsV1},
  {path: '/portfolio-details-v1/:id',component: PortfolioDetailsV1},
  {path: '/portfolio-details-v2',component: PortfolioDetailsV2},
  {path: '/portfolio-details-v2/:id',component: PortfolioDetailsV2},
  {path: '/error',component: ErrorPage},
  {path: '/my-profile',component: MyProfile},
  {path: '/my-account',component: MyAccount},
  {path: '/edit-account',component: EditAccount},
  {path: '/order-history',component: OrderHistory},
  {path: '/wishlist',component: WishlistPage},
  {path: '/login',component:LoginPage},
  {path: '/register',component:RegisterPage},
  {path: '/forger-password',component:ForgerPassword},
  {path: '/coming-soon',component:ComingSoon},
  {path: '/thank-you',component:ThankYou},
  {path: '/shipping-method',component:ShippingMethod},
  {path: '/payment-method',component:PaymentMethod},
  {path: '/invoice',component:InvoicePage},
  {path: '/payment-confirmation',component:PaymentConfirmation},
  {path: '/payment-success',component:PaymentSuccess},
  {path: '/payment-failure',component:PaymentFailure},
  {path: '/shop-v1',component:ShopV1},
  {path: '/shop-v2',component:ShopV2},
  {path: '/shop-v3',component:ShopV3},
  {path: '/shop-v4',component:ShopV4},
  {path: '/product-details',component:ProductDetails},
  {path: '/product-details/:id',component:ProductDetails},
  {path: '/cart',component:ShopCart},
  {path: '/checkout',component:CheckoutPage},
  {path: '/blog-v1',component:BlogV1},
  {path: '/blog-v2',component:BlogV2},
  {path: '/blog-details-v1',component:BlogDetailsV1},
  {path: '/blog-details-v1/:id',component:BlogDetailsV1},
  {path: '/blog-details-v2',component:BlogDetailsV2},
  {path: '/blog-details-v2/:id',component:BlogDetailsV2},
  {path: '/blog-details-v3',component:BlogDetailsV3},
  {path: '/blog-details-v3/:id',component:BlogDetailsV3},
  {path: '/blog-tag',component:BlogTag},
  {path: '/contact',component:ContactPage},
  {path: '/product-category',component:ProductCategory},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
