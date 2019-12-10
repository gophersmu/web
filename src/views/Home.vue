<template>
  <div class="page-home">
    <HomeHero></HomeHero>
    <HomeIntro></HomeIntro>
    <HomeGallery></HomeGallery>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHero from "@/components/home-hero.vue";
import HomeIntro from "@/components/home-intro.vue";
import HomeGallery from "@/components/home-gallery.vue";

export default {
  name: "home",
  components: {
    HomeHero,
    HomeIntro,
    HomeGallery
  }
};
</script>
