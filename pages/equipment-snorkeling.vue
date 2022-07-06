<template>
    <div class="main-container">
        <TheHeader />
        <OffCanvasMobileMenu />
        <Breadcrumb
            :items="items"
            title="歡 迎 來 到 裝 備 租 借 中 心"
            backgroundUrl="/images/banner-2.jpg"
        />
        <EquipmentDetail :equipments="equipments || snorkelings" />
        <TheFooter />
    </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import OffCanvasMobileMenu from "@/components/OffCanvasMobileMenu";
import Breadcrumb from "@/components/Breadcrumb";
import EquipmentDetail from "@/components/EquipmentDetail";
import TheFooter from "@/components/TheFooter";

export default {
    async asyncData(context) {
        try {
            const { data } = await context.$axios.get(
                "http://localhost:8081/api/snorkeling"
            );
            return { equipments: data.snorkelings };
        } catch (e) {
            console.log(e);
        }
    },
    head() {
        return {
            title: "Equipment-Snorkeling",
            meta: [
                {
                    name: "description",
                    content:
                        "新北市,台北,北海岸,龍洞,和美國小,東北角,龍洞自由潛水,自由潛水,自由潛水課程,自由潛水教學,浮潛裝備租借,裝備租借,浮潛體驗,浮潛",
                },
            ],
        };
    },
    components: {
        TheHeader,
        OffCanvasMobileMenu,
        Breadcrumb,
        EquipmentDetail,
        TheFooter,
    },
    data() {
        return {
            items: [
                {
                    text: "首頁",
                    to: "/",
                },
                {
                    text: "裝備租借",
                    to: "/equipment",
                },
                {
                    text: "浮潛裝備",
                    active: true,
                },
            ],
            snorkelings: [
                {
                    id: 1,
                    title: "一般蛙鏡",
                    price: "70",
                    image: "/images/img/一般蛙鏡 $70 有度蛙鏡 $100.png",
                },
                {
                    id: 2,
                    title: "有度蛙鏡",
                    price: "100",
                    image: "/images/img/一般蛙鏡 $70 有度蛙鏡 $100.png",
                },
                {
                    id: 3,
                    title: "泳鏡",
                    price: "50",
                    image: "/images/img/泳鏡 $50.jpg",
                },
                {
                    id: 5,
                    title: "浮標",
                    price: "60",
                    image: "/images/img/浮標 $60.gif",
                },
                {
                    id: 6,
                    title: "浮板",
                    price: "60",
                    image: "/images/img/浮板 $60.gif",
                },
                {
                    id: 7,
                    title: "救生圈",
                    price: "60",
                    image: "/images/img/救生圈 $60.jpg",
                },
                {
                    id: 8,
                    title: "防滑鞋",
                    price: "50",
                    image: "/images/img/防滑鞋 $50.png",
                },
                {
                    id: 9,
                    title: "套腳蛙鞋",
                    price: "100",
                    image: "/images/img/套腳蛙鞋 $100.gif",
                },
                {
                    id: 10,
                    title: "套鞋蛙鞋",
                    price: "100",
                    image: "/images/img/套鞋蛙鞋 $100.jpg",
                },
                {
                    id: 11,
                    title: "水母上衣",
                    price: "100",
                    image: "/images/img/水母上衣 $100.png",
                },
                {
                    id: 12,
                    title: "水母褲",
                    price: "100",
                    image: "/images/img/水母褲 $100.png",
                },
                {
                    id: 13,
                    title: "防寒上衣",
                    price: "130",
                    image: "/images/img/防寒上衣 $130.png",
                },
                {
                    id: 14,
                    title: "防寒褲",
                    price: "120",
                    image: "/images/img/防寒褲 $120.png",
                },
                {
                    id: 15,
                    title: "連身防寒衣",
                    price: "150",
                    image: "/images/img/連身防寒衣 $150.png",
                },
                {
                    id: 16,
                    title: "水母上衣 防寒褲",
                    price: "200",
                    image: "/images/img/水母上衣防寒褲 $200.png",
                },
                {
                    id: 17,
                    title: "水母衣褲",
                    price: "160",
                    image: "/images/img/水母衣褲 $160.png",
                },
                {
                    id: 18,
                    title: "陽傘",
                    price: "大500 小300",
                    image: "/images/img/陽傘 大 $500 小$300.png",
                },
            ],
        };
    },
};
</script>
