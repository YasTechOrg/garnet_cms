<script setup lang="ts">


/*document.title = "My Certificates"*/

import {ref} from "#imports"

const certificates = ref([
  {
    title: "CS50x",
    school: "Harvard University",
    time: ["July 2021", "No expiration"]
  },
  {
    title: "CS50x",
    school: "Harvard University",
    time: ["July 2021", "No expiration"]
  },
  {
    title: "CS50x",
    school: "Harvard University",
    time: ["July 2021", "No expiration"]
  },
  {
    title: "CS50x",
    school: "Harvard University",
    time: ["July 2021", "No expiration"]
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
            <img src="../../assets/img/cs50.png" alt="CS50">
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