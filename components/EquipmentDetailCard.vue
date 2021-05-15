<template>
  <div class="blog">
    <div class="thumbnail">
      <div class="image">
        <b-img :src="image"
               fluid
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

.thumbnail {
    display: flex;
    justify-content: center;
    align-items: center;
}

.image {
    max-width: 270px;
    height: 270px;
}

img {
    width: 100%;
    height: 100%;
}
</style>
