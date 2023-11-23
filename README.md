# Product Widgets Front-end Service Documentation - Greenspark

## Overview

This front-end service allows users to display and customize product widgets. The application fetches product widget data from the provided API, enables users to view their widgets, and provides customization options for color, active state, and linking to the public profile.

## Technical Stack

- Framework/Library: Nuxt 3
- State Management: Pinia
- UI Library: Tailwind CSS

## Installation

- Clone the repository: `git clone https://github.com/omgzsa/greenspark-exercise`
- Navigate to the project directory: `cd greenspark-exercise`
- Install dependencies: `npm install`

## API Integration

Product widget data is fetched from custom api route through a pinia store. For that, one should create a .env file in the root directory and add the provided mock api. `NUXT_API_URL=<provided_endpoint>`

## Usage

- Run the dev server: `npm run dev`
- Navigate to `http://localhost:3000` in your browser
- run build: `npm run build`
- check out with `node .output/server/index.mjs`
- run generate: `npm run generate`
- check out with `npx serve .output/public`

If you don't want to clone, dev, build, serve ... or you don't have node installed, you can check out the deployed version <a href="https://cozy-kleicha-181ea7.netlify.app/" target="_blank">here</a>.

## Features

### Viewing Product Widgets

- Upon page load, the application fetches product widget DTOs from the API.
- Displays the initial properties of each widget.

### Widget behavior

- Linking/unlinking to the public profile
- Tooltip visibility is as expected, user able to click the link
- Changing colors
- Only one widget can have the active state at a time.

## Contact

For any questions or clarifications, feel free to reach out here.
