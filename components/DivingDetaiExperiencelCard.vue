<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-6 col-12">
                <div class="work-left work-details">
                    <div class="portfolio-main-info">
                        <h2 class="title">{{ title }} 課程</h2>
                        <div class="work-details-list mt-40">
                            <div class="details-list">
                                <label>課程時數</label>
                                <span>{{ day }}</span>
                            </div>
                            <div class="details-list">
                                <label>課程內容</label>
                                <span
                                    v-for="(content, index) in contents"
                                    :key="index"
                                    >{{ index + 1 }}. {{ content }}</span
                                >
                            </div>
                            <div class="details-list">
                                <label>課程制度 (小班制)</label>
                                <span>兩位即可成團</span>
                                <span>最多四位學生</span>
                            </div>
                            <div class="details-list">
                                <label>課程費用包含</label>
                                <span
                                    v-for="(item, index) in items"
                                    :key="index"
                                    >{{ index + 1 }}. {{ item }}</span
                                >
                            </div>
                            <div class="details-list">
                                <label>課程費用</label>
                                <span class="price">{{ price }} TWD</span>
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
                                                課程參加資格 :
                                            </b-button>
                                        </b-card-header>
                                        <b-collapse
                                            id="accordion-1"
                                            visible
                                            accordion="my-accordion"
                                        >
                                            <b-card-body>
                                                <b-card-text>
                                                    1.
                                                    需年滿18歲(16~17歲者需家長陪同)
                                                    <br />
                                                    2.
                                                    無特殊疾病(若有氣胸,氣喘,心臟疾病,神經系統,心血管系統等疾病，需要醫生檢查後確認可以進行自由潛水活動並簽署健康申明書使得參加)
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
                                                課程須知 :
                                            </b-button>
                                        </b-card-header>
                                        <b-collapse
                                            id="accordion-2"
                                            visible
                                            accordion="my-accordion"
                                        >
                                            <b-card-body>
                                                <b-card-text>
                                                    ※ 如有近視者請自備隱形眼鏡。
                                                    <br />
                                                    ※
                                                    若當日氣候及浪況不適合下水需改期會以LINE通知。
                                                    <br />
                                                    ※
                                                    課程進行中遇天候不佳等突發狀況，安全起見教練有權停止上課擇日補課不得退款。
                                                    <br />
                                                    ※
                                                    課程前4-10天內因個人因素取消需負擔一成行政處理費用,課程前3天取消恕不退款
                                                    (名額可轉讓)。
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
                                                報名須知 :
                                            </b-button>
                                        </b-card-header>
                                        <b-collapse
                                            id="accordion-3"
                                            visible
                                            accordion="my-accordion"
                                        >
                                            <b-card-body>
                                                <b-card-text>
                                                    ※ 報名課程時請告知有參加過體驗
                                                </b-card-text>
                                            </b-card-body>
                                        </b-collapse>
                                    </b-card>
                                </div>
                                <DivingApply :url="url" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <DivingGallery />
    </div>
</template>

<script>
import DivingApply from "@/components/DivingApply";
import DivingGallery from "@/components/DivingGallery";

export default {
    head() {
        return {
            title: "Diving-Detail-Card",
        };
    },
    props: ["title", "text", "day", "price", "contents", "items", "url"],
    components: {
        DivingApply,
        DivingGallery,
    },
};
</script>

<style scoped>
.price {
    font-weight: 900 !important;
    color: rgb(228, 54, 54) !important;
}
</style>
