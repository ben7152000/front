<template>
    <nav class="site-main-menu">
        <ul>
            <li>
                <n-link to="/about">關於我們</n-link>
            </li>
            <li class="has-children">
                <n-link to="/course">課程介紹</n-link>
                <ul class="sub-menu">
                    <li>
                        <n-link to="/course-aida-1">AIDA 1 課程</n-link>
                    </li>
                    <li>
                        <n-link to="/course-aida-2">AIDA 2 課程</n-link>
                    </li>
                    <li>
                        <n-link to="/course-aida-3">AIDA 3 課程</n-link>
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
                <n-link to="/contact-us">聯絡我們</n-link>
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
