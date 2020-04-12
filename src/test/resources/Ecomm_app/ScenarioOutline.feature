@test1
Feature: scenario outline

  As a customer
  I want to buy an item
  So that i can see the confirmation screen

  Scenario Outline: Verify that user can buy 1 item and get confirmation
    And I navigate to url "<URL>"
    When I Click on Username
    And Enter username "<username>"
    And Click on password
    And Enter password "<password>"
    And I Click on Login
    And sort the items by "<sort>"
    When user add in item "<product>" into the basket
    Then the item is successfully added to basket
    And checkout with "<first_name>" "<last_name>" "<zip>" address
    And finish the order
    Then he should see a success message
    Examples:
      | URL                        | username                | password     |sort                 | product                 |first_name|last_name|zip |
      | https://www.saucedemo.com/ | standard_user           | secret_sauce | Name (A to Z)       |Sauce Labs Backpack      | Ram      | Vaddaji |Rg21|
      | https://www.saucedemo.com/ | locked_out_user         | secret_sauce | Name (Z to A)       |Sauce Labs Fleece Jacket | Ram      |Vaddaji  |RG21|
      | https://www.saucedemo.com/ | standard_user           | secret_sauce | Price (low to high) |Sauce Labs Onesie        | Ram      |Sad      |Rg30|
      | https://www.saucedemo.com/ | performance_glitch_user | secret_sauce | Price (high to low) |Sauce Labs Fleece Jacket | Vani     |Lila     |Rg40|

