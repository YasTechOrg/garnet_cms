<script setup lang="ts">
import {loadFull} from "tsparticles"
import {defineAsyncComponent, ref, resolveComponent} from "#imports"
import {Ref} from "@vue/reactivity"
import {MenuItem} from "#components"

const particlesInit = ref(async (engine: any) => {
  await loadFull(engine)
})

const pages = ref([
  { name: "Skills", icon: "fi-rr-list-check" },
  { name: "Experiences", icon: "fi-rr-list" },
  { name: "Home", icon: "fi-rr-home" },
  { name: "Certificates", icon: "fi-rr-book-alt" },
  { name: "Contact", icon: "fi-rr-comment" },
])

const views: Ref  = ref([
  resolveComponent("pages/Skills"),
  resolveComponent("pages/Experiences"),
  resolveComponent("pages/Home"),
  resolveComponent("pages/Certificates"),
  resolveComponent("pages/Contact"),
])

const active_page = ref(2)

const menuItem = resolveComponent("MenuItem")
</script>

<template>
  <div id="main">
    <Particles
        id="particles"
        :options="{
      fpsLimit: 120,
      background: {
        color: '#232741'
      },
      particles: {
        color: { value: '#fff' },
        move: {
          direction: 'none',
          enable: true,
          outModes: 'out',
          random: false,
          speed: 2,
          straight: false,
        },
        number: { density: { enable: true, area: 800 }, value: 80 },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 2 },
        },
      },
    }"
        :particlesInit="particlesInit"
    />

    <div id="container">
      <div>
        <component :is="views[active_page]"/>
      </div>
    </div>

    <div id="navigation">
      <div class="d-flex align-items-center">
        <MenuItem
            v-for="(item, index) in pages"
            :key="item"
            :name="item.name"
            :icon="item.icon"
            :active="active_page === index"
            @click="active_page = index"/>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
#particles
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  z-index: -10

.slide-up-enter-active,
.slide-up-leave-active
  transition: all 0.25s ease-out

.slide-up-enter-from
  opacity: 0
  transform: translateY(30px)

.slide-up-leave-to
  opacity: 0
  transform: translateY(-30px)
</style>
<style lang="sass" src="../assets/sass/style.sass"></style>