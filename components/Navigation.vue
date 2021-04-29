<template>
    <nav class="site-main-menu">
        <ul>
            <li>
                <a href="/about">關於我們</a>
            </li>
            <li class="has-children">
                <a href="/course">課程介紹</a>
                <ul class="sub-menu">
                    <li>
                        <a href="/course-aida-1">AIDA 1 課程</a>
                    </li>
                    <li>
                        <a href="/course-aida-2">AIDA 2 課程</a>
                    </li>
                    <li>
                        <a href="/course-aida-3">AIDA 3 課程</a>
                    </li>
                </ul>
            </li>
            <li class="has-children">
                <a href="/equipment">裝備租借</a>
                <ul class="sub-menu">
                    <li>
                        <a href="/equipment-snorkeling">浮潛裝備</a>
                    </li>
                    <li>
                        <a href="/equipment-freediving">自潛裝備</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="/contact-us">聯絡我們</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    head() {
        return {
            title: "Navigation"
        };
    }
};
</script>
