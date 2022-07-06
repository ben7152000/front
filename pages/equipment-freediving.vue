<template>
    <div class="main-container">
        <TheHeader />
        <OffCanvasMobileMenu />
        <Breadcrumb
            :items="items"
            title="歡 迎 來 到 裝 備 租 借 中 心"
            backgroundUrl="/images/banner-2.jpg"
        />
        <EquipmentDetail :equipments="equipments || freedivings" />
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
                "http://localhost:8081/api/freediving"
            );
            return { equipments: data.freedivings };
        } catch (e) {
            console.log(e);
        }
    },
    head() {
        return {
            title: "Equipment-Freediving",
            meta: [
                {
                    name: "description",
                    content:
                        "新北市,台北,北海岸,龍洞,和美國小,東北角,龍洞自由潛水,自由潛水,自由潛水課程,自由潛水教學,自由潛水體驗,小班制教學,AIDA1,AIDA2,AIDA3",
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
                    text: "自潛裝備",
                    active: true,
                },
            ],
            freedivings: [
                {
                    id: 1,
                    title: "自潛面鏡(含呼吸管)",
                    price: "100",
                    image: "/images/img/自由潛水面鏡呼吸管 $100.png",
                },
                {
                    id: 2,
                    title: "自潛呼吸管",
                    price: "40",
                    image: "/images/img/自由潛水呼吸管 $40.png",
                },
                {
                    id: 3,
                    title: "中蛙鞋",
                    price: "180",
                    image: "/images/img/中蛙鞋 $180.png",
                },
                {
                    id: 4,
                    title: "長蛙鞋",
                    price: "210",
                    image: "/images/img/長蛙鞋 $210.png",
                },
                {
                    id: 5,
                    title: "自潛防寒衣",
                    price: "300",
                    image: "/images/img/自潛防寒衣 $300.png",
                },
                {
                    id: 6,
                    title: "安全繫繩",
                    price: "100",
                    image: "/images/img/安全繫繩 $100.png",
                },
                {
                    id: 7,
                    title: "浮球一組(含導繩及底鉛)",
                    price: "300",
                    image: "/images/img/浮球 (含底鉛.導繩) $300.jpg",
                },
                {
                    id: 8,
                    title: "導繩",
                    price: "80",
                    image: "/images/img/縣.png",
                },
                {
                    id: 9,
                    title: "底鉛",
                    price: "70",
                    image: "/images/img/底鉛 $70.png",
                },
                {
                    id: 10,
                    title: "鉛帶",
                    price: "60",
                    image: "/images/img/鉛帶.png",
                },
                {
                    id: 11,
                    title: "鉛塊",
                    price: "20",
                    image: "/images/img/鉛塊.png",
                },
            ],
        };
    },
};
</script>
