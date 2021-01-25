<template>
  <div>
    <div class="py-10 px-10 text-xl text-gray-800 text-left">
      <div>
        <h1
          id="upcoming-event"
          class="text-4xl font-black font-sans py-4 text-center"
        >Upcoming event</h1>
        <event v-bind="events.upcoming"></event>
      </div>
    </div>
    <div class="blue-gradient text-white py-10 text-xl text-justify flex flex-col content-center">
      <div class="home-intro">
        <h1 id="about-us" class="text-4xl font-black font-sans py-4 text-center">About Us</h1>
        <p>Go is an open source programming language supported by Google.</p>
        <p>The language makes it easy to build simple, reliable, and efficient software.</p>
        <p>We are gophers (Go developers) from the paradise island of Mauritius. A tiny island in the Indian Ocean with loads of sunshine and equally bright minds.</p>
        <p>Our fellowship is a new one, initiated with developers who fell in love with Go and have used it professionally. We look forward to sharing our experience with more people; hoping we can make friends to learn and laugh along the way.</p>
      </div>
      <div class="w-3.5 text-center mt-4">
        <a href="https://t.me/gophersmu" target="_blank" rel="external noopener" class="border-b-4 border-red-500 bg-blue-300 hover:bg-blue-400 text-white-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <img src="../assets/telegram.svg" alt="telegram gophersmu group" class="mx-2" style="width:32px;height:auto"/>
          <span>Join Us!</span>
        </a>
      </div>
    </div>
    <div class="py-10 px-10 text-xl text-gray-800 text-left" v-if="events.past.length">
      <div>
        <h1 class="text-4xl font-black font-sans py-4 text-center">Past events</h1>
        <div
          v-for="(event, i) in events.past"
          :key="i"
          :class="{'bottom-line': (i < events.past.length-1)}"
        >
          <event v-bind="event"></event>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import events from "../data/events";
import event from "./event";

export default {
  components: { event },
  data() {
    return { events };
  }
};
</script>

<style>
.home-intro {
  max-width: 600px;
  width: 90%;
  margin: 0 auto;
}

p,
li {
  line-height: 1.5em;
  margin-bottom: 14px;
  /* font-size: 18px; */
}

li {
  list-style: disc;
  line-height: 1em;
  list-style-position: inside;
  margin-bottom: 12px;
}

p a {
  /* text-decoration: underline; */
  color: theme(colors.blue.500);
}

.blue-gradient {
  background: linear-gradient(
    45deg,
    theme(colors.blue.500),
    theme(colors.aqua.500)
  );
}

.bottom-line {
  border-bottom: 2px solid #00a3a3;
  margin: 0 0 10px 0;
}
</style>
