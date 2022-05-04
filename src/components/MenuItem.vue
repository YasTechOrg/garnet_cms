<script setup lang="ts">
defineProps<{ name: string, icon: string, active: boolean }>()


</script>

<template>
  <div class="menuItem d-flex align-items-center justify-content-center flex-column" :data-active="active">
    <i class="fi" :class="icon"></i>
    <p class="mb-0">{{ name }}</p>
  </div>
</template>

<style scoped lang="sass">
$active: white
$none_active: #b1b1b1

.menuItem
  cursor: pointer

  > p
    color: $none_active
    transition: 0.2s

  > i
    color: $none_active
    transition: 0.2s
    font-size: 25px
    height: 30px

  @media screen and (max-width: 480px)

    > p
      font-size: 14px

    > i
      font-size: 20px
      height: 25px

  @media screen and (max-width: 360px)

    > p
      font-size: 12px

    > i
      font-size: 15px
      height: 20px

.menuItem[data-active=true],
.menuItem:hover

  > p
    color: $active!important

  > i
    color: $active!important
</style>