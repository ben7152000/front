<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-6 col-12">
                <div class="work-left work-details">
                    <div class="portfolio-main-info">
                        <h2 class="title">浮潛活動 課程</h2>
                        <div class="work-details-list mt-40">
                            <div class="details-list">
                                <label>課程時數</label>
                                <span>3 小時</span>
                            </div>
                            <div class="details-list">
                                <label>報到時間</label>
                                <p>上午場：09:30</p>
                                <p>下午場：13:30</p>
                            </div>
                            <div class="details-list">
                                <label>課程費用</label>
                                <p>平日<span class="price">1100 TWD</span></p>
                                <p>假日<span class="price">1200 TWD</span></p>
                            </div>
                            <div class="details-list">
                                <label>課程費用包含</label>
                                <span>1. 保險費</span>
                                <span>2. 教練費</span>
                                <span>3. 基本裝備</span>
                                <span>4. 沖洗</span>
                            </div>
                            <div class="details-list">
                                <label>報名制度</label>
                                <span>四位即可成團</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-7 col-md-6 offset-lg-1 col-12">
                <div class="work-left work-details mt-30">
                    <div class="work-main-info">
                        <div class="work-content">
                            <div class="desc mt-40">
                                <div class="content mb-20">
                                    <p>
                                        完全不需要有壓力，帶著輕鬆的心情來玩吧！
                                    </p>
                                </div>
                                <div class="agency-accordion mb-20">
                                    <b-card no-body>
                                        <b-card-header
                                            header-tag="header"
                                            class="card-header"
                                        >
                                            <b-button
                                                block
                                                v-b-toggle.accordion-1
                                                class="
                                                    acc-btn
                                                    border-0
                                                    text-left
                                                "
                                            >
                                                活動行程 :
                                            </b-button>
                                        </b-card-header>
                                        <b-collapse
                                            id="accordion-1"
                                            visible
                                            accordion="my-accordion"
                                        >
                                            <b-card-body>
                                                <b-card-text>
                                                    龍洞岬裝備中心集合著裝
                                                    &rArr; 裝備使用教學 &rArr;
                                                    前往竹排礁溝(步行約15-20分鐘)
                                                    &rArr; 體驗浮潛 &rArr;
                                                    返回裝備店歸還裝備 &rArr;
                                                    換裝沖洗 &rArr; 開心返家
                                                    &diams; &diams; &diams;
                                                </b-card-text>
                                            </b-card-body>
                                        </b-collapse>
                                    </b-card>
                                </div>
                                <div class="agency-accordion mb-20">
                                    <b-card no-body>
                                        <b-card-header
                                            header-tag="header"
                                            class="card-header"
                                        >
                                            <b-button
                                                block
                                                v-b-toggle.accordion-2
                                                class="
                                                    acc-btn
                                                    border-0
                                                    text-left
                                                "
                                            >
                                                活動內容 :
                                            </b-button>
                                        </b-card-header>
                                        <b-collapse
                                            id="accordion-2"
                                            visible
                                            accordion="my-accordion"
                                        >
                                            <b-card-body>
                                                <b-card-text>
                                                    ※
                                                    出發前會有裝備教學及解說，到達目的地前需步行15-20分鐘。<br />
                                                    ※
                                                    活動期間可看到熱帶魚、藍雀鯛、河豚、海膽...等各式海洋生物。<br />
                                                    ※
                                                    依照個人意願可嘗試竹排礁溝特有的跳水活動！
                                                </b-card-text>
                                            </b-card-body>
                                        </b-collapse>
                                    </b-card>
                                </div>
                                <div class="agency-accordion mb-20">
                                    <b-card no-body>
                                        <b-card-header
                                            header-tag="header"
                                            class="card-header"
                                        >
                                            <b-button
                                                block
                                                v-b-toggle.accordion-3
                                                class="
                                                    acc-btn
                                                    border-0
                                                    text-left
                                                "
                                            >
                                                注意事項 :
                                            </b-button>
                                        </b-card-header>
                                        <b-collapse
                                            id="accordion-3"
                                            visible
                                            accordion="my-accordion"
                                        >
                                            <b-card-body>
                                                <b-card-text>
                                                    ※
                                                    前往活動場域需經過崎嶇的岩石路，心臟病、高血壓及行動不便者不宜參加。<br />
                                                    ※
                                                    參加活動需年滿10歲以上至65歲以下。<br />
                                                    ※
                                                    本中心備有置物櫃、沖洗室、投幣式吹風機，請自備換洗衣物。
                                                </b-card-text>
                                            </b-card-body>
                                        </b-collapse>
                                    </b-card>
                                </div>
                                <div class="work-btn">
                                    <a
                                        href="https://line.me/R/ti/p/%40843eetrw"
                                        class="
                                            btn btn-primary btn-hover-secondary
                                        "
                                        target="_blank"
                                    >
                                        前往報名
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DivingApply from "@/components/DivingApply";

export default {
    head() {
        return {
            title: "Snorkel-Detail-Card",
        };
    },
    props: ["title", "text", "day", "price", "contents", "items"],
    components: {
        DivingApply,
    },
};
</script>

<style scoped>
.price {
    font-weight: 900 !important;
    color: rgb(228, 54, 54) !important;
}
</style>
