<template>
    <div id="t-the-about-us">
        <div id="t-the-about-us-container">
            <!-- Banner -->
             <div class="t-us-banner">

             </div>
            <!-- End banner -->
            
            <!-- History -->
             <div class="t-us-history">
                <div class="t-us-1"></div>
                <div class="t-history-left">
                    <h4>LỊCH SỬ HÌNH THÀNH</h4>
                    <p>
                        Ra đời vào năm 1999, là một trong những thương hiệu tiên phong trong ngành nội thất, với nguồn cảm hứng văn hóa Việt và gu thẩm mỹ tinh tế. Qua 25 năm hoạt động, Nhà Xinh luôn chú trọng đổi mới để duy trì vị thế là thương hiệu nội thất hàng đầu tại Việt Nam. Không ngừng tìm tòi sáng tạo, kết hợp quy trình chọn lọc kỹ lưỡng, các bộ sưu tập do Nhà Xinh thiết kế sản xuất luôn mang nét tinh tế thẩm mỹ, hợp xu hướng cùng chất lượng bền vững. Nhà Xinh hiện nay đã có chuỗi 10 cửa hàng trên toàn quốc, với không gian rộng, giàu cảm hứng, trưng bày những thiết kế trang nhã, hợp thời trong sự thân thiện và gần gũi
                    </p>
                </div>
                
             </div>
             <!-- End History -->

             <!-- History -->
             <div class="t-us-history t-bg-gray">
                <div class="t-us-2"></div>
                <div class="t-history-left">
                    <h4>CHẤT LƯỢNG DỊCH VỤ</h4>
                    <p>
                        Chất lượng của nguyên vật liệu, phụ kiện và quy trình sản xuất đều được kiểm định và giám sát chặt chẽ bởi hệ thống quản lý chất lượng ISO 9001. Sản phẩm của Nhà Xinh được thiết kế theo định hướng công năng sử dụng, thẩm mỹ và chất lượng. Trong những năm gần đây, thương hiệu luôn hướng đến xu hướng thiết kế xanh nhằm đóng góp không chỉ một không gian sống tiện nghi mà còn là một môi trường sống trong lành cho người sử dụng và cộng đồng. Với nhiều cống hiến như vậy, Nhà Xinh vinh dự nhiều năm liền được trao tặng các danh hiệu “Hàng Việt Nam chất lượng cao”, “Trusted brand” và “Top 100 nhà cung cấp hàng đầu”.
                    </p>
                </div>
             </div>
             <!-- End History -->

             <!-- History -->
             <div class="t-us-history">
                <div class="t-us-3"></div>
                <div class="t-history-left">
                    <h4>NHÀ MÁY</h4>
                    <p>
                        Phần lớn sản phẩm của Furniture được sản xuất tại nhà máy của Tổng công ty AA (AA Đức Hòa, Long An và AA Tây Ninh) có diện tích 80.000m2, với trang thiết bị hiện đại nhất và theo tiêu chuẩn ISO 9001, chuyên sản xuất các sản phẩm nội thất chất lượng cao cho các khách sạn, nhà hàng 5 sao, dự án nội thất cao cấp và xuất khẩu.
                    </p>
                </div>
             </div>
             <!-- End History -->

             <!-- History -->
             <div class="t-us-history t-bg-gray">
                <div class="t-us-3"></div>
                <div class="t-history-left">
                    <h4>GIÁ TRỊ VÀ SỰ KHÁC BIỆT</h4>
                    <p>
                        Với mong muốn phát triển thương hiệu Việt bằng nội lực, Nhà Xinh đã chú trọng vào thiết kế và sản xuất nội thất trong nước. Danh mục sản phẩm của Nhà Xinh thường xuyên được đổi mới và cập nhật, liên tục cung cấp cho khách hàng các dòng sản phẩm theo xu hướng mới nhất. Do chính người Việt thiết kế và sản xuất, nội thất thương hiệu Nhà Xinh luôn phù hợp với cuộc sống Á Đông, đem đến sự tiện nghi hoàn hảo trong mọi không gian sống.
                    </p>
                </div>
             </div>
             <!-- End History -->

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#t-the-about-us {
    padding-top: 120px;
}

.t-bg-gray {
    background: #ebebeb;
}

.t-us-banner {
    background-image: url(../../../assets/imgs/us.jpg);
    width: 100%;
    height: 70vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.t-us-history {
    display: flex;
    padding: 30px 5%;
    justify-content: space-between;
    margin: 10px 0;
}

.t-history-left {
    width: 48%;
}

.t-us-1 {    
    width: 48%;
    height: 400px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background: url(../../../assets/imgs/history1.jpg);
}

.t-us-2 {    
    width: 48%;
    height: 400px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background: url(../../../assets/imgs/history1.jpg);
}

.t-us-3 {
    width: 48%;
    height: 400px;
    background-position: bottom;
    background-size: auto;
    background-repeat: no-repeat;
    background: url(../../../assets/imgs/us3.jpg);
}

</style>