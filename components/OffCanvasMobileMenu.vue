<template>
    <div class="popup-mobile-menu popup-mobile-visiable" id="offcanvas-menu">
        <div
            class="mobile-menu-overlay"
            @click="mobiletoggleClass('removeClass', 'show-mobile-menu')"
        ></div>
        <div class="inner custom-scrollbar">
            <div class="mobile-header">
                <div class="logo">
                    <a href="/">
                        <img
                            src="/images/logo.png"
                            alt="site logo"
                            style="width: 100px; height: 50px"
                        />
                    </a>
                </div>
                <button
                    class="mobile-close-btn"
                    @click="
                        mobiletoggleClass('removeClass', 'show-mobile-menu')
                    "
                ></button>
            </div>
            <div class="menu-content">
                <MobileNavigation />
            </div>
        </div>
    </div>
</template>

<script>
import MobileNavigation from "@/components/MobileNavigation";

export default {
    head() {
        return {
            title: "Off-Canvas-Mobile-Menu",
        };
    },
    components: {
        MobileNavigation,
    },
    methods: {
        mobiletoggleClass(addRemoveClass, className) {
            const el = document.querySelector("#offcanvas-menu");
            if (addRemoveClass === "addClass") {
                el.classList.add(className);
            } else {
                el.classList.remove(className);
            }
        },
    },
};
</script>
