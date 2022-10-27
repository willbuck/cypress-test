# Cypress Interview Pairing Exercise

This repo contains a ready made cypress runner to pair program on a Cypress test of https://cars.tmobiletravel.com/, one of our Car Rental partners.

This is not meant to be a high-pressure test, but rather a chance to sample what working together will be like. So we invite you to: 
- :relaxed: Take a deep breath, relax. We enjoy a chance collaborate on something together! 
- :nerd_face: Have the cypress docs or MDN handy if you like, this is open book and meant to be like how we work. Use your resources!
- :speech_balloon: Talk out your thoughts. We want to know how you think about solving problems!
- :question: Ask questions if you're unclear or want help. None of us knows everything and asking each other for help or clarity on objectives helps us deliver a better product :muscle:

## Prerequisites
You'll need a terminal with yarn or node version 14.8 or higher (tested with 16.10.0)

For help managing multiple node versions on your machine, we recommend using [nvm](https://github.com/nvm-sh/nvm)

You also may want to play around the site and come to the interview with some "user experience" of what it's like to rent a car on our site.

## To run the program:

1. Fork this repo to your machine
2. run `yarn` or `npm install` to install dependencies
3. run `npx cypress open` to open the cypress IDE
4. Navigate to the `cypress/e2e/rocketcars.js` test
5. Follow the instructions in that file to finish the test

## Overview of Instructions:

We maintain a whitelabeled React application that allows users to rent cars across the globe. Today, we’d like to see you apply your testing philosophy onto our landing page by creating a "happy path" where the form inputs are filled in and the button is clicked to go to the next page. 

There are no gotchyas, no booby traps, and we have nothing to hide. Please, take a few minutes to interact with the page and consider how’d write tests against it. 

The app itself is behaving mostly exactly as we intend it to behave, so you hopefully shouldn’t find aberrant behaviors. Instead, we’d like to see you write tests that a team might use to ensure that changes to the components do not break our core functionality. We’re here to help and answer your questions. This is not a test to see how much you’ve memorized.