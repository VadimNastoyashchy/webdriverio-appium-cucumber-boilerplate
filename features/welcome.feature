Feature: E-commerce app - Welcome Screen

  Scenario Outline: As a user i want to complete all the steps on the welcome screen

    Given I am on the welcome screen step one. Title <title> and subTitle <subtitle> is present.
    When I tap on the Next button.
    Then I should be redirected to the welcome screen step two. Title <title2> and subTitle <subtitle2> is present.
    When I tap on the Next button.
    Then I should be redirected to the welcome screen step third. Title <title3> and subTitle <subtitle3> is present.
    When I tap on the Got It button.
    Then I should be redirected to the main screen. App header Title <headerTitle> is present.
    Examples:
      | title          | subtitle                                          | headerTitle   | title2       | subtitle2                       | title3 | subtitle3                          |
      | E Commerce App | The Easiest Way To Order Products From This App ! | eCommerce App | New Arrivals | Get New Products On One Touch ! | Sale   | Great Discounts On Many Products ! |