<template>
  <div>
    <div class="py-10 px-10 text-xl text-gray-800 text-left">
      <div>
        <h1 id="upcoming-event">Upcoming event</h1>
        <div class="lg:flex">
          <div class="lg:w-1/2 flex-col flex justify-center text-center px-10">
            <p class="text-3xl ">
              <span class="uppercase text-xl"> We are hosting an event:</span> <br />
              <a class="font-bold" href="https://www.meetup.com/GDG-Mauritius/events/266919961/"
                >&quot;Go: All you ever wanted to know <br />
                but didn&#39;t dare to ask&quot;</a
              >
              <br /><strong class="text-xl uppercase">Saturday 21st December 2019</strong>
            </p>
            <p class="text-gray-600 text-sm">The event has been organized with the collaboration of <a href="https://www.meetup.com/GDG-Mauritius/events/266919961/">GDG Mauritius</a>.</p>
          </div>
          <div class="lg:w-1/2">
            <p>Our agenda is as follows:</p>
            <ol>
              <li>Keynote (introduction to golang - short presentation)</li>
              <li>First steps with go</li>
              <li>Building web APIs</li>
              <li>Going serverless</li>
              <li>Devops using go</li>
            </ol>
            <p><strong>Format:</strong> Hands on informal workshop-style; bring your own laptop.</p>
            <p><strong>Special Guest:</strong> <a href="https://twitter.com/nataliepis">Natalie Pistunovich</a>, GDE for Go</p>
            <p>The invitation is open to everyone, but registration is mandatory.</p>
            <a class="relative bg-red-500 px-4 py-2 text-white w-32 rounded mt-5 ml-auto mr-0 hover:bg-red-600 cursor-pointer" href="https://www.meetup.com/GDG-Mauritius/events/266919961/">More info on the event here</a>
          </div>
        </div>
      </div>
    </div>
    <div class="blue-gradient text-white py-10 text-xl text-justify">
      <div class="home-intro">
        <h1 id="about-us">About Us</h1>
        <p>Go is an open source programming language supported by Google.</p>
        <p>The language makes it easy to build simple, reliable, and efficient software.</p>
        <p>We are gophers (Go developers) from the paradise island of Mauritius. A tiny island in the indian ocean with loads of sunshine and equally bright minds.</p>
        <p>Our fellowship is a new one, initiated with developers who fell in love with Go and have used it professionally. We look forward to sharing our experience with more people; hoping we can make friends to learn and laugh along the way.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-intro {
  max-width: 600px;
  width: 90%;
  margin: 0 auto;
}

h1 {
  @apply text-4xl font-black font-sans py-4 text-center;
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
  background: linear-gradient(45deg, theme(colors.blue.500), theme(colors.aqua.500));
}
</style>
