Feature: Show/hide an event's details

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