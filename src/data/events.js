const STATUS_ACTIVE = "active";
const STATUS_PAST = "past";
const STATUS_SOON = "soon";
const STATUS_CANCELLED = "cancelled";

let event2019_12_21 = {
	url: "https://www.meetup.com/GDG-Mauritius/events/266919961/",
	date: "2019-12-21",
	title: "Go: All you ever wanted to know but didn't dare to ask",
	status: STATUS_PAST,
	description: `
Our agenda is as follows:

- Keynote (Intro to Go - short presentation)
- First steps with Go
- Building web APIs
- Format: Talk and Code trial; bring your own laptop.
    
**Special Guest:** [Natalie Pistunovich](https://twitter.com/nataliepis), GDE for Go
    `,
	host: "GDG Mauritius",
	hostURL: "https://www.meetup.com/GDG-Mauritius",
	venue: "Flying Dodo, Bagatelle",
	venueCode: "QFGW+84"
};

let event2020_03_28 = {
	url: null, //"https://www.eventbrite.com/e/go-meetup-hands-on-golang-tickets-97489671231",
	date: "2020-03-28",
	status: "cancelled",
	title: "Hands on Golang",
	description: `
Mini workshop with hands-on Go development.

We will tackle the following exercises together:

- Hello World with Golang
- Introduction to Golang routines
- Writing a proxy using Golang

**Attendees are requested to bring their own laptops.**


---

**Note**

Thank you very much for your interest. 

However due to unfortunate circumstances, it would be ill-advised to maintain gatherings, in light of the COVID-19 pandemic.

Therefore the event has been cancelled; to be rescheduled in the future, when times are better.

Our friends are also advised to take all necessary precautions to stay safe during these trying times.

    `,
	host: "MCB Digital Factory",
	hostURL: "https://digitalfactory.mu/",
	venue: "MCB Digital Factory",
	venueCode: "RGQ2+9C Port Louis"
};

export default {
	upcoming: event2020_03_28,
	past: [event2019_12_21]
};
