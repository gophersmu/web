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
	venueCode: "QFGW+84",
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
	venueCode: "RGQ2+9C Port Louis",
};

let event2020_04_21 = {
	url: "https://www.meetup.com/frontendcodersmauritius/events/270040148",
	date: "2020-04-21",
	title: "Front-end Coders x Gophermu April Online Meetup",
	status: STATUS_PAST,
	description: `
We are teaming up with front-end coders for this online meetup!

Will be presenting:
- [Sandeep Ramgolam](https://twitter.com/__Sun__)
- [Cedric Poilly](https://twitter.com/cedpoilly)
- Jules Michael
- [Muhammad Yusuf Abdool Satar](https://fluxy.net)

Golang topics to be covered:
- Go Routines
- Getting started with telegram bots

**Format:** Short and Sweet
    `,
	host: "Front End Coders",
	hostURL: "https://www.meetup.com/frontendcodersmauritius",
	venue: "Online",
	venueCode: null,
};

let event2021_02_06 = {
	url: "https://www.meetup.com/gophersmu/events/275630430/",
	date: "2021-02-06",
	title: "Golang Meetup",
	status: STATUS_PAST,
	description: `
Bite-sized Golang talks to ease in the new year.

Everyone is welcome!

__Agenda:__
1. WTF is Go?
2. Golang GraphQL challenge to a frontend
3. Server Sent Events, the forgotten protocol
4. Table Driven Testing

<small>
Presenters:

[Jules Michael](http://github.com/JulesMike)

[Sandeep Ramgolam](https://twitter.com/__Sun__)

[Muhammad Yusuf Abdool Satar](https://fluxy.net)

[Jeshta Bhoyedhur](https://twitter.com/jjeshta)

</small>
    `,
	host: "Bocasay Mauritius",
	hostURL: "https://www.bocasay.com/",
	venue: "Bocasay, Ebène",
	venueCode: "QF3R+J3 Quatre Bornes",
};

let event2022_07_23 = {
	url: "https://frontend.mu/meetup/37",
	date: "2022-07-23",
	title: "Front-end Coders July Meetup",
	status: STATUS_PAST,
	description: `
Gophers.mu is happy to collaborate with Front-End Coders Mauritius in their monthly meetup.

We will be presenting « How to structure a Go project » by [Muhammad Yusuf Abdool Satar](https://fluxy.net)

Be sure to book your seat on the frontend website.
    `,
	host: "XEFI",
	hostURL: "https://www.bocasay.com/",
	venue: "Ebene Cyber Village",
	venueCode: "QF5Q+XCM Quatre Bornes",
};

let event2022_11_22 = {
	url: "https://conference.mscc.mu/agenda/303280",
	date: "2022-10-22",
	title: "Go: from scratch to prod",
	status: STATUS_PAST,
	description: `Gophers.mu participating in Developers Conference 2022 with a Crash course to get acquainted with Golang development.
	Together we will build, test and deploy a web application using Golang.`,
	host: "MSCC",
	hostURL: "https://www.mscc.mu/",
	venue: "Caudan Arts Center, Port Louis",
	venueCode: "RFQX+68 Port Louis",
};

export default {
	upcoming: null,
	past: [
		event2022_11_22,
		event2022_07_23,
		event2021_02_06,
		event2020_04_21,
		event2020_03_28,
		event2019_12_21,
	],
};
