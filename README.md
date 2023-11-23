# Product Widgets Front-end Service Documentation - Greenspark

## Overview

This front-end service allows users to display and customize product widgets. The application fetches product widget data from the provided API, enables users to view their widgets, and provides customization options for color, active state, and linking to the public profile.

## Technical Stack

Framework/Library: Nuxt 3
State Management: Pinia
UI Library: Tailwind CSS

## Installation

Clone the repository: `git clone https://github.com/omgzsa/greenspark-exercise`
Navigate to the project directory: `cd greenspark-exercise`
Install dependencies: `npm install`

## API Integration

Product widget data is fetched from custom api route. For that one should create a .env file in the root directory and add the provided mock api. `NUXT_API_URL=<provided_endpoint>`

## Usage

Run the application: npm run serve
Open the application in your browser: http://localhost:8080

## Features

### Viewing Product Widgets

- Upon page load, the application fetches product widget DTOs from the API.
- Displays the initial properties of each widget.

### Customizing Widgets

Users can customize widgets by:

- Changing colors
- Setting the active state
- Linking/unlinking to the public profile

Active State Management
Only one widget can have the active state at a time.

## Folder Structure

/src
|-- assets
|-- components
|-- plugins
|-- views
|-- App.vue
|-- main.js
|-- ...

Contact
For any questions or clarifications, feel free to reach out here.
