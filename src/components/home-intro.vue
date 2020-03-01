<template>
  <div>
    <div class="py-10 px-10 text-xl text-gray-800 text-left">
      <div>
        <h1 id="upcoming-event">Upcoming event</h1>
        <div class="lg:flex">
          <div class="lg:w-1/2 flex-col flex justify-center text-center px-10">
            <p class="text-3xl ">
              <span class="uppercase text-xl"> We are hosting an event:</span> <br />
              <a class="font-bold" href="#"
                >&quot;Hands on GoLang&quot;</a
              >
              <br /><strong class="text-xl uppercase">soon</strong>
            </p>
          </div>
          <div class="lg:w-1/2">
            <p>We are hosting a mini workshop with hands-on Go development.</p>
            <p>We will tackle the following exercises together:</p>
            <ul>
              <li>Hello World with Golang</li>
              <li>Introduction to Golang routines</li>
              <li>Writing a proxy using Golang</li>
            </ul>
            <br/>
            <p>The invitation is open to everyone, but registration is mandatory.</p>
            <p><strong>Attendees are requested to bring their own laptops.</strong></p>
            <!-- <p class="text-gray-600 text-sm">The event is being hosted by the <a href="https://digitalfactory.mu" target="_blank">MCB Digital Factory</a>.</p> -->
            <br/>
            <a class="relative bg-red-500 px-4 py-2 text-white w-32 rounded mt-5 ml-auto mr-0 hover:bg-red-600 cursor-pointer" href="#">Coming soon</a>
          </div>
        </div>
      </div>
    </div>
    <div class="blue-gradient text-white py-10 text-xl text-justify">
      <div class="home-intro">
        <h1 id="about-us">About Us</h1>
        <p>Go is an open source programming language supported by Google.</p>
        <p>The language makes it easy to build simple, reliable, and efficient software.</p>
        <p>We are gophers (Go developers) from the paradise island of Mauritius. A tiny island in the Indian Ocean with loads of sunshine and equally bright minds.</p>
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
