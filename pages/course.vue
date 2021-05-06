<template>
    <div class="main-container">
        <TheHeader />
        <OffCanvasMobileMenu />
        <Breadcrumb
            :items="items"
            title="龍 洞 岬 裝 備 中 心"
            backgroundUrl="/images/banner-2.jpg"
        />
        <FeatureCourse />
        <TheFooter />
    </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import OffCanvasMobileMenu from "@/components/OffCanvasMobileMenu";
import Breadcrumb from "@/components/Breadcrumb";
import FeatureCourse from "@/components/FeatureCourse";
import TheFooter from "@/components/TheFooter";

export default {
    head() {
        return {
            title: "Course",
            meta: [
              { 
                hid: '台北龍洞 自由潛水課程 裝備租借 和美國小 龍洞四號 體驗自由潛水 龍洞岬 AIDA證照 AIDA1 AIDA2 AIDA3 國際證照', 
                name: 'description', 
                content: '台北龍洞 自由潛水課程 裝備租借 和美國小 龍洞四號 體驗自由潛水 龍洞岬 AIDA證照 AIDA1 AIDA2 AIDA3 國際證照' 
              }
            ]
        };
    },
    components: {
        TheHeader,
        OffCanvasMobileMenu,
        Breadcrumb,
        FeatureCourse,
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
                    text: "課程介紹",
                    active: true
                }
            ]
        };
    }
};
</script>
