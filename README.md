# Meet App


## Objective
To build a serverless (with AWS Lambda), progressive web application (PWA) with React, using test-driven development (TDD) and Google Calendar API as the source of the app data.

Hosted on [GitHub Pages](https://eloi-perez.github.io/meet "GitHub Pages")

## Technologies used:
* React
* Axios
* Google Authentication
* Google API
* AWS Lambda
* PWA (Progressive Web Application)
* Recharts
* NProgress.js
* Jest
* Enzyme
* Jest Cucumber (Gherkin scenarios in Jest)
* Puppeteer
* Atatus

## Features:

### Filter events by city

Scenario: When user hasn’t searched for a city, show upcoming events from all cities
Given user hasn’t searched for any city
When the user opens the app
Then the user should see the list of upcoming events.

Scenario: User should see a list of suggestions when they search for a city
Given the main page is open
When the user starts typing in the city textbox
Then the user should receive a list of cities (suggestions) that match what they’ve typed

Scenario: User can select a city from the suggested list
Given user was typing “Berlin” in the city textbox
And the list of suggested cities is showing
When the user selects a city (e.g., “Berlin, Germany”) from the list
Then their city should be changed to that city (i.e., “Berlin, Germany”)
And the user should receive a list of upcoming events in that city


### Specify number of events

Scenario: When user hasn’t specified a number, 32 is the default number
Given the main page is open
When the user opens the app
Then it should show the first 32 of them

Scenario: User can change the number of events they want to see
Given the main page is open
When the user click on button and edit it to another number
Then it should be shown the quantity of events specified in button

### Show/hide an event's details

Scenario: An event element is collapsed by default
Given the main page is open
When the user opens the app
Then all the events should be collapsed

Scenario: User can expand an event to show its details
Given a collapsed element
When the user click on the collapsed element
Then the element should expand

Scenario: User can collapse an event to hide its details
Given a expanded element
When the user click on the expanded element
Then the element should collapse

