Feature: API Testing with Cypress and Cucumber

    Scenario: Verify successful API response for fetching users
        Given I send a GET request to "/users"
        Then I should receive a 200 status code
        And the response should contain a list of users