<template>
    <div class="lg:flex">
        <div class="lg:w-1/2 flex-col flex justify-center text-center px-10">
            <p class="text-3xl ">
                <span  class="uppercase text-xl"> {{hostingText}}</span>
                <br />
                <a v-if="url" class="font-bold" target="_blank" :href="url">&quot;{{title}}&quot;</a>
                <span v-else class="font-bold">&quot;{{title}}&quot;</span>
                <br />
                <strong class="text-xl uppercase">{{formattedDate}}</strong>
                <br/>
                <p v-if="host" class="text-gray-600 text-sm">
                    ❤️ Thanks to <a :href="hostURL" target="_blank">{{host}}</a> for hosting this event.
                </p>
            </p>
        </div>
        <div class="lg:w-1/2">
            <span v-html="marked(description)"></span>
            <br/>
            <a v-if="status === 'active' && url" class="relative bg-red-500 px-4 py-2 text-white w-32 rounded mt-5 ml-auto mr-0 hover:bg-red-600 cursor-pointer" target="_blank" :href="url">
                Get your seat
            </a>
            <span v-if="status === 'cancelled'" class="relative bg-red-500 px-4 py-2 text-white w-32 rounded mt-5 ml-auto mr-0 hover:bg-red-600 cursor-pointer" target="_blank" :href="url">
                Event has been cancelled
            </span>
        </div>
    </div>
</template>

<script>
import {format, parse} from "date-fns";
import marked from "marked";

const STATUS_ACTIVE    = "active";
const STATUS_PAST      = "past";
const STATUS_SOON      = "soon";
const STATUS_CANCELLED = "cancelled";

export default {
    props: {
        status: String,
        url: String,
        date: String,
        title: String,
        subtitle: String,
        description: String,
        host: String,
        hostURL: String
    },
    data() {
        let formattedDate;
        let hostingText;

        if (this.date) {
            let date = parse(this.date, "yyyy-MM-dd", new Date());
            formattedDate = format(date, "PPPP");
        } else {
            formattedDate = "";
        }

        switch (this.status) {
            case STATUS_ACTIVE:
                hostingText = "We are hosting an event";
                break;
            case STATUS_PAST:
                hostingText = "We hosted an event";
                break;
            case STATUS_SOON:
                hostingText = "We are working on an event";
                formattedDate += " Coming Soon";
                break;
            case STATUS_CANCELLED:
                hostingText = "Our event has been cancelled";
                formattedDate += " Cancelled"
                break;
        }

        return {formattedDate, hostingText}
    },
    methods: {
        marked
    }
}
</script>