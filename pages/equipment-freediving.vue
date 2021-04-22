<template>
    <div class="main-container">
        <TheHeader />
        <OffCanvasMobileMenu />
        <Breadcrumb
            :items="items"
            title="We are an agency located in New York"
            backgroundUrl="https://picsum.photos/1920/540?random=7"
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
            title: "Equipment-Freediving"
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
                    text: "自潛裝備",
                    active: true
                }
            ],
            equipments: [
                {
                    title: "自潛面鏡(含呼吸管)",
                    url: "https://picsum.photos/250/250?random=1",
                    price: "100"
                },
                {
                    title: "自潛呼吸管",
                    url: "https://picsum.photos/250/250?random=2",
                    price: "40"
                },
                {
                    title: "中蛙鞋",
                    url: "https://picsum.photos/250/250?random=3",
                    price: "180"
                },
                {
                    title: "長蛙鞋",
                    url: "https://picsum.photos/250/250?random=4",
                    price: "210"
                },
                {
                    title: "自潛防寒衣",
                    url: "https://picsum.photos/250/250?random=5",
                    price: "300"
                },
                {
                    title: "安全繫鎖",
                    url: "https://picsum.photos/250/250?random=6",
                    price: "100"
                },
                {
                    title: "浮球一組(含導繩及底鉛)",
                    url: "https://picsum.photos/250/250?random=7",
                    price: "300"
                },
                {
                    title: "導繩",
                    url: "https://picsum.photos/250/250?random=8",
                    price: "80"
                },
                {
                    title: "底鉛",
                    url: "https://picsum.photos/250/250?random=9",
                    price: "70"
                },
                {
                    title: "鉛帶",
                    url: "https://picsum.photos/250/250?random=10",
                    price: "60"
                },
                {
                    title: "鉛塊",
                    url: "https://picsum.photos/250/250?random=11",
                    price: "20"
                }
            ]
        };
    }
};
</script>
