<script setup lang="ts">
</script>

<template>
  <span class="loader"></span>
</template>

<style scoped>
.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: relative;
  animation: rotate 1s linear infinite;
  display: block;
}
.loader::before , .loader::after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  inset: 0px;
  border-radius: 50%;
  border: 5px solid rgb(63, 94, 251);
  animation: prixClipFix 2s linear infinite ;
      background: linear-gradient(
      90deg,
      rgba(63, 94, 251, 1) 0%,
      rgba(252, 70, 107, 1) 100%
    );
}
.loader::after{
  transform: rotate3d(90, 90, 0, 180deg );
  border-color: rgb(63, 94, 251);
}

@keyframes rotate {
  0%   {transform: rotate(0deg)}
  100%   {transform: rotate(360deg)}
}

@keyframes prixClipFix {
  0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
  50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
  75%, 100%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
}
</style>
