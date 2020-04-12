$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Ecomm_app/EndtoEnd.feature");
formatter.feature({
  "line": 2,
  "name": "End to End",
  "description": "\r\nAs a customer\r\nI want to buy an item\r\nSo that i can see the confirmation screen",
  "id": "end-to-end",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@test1"
    }
  ]
});
formatter.before({
  "duration": 2162815700,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify that  user can buy 1 item and get confirmation",
  "description": "",
  "id": "end-to-end;verify-that--user-can-buy-1-item-and-get-confirmation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "user logged into the portal",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user add in item \"Sauce Labs Backpack\" into the basket",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "go to cart",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "checkout with any address",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "finish the order",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "he should see a success message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userLoggedIntoThePortal()"
});
formatter.result({
  "duration": 2619309500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Backpack",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.theAddInItemIntoTheBasket(String)"
});
formatter.result({
  "duration": 3216849600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.goToCart()"
});
formatter.result({
  "duration": 3153742100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.checkoutWithAnyAddress()"
});
formatter.result({
  "duration": 7761033900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.finishTheOrder()"
});
formatter.result({
  "duration": 5170055500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heShouldSeeASuccessMessage()"
});
formatter.result({
  "duration": 46231700,
  "status": "passed"
});
formatter.after({
  "duration": 103499,
  "status": "passed"
});
formatter.before({
  "duration": 8628699,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify that user can buy 2 items and get confirmation",
  "description": "",
  "id": "end-to-end;verify-that-user-can-buy-2-items-and-get-confirmation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "user logged into the portal",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "user add in item \"Sauce Labs Backpack\" into the basket",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user add in item \"Sauce Labs Bike Light\" into the basket",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "go to cart",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "checkout with any address",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "finish the order",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "take a screen shot",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "he should see a success message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userLoggedIntoThePortal()"
});
formatter.result({
  "duration": 644552899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Backpack",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.theAddInItemIntoTheBasket(String)"
});
formatter.result({
  "duration": 3208325100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Bike Light",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.theAddInItemIntoTheBasket(String)"
});
formatter.result({
  "duration": 3176030500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.goToCart()"
});
formatter.result({
  "duration": 3165484200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.checkoutWithAnyAddress()"
});
formatter.result({
  "duration": 7607073601,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.finishTheOrder()"
});
formatter.result({
  "duration": 5312978100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.takeAScreenShot()"
});
formatter.result({
  "duration": 68599,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heShouldSeeASuccessMessage()"
});
formatter.result({
  "duration": 78705001,
  "status": "passed"
});
formatter.after({
  "duration": 34299,
  "status": "passed"
});
formatter.before({
  "duration": 21218801,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Verify that user can buy 2 items and get confirmation",
  "description": "",
  "id": "end-to-end;verify-that-user-can-buy-2-items-and-get-confirmation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "user logged into the portal",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "user add in item \"Sauce Labs Backpack\" into the basket",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "go to cart",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Continue shopping",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user add in item \"Sauce Labs Bike Light\" into the basket",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "checkout with any address",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "finish the order",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "take a screen shot",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "he should see a success message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userLoggedIntoThePortal()"
});
formatter.result({
  "duration": 844517699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Backpack",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.theAddInItemIntoTheBasket(String)"
});
formatter.result({
  "duration": 3373065201,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.goToCart()"
});
formatter.result({
  "duration": 3172772000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.continueShopping()"
});
formatter.result({
  "duration": 116243800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Bike Light",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.theAddInItemIntoTheBasket(String)"
});
formatter.result({
  "duration": 3014688700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.checkoutWithAnyAddress()"
});
formatter.result({
  "duration": 7832897000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.finishTheOrder()"
});
formatter.result({
  "duration": 5208519200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.takeAScreenShot()"
});
formatter.result({
  "duration": 507900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heShouldSeeASuccessMessage()"
});
formatter.result({
  "duration": 46551300,
  "status": "passed"
});
formatter.after({
  "duration": 37300,
  "status": "passed"
});
formatter.before({
  "duration": 8446000,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Verify that user can buy 1 item from detail page and get confirmation",
  "description": "",
  "id": "end-to-end;verify-that-user-can-buy-1-item-from-detail-page-and-get-confirmation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 44,
  "name": "user logged into the portal",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "user add in item \"Sauce Labs Backpack\" into the basket from detail page",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "go to cart",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "checkout with any address",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "finish the order",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "take a screen shot",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "he should see a success message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userLoggedIntoThePortal()"
});
formatter.result({
  "duration": 625275101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Backpack",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.theAddInItemIntoTheBasketFromDetailPage(String)"
});
formatter.result({
  "duration": 3330411600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.goToCart()"
});
formatter.result({
  "duration": 3213544400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.checkoutWithAnyAddress()"
});
formatter.result({
  "duration": 7537114800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.finishTheOrder()"
});
formatter.result({
  "duration": 5127071999,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.takeAScreenShot()"
});
formatter.result({
  "duration": 197599,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heShouldSeeASuccessMessage()"
});
formatter.result({
  "duration": 50935299,
  "status": "passed"
});
formatter.after({
  "duration": 31501,
  "status": "passed"
});
formatter.uri("Ecomm_app/ScenarioOutline.feature");
formatter.feature({
  "line": 2,
  "name": "scenario outline",
  "description": "\r\nAs a customer\r\nI want to buy an item\r\nSo that i can see the confirmation screen",
  "id": "scenario-outline",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@test1"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Verify that user can buy 1 item and get confirmation",
  "description": "",
  "id": "scenario-outline;verify-that-user-can-buy-1-item-and-get-confirmation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I navigate to url \"\u003cURL\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Click on Username",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Enter username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Click on password",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "sort the items by \"\u003csort\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user add in item \"\u003cproduct\u003e\" into the basket",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the item is successfully added to basket",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "checkout with \"\u003cfirst_name\u003e\" \"\u003clast_name\u003e\" \"\u003czip\u003e\" address",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "finish the order",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "he should see a success message",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "scenario-outline;verify-that-user-can-buy-1-item-and-get-confirmation;",
  "rows": [
    {
      "cells": [
        "URL",
        "username",
        "password",
        "sort",
        "product",
        "first_name",
        "last_name",
        "zip"
      ],
      "line": 22,
      "id": "scenario-outline;verify-that-user-can-buy-1-item-and-get-confirmation;;1"
    },
    {
      "cells": [
        "https://www.saucedemo.com/",
        "standard_user",
        "secret_sauce",
        "Name (A to Z)",
        "Sauce Labs Backpack",
        "Ram",
        "Vaddaji",
        "Rg21"
      ],
      "line": 23,
      "id": "scenario-outline;verify-that-user-can-buy-1-item-and-get-confirmation;;2"
    },
    {
      "cells": [
        "https://www.saucedemo.com/",
        "locked_out_user",
        "secret_sauce",
        "Name (Z to A)",
        "Sauce Labs Fleece Jacket",
        "Ram",
        "Vaddaji",
        "RG21"
      ],
      "line": 24,
      "id": "scenario-outline;verify-that-user-can-buy-1-item-and-get-confirmation;;3"
    },
    {
      "cells": [
        "https://www.saucedemo.com/",
        "standard_user",
        "secret_sauce",
        "Price (low to high)",
        "Sauce Labs Onesie",
        "Ram",
        "Sad",
        "Rg30"
      ],
      "line": 25,
      "id": "scenario-outline;verify-that-user-can-buy-1-item-and-get-confirmation;;4"
    },
    {
      "cells": [
        "https://www.saucedemo.com/",
        "performance_glitch_user",
        "secret_sauce",
        "Price (high to low)",
        "Sauce Labs Fleece Jacket",
        "Vani",
        "Lila",
        "Rg40"
      ],
      "line": 26,
      "id": "scenario-outline;verify-that-user-can-buy-1-item-and-get-confirmation;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11974500,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify that user can buy 1 item and get confirmation",
  "description": "",
  "id": "scenario-outline;verify-that-user-can-buy-1-item-and-get-confirmation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I navigate to url \"https://www.saucedemo.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Click on Username",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Enter username \"standard_user\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Click on password",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Enter password \"secret_sauce\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "sort the items by \"Name (A to Z)\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user add in item \"Sauce Labs Backpack\" into the basket",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the item is successfully added to basket",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "checkout with \"Ram\" \"Vaddaji\" \"Rg21\" address",
  "matchedColumns": [
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "finish the order",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "he should see a success message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.saucedemo.com/",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.iNavigateToUrl(String)"
});
formatter.result({
  "duration": 52883200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnUsername()"
});
formatter.result({
  "duration": 75682700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 16
    }
  ],
  "location": "MyStepdefs.enterUsername(String)"
});
formatter.result({
  "duration": 90496800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clickOnPassword()"
});
formatter.result({
  "duration": 70185601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 16
    }
  ],
  "location": "MyStepdefs.enterPassword(String)"
});
formatter.result({
  "duration": 83701899,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLogin()"
});
formatter.result({
  "duration": 301126900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (A to Z)",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.sortTheItemsBy(String)"
});
formatter.result({
  "duration": 1345519600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Backpack",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.theAddInItemIntoTheBasket(String)"
});
formatter.result({
  "duration": 3203222901,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.theItemIsSuccessfullyAddedToBasket()"
});
formatter.result({
  "duration": 3265534299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ram",
      "offset": 15
    },
    {
      "val": "Vaddaji",
      "offset": 21
    },
    {
      "val": "Rg21",
      "offset": 31
    }
  ],
  "location": "MyStepdefs.checkoutWithAddress(String,String,String)"
});
formatter.result({
  "duration": 7588646501,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.finishTheOrder()"
});
formatter.result({
  "duration": 5198972700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heShouldSeeASuccessMessage()"
});
formatter.result({
  "duration": 61016000,
  "status": "passed"
});
formatter.after({
  "duration": 37200,
  "status": "passed"
});
formatter.before({
  "duration": 8062700,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify that user can buy 1 item and get confirmation",
  "description": "",
  "id": "scenario-outline;verify-that-user-can-buy-1-item-and-get-confirmation;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I navigate to url \"https://www.saucedemo.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Click on Username",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Enter username \"locked_out_user\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Click on password",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Enter password \"secret_sauce\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "sort the items by \"Name (Z to A)\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user add in item \"Sauce Labs Fleece Jacket\" into the basket",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the item is successfully added to basket",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "checkout with \"Ram\" \"Vaddaji\" \"RG21\" address",
  "matchedColumns": [
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "finish the order",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "he should see a success message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.saucedemo.com/",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.iNavigateToUrl(String)"
});
formatter.result({
  "duration": 100176801,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnUsername()"
});
formatter.result({
  "duration": 119448001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "locked_out_user",
      "offset": 16
    }
  ],
  "location": "MyStepdefs.enterUsername(String)"
});
formatter.result({
  "duration": 137833999,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clickOnPassword()"
});
formatter.result({
  "duration": 86089800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 16
    }
  ],
  "location": "MyStepdefs.enterPassword(String)"
});
formatter.result({
  "duration": 222220899,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLogin()"
});
formatter.result({
  "duration": 445993000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (Z to A)",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.sortTheItemsBy(String)"
});
formatter.result({
  "duration": 63055800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"class name\",\"selector\":\"product_sort_container\"}\n  (Session info: chrome\u003d81.0.4044.92)\n  (Driver info: chromedriver\u003d81.0.4044.69 (6813546031a4bc83f717a2ef7cd4ac6ec1199132-refs/branch-heads/4044@{#776}),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 27 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.0.0\u0027, revision: \u0027350cf60\u0027, time: \u00272016-10-13 10:48:57 -0700\u0027\nSystem info: host: \u0027LAPTOP-O5A8USHH\u0027, ip: \u0027192.168.1.246\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:52996}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d81.0.4044.69 (6813546031a4bc83f717a2ef7cd4ac6ec1199132-refs/branch-heads/4044@{#776}), userDataDir\u003dC:\\Users\\Anusha\\AppData\\Local\\Temp\\scoped_dir12936_135813165}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d81.0.4044.92, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 3d8934cc18916d6d47db478819bf3fd7\n*** Element info: {Using\u003dclass name, value\u003dproduct_sort_container}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:457)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:391)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat Ecomm_app.MyStepdefs.sortTheItemsBy(MyStepdefs.java:180)\r\n\tat ✽.And sort the items by \"Name (Z to A)\"(Ecomm_app/ScenarioOutline.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Fleece Jacket",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.theAddInItemIntoTheBasket(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.theItemIsSuccessfullyAddedToBasket()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Ram",
      "offset": 15
    },
    {
      "val": "Vaddaji",
      "offset": 21
    },
    {
      "val": "RG21",
      "offset": 31
    }
  ],
  "location": "MyStepdefs.checkoutWithAddress(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.finishTheOrder()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.heShouldSeeASuccessMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Please inform this bug to john");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 430786300,
  "status": "passed"
});
formatter.before({
  "duration": 7368300,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify that user can buy 1 item and get confirmation",
  "description": "",
  "id": "scenario-outline;verify-that-user-can-buy-1-item-and-get-confirmation;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I navigate to url \"https://www.saucedemo.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Click on Username",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Enter username \"standard_user\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Click on password",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Enter password \"secret_sauce\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "sort the items by \"Price (low to high)\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user add in item \"Sauce Labs Onesie\" into the basket",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the item is successfully added to basket",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "checkout with \"Ram\" \"Sad\" \"Rg30\" address",
  "matchedColumns": [
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "finish the order",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "he should see a success message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.saucedemo.com/",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.iNavigateToUrl(String)"
});
formatter.result({
  "duration": 72984099,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnUsername()"
});
formatter.result({
  "duration": 95766101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 16
    }
  ],
  "location": "MyStepdefs.enterUsername(String)"
});
formatter.result({
  "duration": 248053000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clickOnPassword()"
});
formatter.result({
  "duration": 99671101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 16
    }
  ],
  "location": "MyStepdefs.enterPassword(String)"
});
formatter.result({
  "duration": 111887199,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLogin()"
});
formatter.result({
  "duration": 307315500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (low to high)",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.sortTheItemsBy(String)"
});
formatter.result({
  "duration": 170465201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Onesie",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.theAddInItemIntoTheBasket(String)"
});
formatter.result({
  "duration": 3206096400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.theItemIsSuccessfullyAddedToBasket()"
});
formatter.result({
  "duration": 3568765300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ram",
      "offset": 15
    },
    {
      "val": "Sad",
      "offset": 21
    },
    {
      "val": "Rg30",
      "offset": 27
    }
  ],
  "location": "MyStepdefs.checkoutWithAddress(String,String,String)"
});
formatter.result({
  "duration": 7831896100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.finishTheOrder()"
});
formatter.result({
  "duration": 5497988100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heShouldSeeASuccessMessage()"
});
formatter.result({
  "duration": 249304200,
  "status": "passed"
});
formatter.after({
  "duration": 41500,
  "status": "passed"
});
formatter.before({
  "duration": 12163300,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Verify that user can buy 1 item and get confirmation",
  "description": "",
  "id": "scenario-outline;verify-that-user-can-buy-1-item-and-get-confirmation;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I navigate to url \"https://www.saucedemo.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Click on Username",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Enter username \"performance_glitch_user\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Click on password",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Enter password \"secret_sauce\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "sort the items by \"Price (high to low)\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user add in item \"Sauce Labs Fleece Jacket\" into the basket",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the item is successfully added to basket",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "checkout with \"Vani\" \"Lila\" \"Rg40\" address",
  "matchedColumns": [
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "finish the order",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "he should see a success message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.saucedemo.com/",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.iNavigateToUrl(String)"
});
formatter.result({
  "duration": 136997101,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnUsername()"
});
formatter.result({
  "duration": 122225600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "performance_glitch_user",
      "offset": 16
    }
  ],
  "location": "MyStepdefs.enterUsername(String)"
});
formatter.result({
  "duration": 183993000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clickOnPassword()"
});
formatter.result({
  "duration": 66317101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 16
    }
  ],
  "location": "MyStepdefs.enterPassword(String)"
});
formatter.result({
  "duration": 166262701,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLogin()"
});
formatter.result({
  "duration": 5402841201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (high to low)",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.sortTheItemsBy(String)"
});
formatter.result({
  "duration": 113832501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Fleece Jacket",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.theAddInItemIntoTheBasket(String)"
});
formatter.result({
  "duration": 3213085599,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.theItemIsSuccessfullyAddedToBasket()"
});
formatter.result({
  "duration": 3268067700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vani",
      "offset": 15
    },
    {
      "val": "Lila",
      "offset": 22
    },
    {
      "val": "Rg40",
      "offset": 29
    }
  ],
  "location": "MyStepdefs.checkoutWithAddress(String,String,String)"
});
formatter.result({
  "duration": 7823403300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.finishTheOrder()"
});
formatter.result({
  "duration": 5196137299,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.heShouldSeeASuccessMessage()"
});
formatter.result({
  "duration": 88529100,
  "status": "passed"
});
formatter.after({
  "duration": 27301,
  "status": "passed"
});
});