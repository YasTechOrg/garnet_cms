<script setup lang="ts">

import {ref} from "vue"

document.title = "My Experiences"

const experiences = ref([
  {
    title: "Gereh Circles",
    description: "Gereh is a Mentorship System in Iran Amirkabir University. Gereh provides an Supervised Group Learning System that makes learning programming so funny, easy and enjoyable.",
    positions: [
      {
        position: "Mentor & Head of Web Design Team",
        time: ["JAN 2022", "PRESENT"],
        links: [
          { type: "website", url: "" },
          { type: "website", url: "" },
        ]
      },
      {
        position: "Mentor & Head of Web Design Team",
        time: ["JAN 2022", "PRESENT"],
        links: [
          { type: "website", url: "" }
        ]
      },
    ]
  },
  {
    title: "Gereh Circles",
    description: "Gereh is a Mentorship System in Iran Amirkabir University. Gereh provides an Supervised Group Learning System that makes learning programming so funny, easy and enjoyable.",
    positions: [
      {
        position: "Mentor & Head of Web Design Team",
        time: ["JAN 2022", "PRESENT"],
        links: [
          { type: "website", url: "" }
        ]
      },
      {
        position: "Mentor & Head of Web Design Team",
        time: ["JAN 2022", "PRESENT"],
        links: [
          { type: "website", url: "" }
        ]
      },
    ]
  },
  {
    title: "Gereh Circles",
    description: "Gereh is a Mentorship System in Iran Amirkabir University. Gereh provides an Supervised Group Learning System that makes learning programming so funny, easy and enjoyable.",
    positions: [

    ]
  },
  {
    title: "Gereh Circles",
    description: "Gereh is a Mentorship System in Iran Amirkabir University. Gereh provides an Supervised Group Learning System that makes learning programming so funny, easy and enjoyable.",
    positions: [

    ]
  },
  {
    title: "Gereh Circles",
    description: "Gereh is a Mentorship System in Iran Amirkabir University. Gereh provides an Supervised Group Learning System that makes learning programming so funny, easy and enjoyable.",
    positions: [
      {
        position: "Mentor & Head of Web Design Team",
        time: ["JAN 2022", "PRESENT"],
        links: [
          { type: "website", url: "" }
        ]
      },
    ]
  }
])


</script>

<template>
  <transition name="slide-up" appear>
    <div id="experiences" class="d-flex flex-column justify-content-center align-items-center">
      <h1>Experiences</h1>
      <div class="mt-4 d-flex flex-column w-100">
        <div class="mb-2 d-flex flex-column" v-for="experience in experiences" :key="experience">
          <img src="../../assets/img/gereh.jpg" alt="">
          <div class="title_bar">
            <h2>{{ experience.title }}</h2>
            <h5>{{ experience.description }}</h5>
          </div>
          <div class="position_bar">
            <div
                class="position d-flex justify-content-start align-items-stretch"
                v-for="position in experience.positions" :key="position">
              <div class="position-relative line">

              </div>
              <div class="content d-flex flex-column">
                <h3>{{ position.position }}</h3>
                <p class="mb-3">{{ position.time[0] }} - {{ position.time[1] }}</p>
                <div class="mb-2 flex-grow-1 d-flex align-items-center justify-content-start">
                  <a v-for="link in position.links" :key="link" :href="link.url">
                    <i class="fa fa-external-link-square"></i> Website Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="sass" src="../../assets/sass/experiences.sass"></style>