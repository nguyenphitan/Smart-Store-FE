import TheBody from '../components/layout/components/TheBody.vue'
import TheAddNewProduct from '../components/layout/components/TheAddNewProduct.vue'
import TheDetail from '../components/layout/components/TheDetail.vue'
import TheCart from '../components/layout/components/TheCart.vue'
import TheCartDetails from '../components/layout/components/TheCartDetails.vue'
// import TheCartPayment from '../components/layout/components/TheCartPayment.vue'
import TheCartReview from '../components/layout/components/TheCartReview.vue'
import TheFlashDeals from '../components/layout/components/TheFlashDeals.vue'
import TheProfile from '../components/layout/components/TheProfile.vue'
import BaseOrderDetail from '../components/base/BaseOrderDetail.vue'


// Admin:
import TheAdminHome from '../components/layout/admin/TheAdminHome.vue'
import TheStatistics from '../components/layout/admin/TheStatistics.vue'


export default [
    {path: "/", component: TheBody},
    {path: "/add-new-product", component: TheAddNewProduct},
    {path: "/details/:id", name: "details", component: TheDetail},
    {path: "/cart", name: "cart", component: TheCart},
    {path: "/cart-details", name: "cartDetails", component: TheCartDetails},
    // {path: "/cart-payment", name: "cartPayment", component: TheCartPayment},
    {path: "/orders-review", name: "orderReview", component: TheCartReview},
    {path: "/flash-deals", name: "flashDeals", component: TheFlashDeals},
    {path: "/profile", name: "profile", component: TheProfile},
    {path: "/order-details/:orderId", name: "orderDetails", component: BaseOrderDetail},

    // Amdin:
    {path: "/admin", name: "adminHone", component: TheAdminHome},
    {path: "/admin/statistics", name: "statistics", component: TheStatistics},

]