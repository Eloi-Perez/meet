# Meet App


## Objective
To build a serverless (with AWS Lambda), progressive web application (PWA) with React, using test-driven development (TDD) and Google Calendar API as the source of the app data.

Hosted on [GitHub Pages](https://eloi-perez.github.io/meet "GitHub Pages")

![web image](https://github.com/Eloi-Perez/meet/blob/assets/meet-app.png)

## Technologies used:
* React
* Axios
* Google API
* Google Authentication
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

![web image](https://github.com/Eloi-Perez/meet/blob/assets/all_test_pass.png)

<ul>
    <li>
        <h3>Filter events by city</h3>
        <p>Scenario: When user hasn’t searched for a city, show upcoming events from all cities</p>
        <ul>
            <li>Given user hasn’t searched for any city</li>
            <li>When the user opens the app </li>
            <li>Then the user should see the list of upcoming events</li>
        </ul>
        <p>Scenario: User should see a list of suggestions when they search for a city</p>
        <ul>
            <li>Given the main page is open</li>
            <li>When the user starts typing in the city textbox</li>
            <li>Then the user should receive a list of cities (suggestions) that match what they’ve
                typed</li>
        </ul>
        <p>Scenario: User can select a city from the suggested list</p>
        <ul>
            <li>Given user was typing “Berlin” in the city textbox And the list of suggested cities
                is showing</li>
            <li>When the user selects a city (e.g., “Berlin, Germany”) from the list</li>
            <li>Then their city should be changed to that city (i.e., “Berlin, Germany”) And the
                user should receive a list of upcoming events in that city</li>
        </ul>
    </li>
    <li>
        <h3>Specify the number of events</h3>
        <p>Scenario: When user hasn’t specified a number, 32 is the default number</p>
        <ul>
            <li>Given the main page is open</li>
            <li>When the user opens the app</li>
            <li>Then it should show the first 32 of them</li>
        </ul>
        <p>Scenario: User can change the number of events they want to see</p>
        <ul>
            <li>Given the main page is open</li>
            <li>When the user clicks on the button and edits it to another number </li>
            <li>Then it should be shown in the list the number of events specified by the button</li>
        </ul>
    </li>
    <li>
        <h3>Show/hide an event's details</h3>
        <p>Scenario: An event element is collapsed by default</p>
        <ul>
            <li>Given the main page is open</li>
            <li>When the user opens the app</li>
            <li>Then all the events should be collapsed</li>
        </ul>
        <p>Scenario: User can expand an event to show its details</p>
        <ul>
            <li>Given an collapsed element</li>
            <li>When the user clicks on the collapsed element</li>
            <li>Then the element should expand</li>
        </ul>
        <p>Scenario: User can collapse an event to hide its details</p>
        <ul>
            <li>Given a expanded element</li>
            <li>When the user clicks on the expanded element</li>
            <li>Then the element should collapse</li>
        </ul>
    </li>
</ul>

