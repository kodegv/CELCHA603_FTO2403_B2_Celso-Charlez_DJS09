// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to 
// all TypeScript weakness flags.
// : number
import { showReviewTotal, populateUser, getTopTwoReviews } from "./utils";
import { Permissions, LoyaltyUser } from "./enums";
import { Price, Country } from "./types";
import Review from "./interfaces";
const propertyContainer = document.querySelector(".properties");
const footer = document.querySelector(".footer");

let isOpen: boolean;

const reviewTotalDisplay = document.querySelector("#reviews")

// Here are the reviews
const reviews: Review[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
];

const you = {
    firstName: "Bobby",
    lastName: "Brown",
    permissions: Permissions.ADMIN,
    isReturning: true,
    age: 35,
    stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
  };

interface Property {
    image: string;
    title: string;
    price: Price;
    location: {
      firstLine: string;
      city: string;
      code: number | string;
      country: Country;
    };
    contact: [number, string];
    isAvailable: boolean;
}

// Properties array
const properties: Property[] = [
    {
      image: "./images/colombia-property.jpg",
      title: "Colombian Shack",
      price: 45,
      location: {
        firstLine: "shack 37",
        city: "Bogota",
        code: 45632,
        country: "Colombia",
      },
      contact: [+112343823978921, "marywinkle@gmail.com"],
      isAvailable: true,
    },
    {
      image: "./images/poland-property.jpg",
      title: "Polish Cottage",
      price: 30,
      location: {
        firstLine: "no 23",
        city: "Gdansk",
        code: 343903,
        country: "Poland",
      },
      contact: [+1298239028490830, "garydavis@hotmail.com"],
      isAvailable: false,
    },
    {
      image: "./images/london-property.jpg",
      title: "London Flat",
      price: 25,
      location: {
        firstLine: "flat 15",
        city: "London",
        code: "SW4 5XW",
        country: "United Kingdom",
      },
      contact: [+34829374892553, "andyluger@aol.com"],
      isAvailable: true,
    },
    {
      image: "./images/colombia-property.jpg",
      title: "Malia Hotel",
      price: 35,
      location: {
        firstLine: "Room 4",
        city: "Malia",
        code: 45334,
        country: "Malaysia",
      },
      contact: [+112343823978921, "marywinkle@gmail.com"],
      isAvailable: true,
    },
  ];
  
// functions
showReviewTotal(1, reviews[0].name, reviews[0].loyaltyUser);

populateUser(you.isReturning, you.firstName);

// push properties loop
for (let i = 0; i < properties.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = properties[i].title;
    const image = document.createElement("img");
    image.setAttribute("src", properties[i].image);
    card.appendChild(image);
    propertyContainer.appendChild(card);
  }