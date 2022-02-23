[![Node.js CI](https://github.com/nipunbhasarkar/word-color-association/actions/workflows/node.js.yml/badge.svg)](https://github.com/nipunbhasarkar/word-color-association/actions/workflows/node.js.yml)

# Word Color Association

This is a front end web application, with a responsive UI, which when given a word as input gives out a list of colors related to that word.

## Problem Description

### Word Input

An input field where users can type in any word and get results

### Related Color List

- Once the user enters the input word, the related colors to that word will be listed
  out in the form of a masonry grid of color cards.
- Each color card will have the hex value of the color and a background of that
  respective color.
- [Color Lovers](https://colourlovers.com/api/colors) API is used as the backend for this purpose

## Libraries Used

- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.3.
- This project uses [Bootstrap](https://getbootstrap.com/) version 5
- It uses [xml2js](https://www.npmjs.com/package/xml2js) library to convert `xml` response to `js` object

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## CORS issue

Install [Moesif Origin & CORS Changer](https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc) google chrome extension to avoid CORS issues. The API's used in this application are behind cloud flare and proxy.conf.json doesn't work here.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io). The code coverage can also be checked after running this command.

## Authors

- [@nipunbhasarkar](https://www.github.com/nipunbhasarkar)

## Code coverage

![image](https://user-images.githubusercontent.com/10637627/150692054-079d704a-9139-4160-a80b-bb6127b76c73.png)
