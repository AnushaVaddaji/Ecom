@test1
Feature: End to End

  As a customer
  I want to buy an item
  So that i can see the confirmation screen


  Scenario: Verify that  user can buy 1 item and get confirmation

    Given user logged into the portal
    When user add in item "Sauce Labs Backpack" into the basket
    And go to cart
    And checkout with any address
    And finish the order
    Then he should see a success message


  Scenario: Verify that user can buy 2 items and get confirmation

    Given user logged into the portal
    When user add in item "Sauce Labs Backpack" into the basket
    When user add in item "Sauce Labs Bike Light" into the basket
    And go to cart
    And checkout with any address
    And finish the order
    And take a screen shot
    Then he should see a success message

  Scenario: Verify that user can buy 2 items and get confirmation

    Given user logged into the portal
    When user add in item "Sauce Labs Backpack" into the basket
    And go to cart
    And Continue shopping
    When user add in item "Sauce Labs Bike Light" into the basket
    And checkout with any address
    And finish the order
    And take a screen shot
    Then he should see a success message

  Scenario: Verify that user can buy 1 item from detail page and get confirmation

    Given user logged into the portal
    When user add in item "Sauce Labs Backpack" into the basket from detail page
    And go to cart
    And checkout with any address
    And finish the order
    And take a screen shot
    Then he should see a success message


