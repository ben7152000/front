import Vue from 'vue'
import VueFbCustomerChat from 'vue-fb-customer-chat'

Vue.use(VueFbCustomerChat, {
  page_id: "342245025811970",
  theme_color: '#020F23',
  locale: 'zh_TW',
  logged_out_greeting:"嗨~有問題可以私訊我喔！", //登入狀態歡迎詞
  logged_in_greeting:"您好，很高興為您服務" //登出(未登入)狀態歡迎詞
})
