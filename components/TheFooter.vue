<template>
  <div class="footer-section"
       :style="{ backgroundColor: '#030e22' }">
    <div class="container">
      <div class="row section-padding pt-0 mtn-30">
        <div class="col-md-4 col-sm-6 col-12 mt-30">
          <div class="footer-widget">
            <div class="footer-logo">
              <a href="/">
                <img src="/images/logo.png"
                     alt="Logo"
                     style="width:120px; height: 70px" />
              </a>
            </div>
            <SocialMedia />
          </div>
        </div>
        <FooterNavigation v-for="(item, index) in items"
                          :key="index"
                          :items="item.item"
                          :title="item.title" />
        <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mt-30">
          <div class="footer-widget">
            <h4 class="footer-widget-title">裝備租借</h4>
            <div class="footer-widget-content">
              <ul>
                <li>
                  <a href="/equipment-snorkeling">浮潛裝備</a>
                </li>
                <li>
                  <a href="/equipment-freediving">自潛裝備</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </div>
  </div>
</template>

<script>
import SocialMedia from "@/components/SocialMedia";
import FooterNavigation from "@/components/FooterNavigation";
import Copyright from "@/components/Copyright";

export default {
  head() {
    return {
      title: "The-Footer"
    };
  },
  components: {
    SocialMedia,
    FooterNavigation,
    Copyright
  },
  data() {
    return {
      items: [
        {
          title: "課程介紹",
          item: [
            {
              title: "AIDA 體驗",
              to: "/course-aida-experience"
            },
            {
              title: "AIDA 1 課程",
              to: "/course-aida-1"
            },
            {
              title: "AIDA 2 課程",
              to: "/course-aida-2"
            },
            {
              title: "AIDA 3 課程",
              to: "/course-aida-3"
            }
          ]
        }
      ]
    };
  }
};
</script>
