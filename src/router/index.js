import TheBody from '../components/layout/components/TheBody.vue'
import TheAddNewProduct from '../components/layout/components/TheAddNewProduct.vue'
import TheDetail from '../components/layout/components/TheDetail.vue'

export default [
    {path: "/", component: TheBody},
    {path: "/add-new-product", component: TheAddNewProduct},
    {path: "/details/:id", name: "details", component: TheDetail}
]