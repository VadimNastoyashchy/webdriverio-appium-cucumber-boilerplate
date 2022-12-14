Feature: E-commerce app - Order | Unauthorized

  Scenario Outline: As a unauthorized user i want to order one product.

    Given I am on the main screen.
    When I tap on the Clothing category.
    And I tap on the Women category.
    And I tap on the Tops category.
    And I tap on the first product item.
    Then I should be redirected to the Product details screen. Title <title> is present.
    When I add one item and tap on BUY NOW button.
    Then An Error modal is shown. Error message <errorMessage> is present.

    Examples:
      | title   | errorMessage       |
      | Product | Please Login First |