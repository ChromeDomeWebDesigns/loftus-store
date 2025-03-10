<template>
  <div class="after:border-primary/30" :class="alt ? 'after:border-white' : ''" />
</template>


<script setup>
  const { alt } = defineProps(['alt'])
</script>

<style lang="scss" scoped>
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(359deg);
    }
}

div {
  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
    content: "";
    width: 10rem;
    height: 10rem;
    border-width: 10px;
    border-radius: 100%;
    border-style: solid;
    display: block;
    border-top-color: transparent !important;
    animation: spin 1s infinite linear;
  }
}
</style>
