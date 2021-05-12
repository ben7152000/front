<template>
  <div class="blog">
    <div class="thumbnail">
      <div class="image">
        <img :src="image"
             :alt="title" />
      </div>
    </div>
    <div class="info">
      <h3 class="title text-center">{{ title }}</h3>
      <p class="price text-center">{{ price }} TWD</p>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Equipment-Detail-Card"
    };
  },
  props: ["title", "image", "price"],
};
</script>

<style scoped>
.price {
  font-weight: 900;
  color: rgb(228, 54, 54);
}

image {
  width: 370px;
  height: 270px;
}

img {
  width: 370px;
  height: 270px;
  /* vertical-align: center; */
  overflow: hidden;
}
</style>
