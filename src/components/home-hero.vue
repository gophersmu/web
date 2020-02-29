<template>
  <div class="home-hero h-screen flex">
    <div class="backgrounds"></div>
    <div class="backgrounds backgrounds-alternate"></div>
    <div class="info-section  flex flex-col  justify-center px-10 text-white">
      <div class="background-holder">&nbsp;</div>
      <div class="relative text-6xl m-auto my-0 md:ml-auto md:mr-0 md:text-right font-bold">
        <img src="../assets/gophersmu.svg" alt="" class="relative w-32 md:w-64 ml-auto " />
      </div>
      <p class="relative text-xl md:text-2xl text-center md:text-right py-5">Join us for <strong>&quot;Hands on GoLang&quot;</strong></p>
      <!-- <p class="relative text-right text-white text-2xl font-bold">21st December 2019</p> -->
      <div class="relative countdown">
        <div class="slot">SAT</div>
        <div class="slot">07</div>
        <div class="slot">MAR</div>
        <div class="slot">2020</div>
      </div>
      <div class="relative countdown p-0">
        <div class="slot-labels">day</div>
        <div class="slot-labels">date</div>
        <div class="slot-labels">month</div>
        <div class="slot-labels">year</div>
      </div>
      <a href="#upcoming-event" class="relative bg-red-500 px-4 py-2 text-white w-32 text-center rounded mt-5 ml-auto mr-0 hover:bg-red-600 cursor-pointer uppercase">
        more info
      </a>
    </div>
  </div>
</template>

<style>
.home-hero {
  position: relative;
  /* background-color: black; */
}

.backgrounds {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  content: " ";
  /* Define Background Images */

  --bg1: url("/backgrounds/arwin-neil-baichoo-Pzf4tLq4bgQ-unsplash.jpg");
  --bg2: url("/backgrounds/xavier-coiffic-rNS604XxKqw-unsplash.jpg");
  --bg3: url("/backgrounds/john-o-nolan-SEdcPV_wn_o-unsplash.jpg");
  --bg4: url("/backgrounds/xavier-coiffic-ByAHlRiTQjo-unsplash.jpg");
  --bg5: url("/backgrounds/xavier-coiffic-rNS604XxKqw-unsplash.jpg");

  --numberOfImages: 5;
  --duration: 20s;
  --fadeDuration: calc(var(--duration) / var(--numberOfImages));
  --easing: linear;
  --delay-duration: calc(var(--fadeDuration) / 2);

  background-size: cover;
  background-color: black;
  background-image: var(--current-bg, var(--bg4));
  transition: opacity 0.2s var(--easing);
}

@screen md {
  .backgrounds {
    animation: slideshow var(--duration) var(--easing) infinite, fade var(--fadeDuration) var(--easing) infinite;
  }
  .backgrounds-alternate {
    animation: slideshow var(--duration) var(--delay-duration) var(--easing) infinite, fade var(--fadeDuration) var(--delay-duration) var(--easing) infinite;
  }
}

/* Animate using css custom properties */
@keyframes slideshow {
  0% {
    --current-bg: var(--bg1);
  }
  20% {
    --current-bg: var(--bg2);
  }
  40% {
    --current-bg: var(--bg3);
  }
  60% {
    --current-bg: var(--bg4);
  }
  80% {
    --current-bg: var(--bg5);
  }
  100% {
    --current-bg: var(--bg1);
  }
}

@keyframes fade {
  25% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
}

.info-section {
  width: 100%;
  /* background-repeat: no-repeat; */
  position: relative;
  z-index: 1;
  height: 50vh;
  align-self: center;
}

@screen md {
  .info-section {
    width: 33%;
    height: 100vh;
  }
}

.background-holder {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  content: " ";
  background: linear-gradient(0deg, theme(colors.blue.500), theme(colors.aqua.500));
  z-index: 0;
  opacity: 0.9;
}

.countdown {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 15px;
  padding: 10px 0;
}

.slot {
  width: 100%;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.349);
  text-align: center;
  font-size: 15px;
  padding: 0.5em 0;
  border-radius: 5px;
}

@screen md {
  .slot {
    font-size: 30px;
    padding: 1em 0;
  }
}

.slot-labels {
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
}
</style>
