Feature: Lofin Fuctionality
    Scenario: Verify user is able to Login using valid credentials
        Given I Navigate to 'https://www.saucedemo.com/'
        When You Enter username 'standard_user'
        And You Enter password 'secret_sauce'
        And You Click on Login Button
        Then Verify url should contain '/inventory.html'