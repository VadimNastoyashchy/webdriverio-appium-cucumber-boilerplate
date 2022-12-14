Feature: E-commerce app - Log in | Log out

  Scenario Outline: As a user i want to complete all the steps to log in and then log out from the app

    Given I am on the main screen step one.
    When I tap on the Menu button.
    And I tap on the My Account button.
    Then I should be redirected to the Login screen. Title <titleLogin> is present.
    When I fill Email <email> and Password <password> and click on LOGIN button.
    Then I should be redirected to the My Account screen. Title <titleMyAccount> is present.
    When I click on LOGOUT button.
    Then I should be redirected to the Login screen. Title <titleLogin> is present.

    Examples:
      | titleLogin | email                      | password                   | titleMyAccount |
      | Login      | automationpractice@ukr.net | simple_automation_com_2021 | My Account     |
