<script setup lang="ts">

/*document.title = "My Contacts"*/

</script>

<template>
  <transition name="slide-up" appear>
    <div id="contact" class="d-flex justify-content-center align-items-center">

      <div class="d-flex flex-column justify-content-center align-items-center">
        <h1>Contact Me</h1>
        <div class="d-flex justify-content-center align-items-center">
          <a class="fa fa-instagram" target="_blank" href="https://instagram.com/hossara.dev"></a>
          <a class="fa fa-linkedin" target="_blank" href="https://linkedin.com/in/dev-haraghi"></a>
          <a class="fa fa-github" target="_blank" href="https://github.com/YasTechOrg"></a>
          <a class="fa fa-envelope-o" target="_blank" href="mailto:hoseinaraghi84@gmail.com"></a>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="sass" src="../../assets/sass/contact.sass"></style>