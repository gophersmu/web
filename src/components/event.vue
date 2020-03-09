<template>
    <div class="lg:flex">
        <div class="lg:w-1/2 flex-col flex justify-center text-center px-10">
        <p class="text-3xl ">
            <span  class="uppercase text-xl"> {{hostingText}}</span> <br />
            <a class="font-bold" target="_blank" :href="url">&quot;{{title}}&quot;</a>
            <br />
            <strong class="text-xl uppercase">{{formattedDate}}</strong>
            <br/>
            <p class="text-gray-600 text-sm">❤️ Thanks to <a :href="hostURL" target="_blank">{{host}}</a> for hosting this event.</p>
        </p>
        </div>
        <div class="lg:w-1/2">
        <span v-html="marked(description)"></span>
        <br/>
        <a v-if="isActive" class="relative bg-red-500 px-4 py-2 text-white w-32 rounded mt-5 ml-auto mr-0 hover:bg-red-600 cursor-pointer" target="_blank" :href="url">Book your seat</a>
        </div>
    </div>
</template>

<script>
import {format, parse} from "date-fns";
import marked from "marked";

export default {
    props: {
        url: String,
        date: String,
        title: String,
        subtitle: String,
        description: String,
        host: String,
        hostURL: String
    },
    data() {
        let date = parse(this.date, "yyyy-MM-dd", new Date());
        let isActive = date > new Date();
        let formattedDate = format(date, "PPPP");
        console.log(date, new Date(), isActive);

        let hostingText = isActive ? "We are hosting an event:": "We hosted an event";

        return {isActive, formattedDate, hostingText}
    },
    methods: {
        marked
    }
}
</script>