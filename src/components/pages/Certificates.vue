<script setup lang="ts">

import {ref} from "vue"

document.title = "My Certificates"

const certificates = ref([
  {
    title: "CS50x",
    img: "https://hossaracom.s3.ir-thr-at1.arvanstorage.com/cs50_cert.png",
    school: "Harvard University",
    time: ["July 2021", "No expiration"]
  },
  {
    title: "Mentoring Certificates",
    img: "https://hossaracom.s3.ir-thr-at1.arvanstorage.com/gereh_cert.jpeg",
    school: "Gereh Circles",
    time: ["NOV 2021", "No expiration"]
  },
  {
    title: "Participation Certificates",
    img: "https://hossaracom.s3.ir-thr-at1.arvanstorage.com/kayam_cert.jpg",
    school: "Khayyam International Invention and Innovation Festival",
    time: ["MAY 2021", "No expiration"]
  },
])

</script>

<template>
  <transition name="slide-up" appear>
    <div id="certificates" class="d-flex flex-column justify-content-center align-items-center">
      <h1>Certificates</h1>

      <div class="row m-0">
        <div class="cert col-sm-6" v-for="certificate in certificates" :key="certificate">
          <div class="d-flex w-100 flex-column">
            <img :src="certificate.img" alt="CS50">
            <h2>{{ certificate.title }}</h2>
            <h4>{{ certificate.school }}</h4>
            <p>{{ certificate.time[0] }} - {{ certificate.time[1] }}</p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="sass" src="../../assets/sass/certificates.sass"></style>