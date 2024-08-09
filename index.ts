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

const reviewTotalDisplay = document.querySelector("#reviews")

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
