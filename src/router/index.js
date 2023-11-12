import TheBody from '../components/layout/components/TheBody.vue'
import TheAddNewProduct from '../components/layout/components/TheAddNewProduct.vue'
import TheDetail from '../components/layout/components/TheDetail.vue'
import TheCart from '../components/layout/components/TheCart.vue'
import TheCartDetails from '../components/layout/components/TheCartDetails.vue'
// import TheCartPayment from '../components/layout/components/TheCartPayment.vue'
import TheCartReview from '../components/layout/components/TheCartReview.vue'

export default [
    {path: "/", component: TheBody},
    {path: "/add-new-product", component: TheAddNewProduct},
    {path: "/details/:id", name: "details", component: TheDetail},
    {path: "/cart", name: "cart", component: TheCart},
    {path: "/cart-details", name: "cartDetails", component: TheCartDetails},
    // {path: "/cart-payment", name: "cartPayment", component: TheCartPayment},
    {path: "/orders-review", name: "orderReview", component: TheCartReview},
]