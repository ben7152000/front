<template>
    <div class="main-container">
        <TheHeader />
        <OffCanvasMobileMenu />
        <Breadcrumb
            :items="items"
            title="We are an agency located in New York"
            backgroundUrl="https://picsum.photos/1920/540?random=8"
        />
        <EquipmentDetail :equipments="equipments" />
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
    head() {
        return {
            title: "Equipment-Snorkeling"
        };
    },
    components: {
        TheHeader,
        OffCanvasMobileMenu,
        Breadcrumb,
        EquipmentDetail,
        TheFooter
    },
    data() {
        return {
            items: [
                {
                    text: "首頁",
                    to: "/"
                },
                {
                    text: "裝備租借",
                    to: "/equipment"
                },
                {
                    text: "浮潛裝備",
                    active: true
                }
            ],
            equipments: [
                {
                    title: "一般蛙鏡",
                    url: "https://picsum.photos/250/250?random=1",
                    price: "70"
                },
                {
                    title: "有度蛙鏡",
                    url: "https://picsum.photos/250/250?random=2",
                    price: "100"
                },
                {
                    title: "泳鏡",
                    url: "https://picsum.photos/250/250?random=3",
                    price: "50"
                },
                {
                    title: "救生衣",
                    url: "https://picsum.photos/250/250?random=4",
                    price: "60"
                },
                {
                    title: "浮標",
                    url: "https://picsum.photos/250/250?random=5",
                    price: "60"
                },
                {
                    title: "浮板",
                    url: "https://picsum.photos/250/250?random=6",
                    price: "60"
                },
                {
                    title: "救生圈",
                    url: "https://picsum.photos/250/250?random=7",
                    price: "60"
                },
                {
                    title: "防滑鞋",
                    url: "https://picsum.photos/250/250?random=8",
                    price: "50"
                },
                {
                    title: "套腳蛙鞋",
                    url: "https://picsum.photos/250/250?random=9",
                    price: "100"
                },
                {
                    title: "套鞋蛙鞋",
                    url: "https://picsum.photos/250/250?random=10",
                    price: "100"
                },
                {
                    title: "水母上衣",
                    url: "https://picsum.photos/250/250?random=11",
                    price: "100"
                },
                {
                    title: "水母褲",
                    url: "https://picsum.photos/250/250?random=12",
                    price: "100"
                },
                {
                    title: "防寒上衣",
                    url: "https://picsum.photos/250/250?random=13",
                    price: "130"
                },
                {
                    title: "防寒褲",
                    url: "https://picsum.photos/250/250?random=14",
                    price: "120"
                },
                {
                    title: "連身防寒衣",
                    url: "https://picsum.photos/250/250?random=15",
                    price: "150"
                },
                {
                    title: "水母上衣 防寒褲",
                    url: "https://picsum.photos/250/250?random=16",
                    price: "200"
                },
                {
                    title: "水母衣褲",
                    url: "https://picsum.photos/250/250?random=17",
                    price: "160"
                },
                {
                    title: "陽傘",
                    url: "https://picsum.photos/250/250?random=18",
                    price: "大500 小300"
                },
            ]
        };
    }
};
</script>
