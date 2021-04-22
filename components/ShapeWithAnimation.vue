<template>
    <div class="shape scene" :class="addClassName">
        <span :data-depth="dataDepth">
            <img :src="imgSrc" alt="shape image" />
        </span>
    </div>
</template>

<script>
import Parallax from "parallax-js";

export default {
    head() {
        return {
            title: "Shape-With-Animation"
        };
    },
    props: ["addClassName", "imgSrc", "dataDepth"],
    mounted() {
        var scene = document.querySelectorAll(".scene");
        if (scene) {
            scene.forEach((el, i) => {
                new Parallax(el);
            });
        }
    }
};
</script>
