<script setup lang="ts">

import {ref} from "vue"

document.title = "My Skills"

const skills = ref([
    "Spring Boot, Kotlin",
    "Vue.js 3, Vue Cli4",
    "JavaScript, TypeScript",
    "Pug, Sass",
    "Flutter, Dart",
    "c, c++",
    "Python",
    "Figma",
    "MongoDB - MySql",
    "Git, Github",
    "Reactive Programming",
    "Reactive Streams",
    "Spring Security",
    "Linux, Ubuntu",
])

</script>

<template>
  <transition name="slide-up" appear>
    <div id="skills" class="d-flex flex-column justify-content-center align-items-center">
      <h1>Skills</h1>
      <div class="mt-4 d-flex flex-wrap justify-content-center">
        <div class="p-2" v-for="skill in skills" :key="skill">
          <div>
            <h5>{{ skill }}</h5>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="sass" src="../../assets/sass/skills.sass"></style>