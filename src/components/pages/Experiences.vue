<script setup lang="ts">

import {ref} from "vue"

document.title = "My Experiences"

const experiences = ref([
  {
    title: "hossara.com",
    img: "https://hossaracom.s3.ir-thr-at1.arvanstorage.com/hossara.png",
    description: "hossara.com is my personal website based on garnet cms \"Release Soon\" that i use it for personal branding and online CV.",
    positions: [
      {
        position: "Designer & Developer",
        time: ["MAR 2022", "PRESENT"],
        links: [
          { type: "website", url: "https://hossara.com" },
        ]
      },
    ]
  },
  {
    title: "YozLearn",
    img: "https://hossaracom.s3.ir-thr-at1.arvanstorage.com/yozlearn.png",
    description: "YozLearn is an E-Learning website that holding and hosting world famous courses like Google Digital Marketing courses and help you reach Certificate even in countries with sanctions.",
    positions: [
      {
        position: "Frontend Developer",
        time: ["APR 2022", "PRESENT"],
        links: [
          { type: "website", url: "https://yozlearn.ir" },
        ]
      },
    ]
  },
  {
    title: "CS50x Iran",
    img: "https://hossaracom.s3.ir-thr-at1.arvanstorage.com/cs50.jpg",
    description: "CS50x Iran is holder and host of Harvard University CS50x Courses in Iran. CS50x Iran starts from hosting puzzle day in 2019 and it continued with hosting multiple course from CS50x.",
    positions: [
      {
        position: "Scientific Team Volunteer",
        time: ["DEC 2021", "MAY 2022"],
        links: [
          { type: "website", url: "https://cs50x.ir" },
        ]
      },
      {
        position: "Web Design Team",
        time: ["MAY 2022", "PRESENT"],
        links: [
          { type: "website", url: "https://cs50x.ir" },
        ]
      },
      {
        position: "Scientific Team",
        time: ["MAY 2022", "PRESENT"],
        links: [
          { type: "website", url: "https://cs50x.ir" },
        ]
      },
    ]
  },
  {
    title: "Gereh Circles",
    img: "https://hossaracom.s3.ir-thr-at1.arvanstorage.com/gereh.jpg",
    description: "Gereh is a Mentorship System in Iran Amirkabir University. Gereh provides an Supervised Group Learning System that makes learning programming so funny, easy and enjoyable.",
    positions: [
      {
        position: "Mentor",
        time: ["NOV 2021", "PRESENT"],
        links: [
          { type: "website", url: "https://gereh.mathcs.ir" },
        ]
      },
      {
        position: "Content & Head of Web Design Team",
        time: ["JAN 2022", "PRESENT"],
        links: [
          { type: "website", url: "https://gereh.mathcs.ir" },
        ]
      }
    ]
  },
  {
    title: "YasTech",
    img: "https://hossaracom.s3.ir-thr-at1.arvanstorage.com/yastech.png",
    description: "YasTech is an IT team and community that develop and build digital products like websites and applications.",
    positions: [
      {
        position: "CEO & Founder",
        time: ["JAN 2018", "PRESENT"],
        links: [
          { type: "website", url: "https://yastech.org" },
        ]
      }
    ]
  },
  {
    title: "Morphotect",
    img: "https://hossaracom.s3.ir-thr-at1.arvanstorage.com/morphotect.png",
    description: "",
    positions: [
      {
        position: "IoT Engineer",
        time: ["AUG 2017", "DEC 2019"],
        links: [
          { type: "website", url: "https://morphotect.com/" },
        ]
      }
    ]
  },
  {
    title: "Lovecell",
    img: "https://hossaracom.s3.ir-thr-at1.arvanstorage.com/lovecell.png",
    description: "",
    positions: [
      {
        position: "Fullstack Developer",
        time: ["OCT 2016", "NOV 2019"],
        links: [
          { type: "website", url: "https://lovecellco.com/" },
        ]
      }
    ]
  },
])


</script>

<template>
  <transition name="slide-up" appear>
    <div id="experiences" class="d-flex flex-column justify-content-center align-items-center">
      <h1>Experiences</h1>
      <div class="mt-4 d-flex flex-column w-100">
        <div class="mb-2 d-flex flex-column" v-for="experience in experiences" :key="experience">
          <img :src="experience.img" alt="">
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
                  <a v-for="link in position.links" :key="link" :href="link.url" target="_blank">
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