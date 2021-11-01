Feature: Specify number of events


Scenario: When user hasn’t specified a number, 32 is the default number
Given the main page is open
When the user opens the app
Then it should show the first 32 of them

Scenario: User can change the number of events they want to see
Given the main page is open
When the user click on button and edit it to another number
Then the number of events specified by the button should be shown
