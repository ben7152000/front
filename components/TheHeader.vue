<template>
  <div class="header-section header-transparent"
       :class="{ 'is-sticky': isSticky }">
    <div class="header-inner">
      <div class="container position-relative">
        <div class="row justify-content-between align-items-center">
          <div class="col-xl-2 col-auto order-0">
            <div class="header-logo">
              <a href="/">
                <img class="dark-logo"
                     src="/images/logo.png"
                     alt="Agency Logo"
                     style="width: 140px; height: 100px" />
                <img class="light-logo"
                     src="/images/logo.png"
                     alt="Agency Logo"
                     style="width: 140px; height: 100px" />
              </a>
            </div>
          </div>
          <div class="col-auto col-xl d-flex align-items-center justify-content-xl-end justify-content-end order-2 order-xl-1">
            <div class="menu-column-area d-none d-xl-block position-static">
              <Navigation />
            </div>
            <div class="header-mobile-menu-toggle d-xl-none ml-sm-2">
              <button class="toggle"
                      @click="
                                    mobiletoggleClass(
                                        'addClass',
                                        'show-mobile-menu'
                                    )
                                ">
                <i class="icon-top"></i>
                <i class="icon-middle"></i>
                <i class="icon-bottom"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  head() {
    return {
      title: "The-Header"
    };
  },
  components: {
    Navigation
  },
  data() {
    return {
      isSticky: false
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      let scrollPos = window.scrollY;
      if (scrollPos >= 200) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    });
  },

  methods: {
    mobiletoggleClass(addRemoveClass, className) {
      const el = document.querySelector("#offcanvas-menu");
      if (addRemoveClass === "addClass") {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }
  }
};
</script>
