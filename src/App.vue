<script setup lang="ts">
  import { ref } from "vue";
  import axios from "axios";

  import Loader from "./components/LoaderComponent/Loader.vue";

  const isLoaded = ref(true);
  const result = ref<any>({});

  axios({
    method: "GET",
    url: "https://dog.ceo/api/breeds/image/random",
  })
    .then((resp) => {
      isLoaded.value = false;
      result.value = resp.data;
    })
    .catch((err) => {
      console.log(err);
    });

  const reloadImg = () => {
    axios({
      method: "GET",
      url: "https://dog.ceo/api/breeds/image/random",
    })
      .then((resp) => {
        result.value = resp.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
</script>

<template>
  <Loader v-if="isLoaded" />
  <div class="wrapp-dogs" v-if="!isLoaded">
    <p>For You</p>
    <img class="dog-img" :src="result.message" alt="dog" />
    <button class="dog-btn" @click="reloadImg">Новая картинка</button>
  </div>
</template>

<style scoped>
  .wrapp-dogs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .dog-img {
    width: 80%;
    border-radius: 10px;
  }

  .dog-btn {
    cursor: pointer;
    border: none;
    background: rgb(63, 94, 251);
    background: linear-gradient(
      90deg,
      rgba(63, 94, 251, 1) 0%,
      rgba(252, 70, 107, 1) 100%
    );
    color: white;
    width: 80%;
    margin-top: 30px;
    padding: 10px 0;
    border-radius: 10px;
  }
</style>
