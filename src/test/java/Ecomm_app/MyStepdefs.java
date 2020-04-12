package Ecomm_app;

import Ecomm_app.pageObject.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class MyStepdefs extends TestRunner {
    String ProductName;

    @Before
    public void setwindows() {
        browser.manage().window().maximize();
    }

    @After
    public void close(Scenario scenario) {

        if (scenario.isFailed()) {
            scenario.write("Please inform this bug to john");
            // Take a screenshot...
            final byte[] screenshot = ((TakesScreenshot) browser).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot, "image/png"); // ... and embed it in the report.
        }

    }

    @Given("^user logged into the portal$")
    public void userLoggedIntoThePortal() {
        browser.get("https://www.saucedemo.com/");
        //enter username
       /* WebElement username = browser.findElement(By.id("user-name"));
        username.sendKeys("standard_user");
        //enter password
        WebElement password = browser.findElement(By.id("password"));
        password.sendKeys("secret_sauce");
        //Click on Login
        WebElement submitbtn = browser.findElement(By.className("btn_action"));
        submitbtn.click();
        */
        LoginPage loginPageObject = new LoginPage();
        loginPageObject.Login("standard_user","secret_sauce");
    }

    @When("^user add in item \"([^\"]*)\" into the basket$")
    public void theAddInItemIntoTheBasket(String product) throws Throwable {
        ProductName = product;
        // for looping
        List<WebElement> elementList = browser.findElements(By.className("inventory_item"));
        int counter = 1;
        for (WebElement element : elementList) {

            if (element.getText().contains(product)) {
                System.out.println("Product name found at " + counter);
                element.findElement(By.tagName("button")).click();
            }
            counter++;
        }
        Thread.sleep(3000);
    }

    @And("^go to cart$")
    public void goToCart() throws InterruptedException {
        Thread.sleep(3000);
        WebElement BasketButton =
                browser.findElement(By.xpath("//*[@data-icon='shopping-cart']"));
        BasketButton.click();
    }

    @And("^checkout with any address$")
    public void checkoutWithAnyAddress() throws InterruptedException {
        Thread.sleep(3000);
        WebElement Checkoutbtn =
                browser.findElement(By.xpath("//a[text()='CHECKOUT']"));
        Checkoutbtn.click();
        WebElement FirstName = browser.findElement(By.xpath("//input[@id = 'first-name']"));
        FirstName.sendKeys("Ram");
        WebElement LastName = browser.findElement(By.xpath("//input[@id='last-name']"));
        LastName.sendKeys("Test");
        WebElement Postcode = browser.findElement(By.xpath("//input[@id='postal-code']"));
        Postcode.sendKeys("Rg21");
        WebElement Continuebtn = browser.findElement(By.xpath("//input[@type='submit']"));
        Continuebtn.click();
        Thread.sleep(4000);
    }

    @And("^finish the order$")
    public void finishTheOrder() throws InterruptedException {
        Thread.sleep(5000);
        WebElement Finishbtn = browser.findElement(By.xpath("//a[text()='FINISH']"));
        Finishbtn.click();
    }

    @Then("^he should see a success message$")
    public void heShouldSeeASuccessMessage() {
        WebElement ThankyouInfo = browser.findElement(By.xpath("//h2[@class='complete-header']"));
        String FinishInfo = ThankyouInfo.getText();
        Assert.assertTrue(FinishInfo.contains("THANK YOU FOR YOUR ORDER"));
    }

    @And("^take a screen shot$")
    public void takeAScreenShot() {
        System.out.println("screenshot");
    }

    @And("^Continue shopping$")
    public void continueShopping() {
        WebElement continueShopping = browser.findElement(By.className("btn_secondary"));
        continueShopping.click();
    }

    @When("^user add in item \"([^\"]*)\" into the basket from detail page$")
    public void theAddInItemIntoTheBasketFromDetailPage(String product) throws Throwable {
        ProductName = product;
        List<WebElement> elementList = browser.findElements(By.className("inventory_item"));
        int counter = 1;
        for (WebElement element : elementList) {
            if (element.getText().contains(product)) {
                System.out.println("Product name found at " + counter);
                element.findElement(By.className("inventory_item_name")).click();
                break;
            }
            counter++;
        }
        Thread.sleep(3000);
        browser.findElement(By.xpath("//*[@id=\"inventory_item_container\"]/div/div/div/button")).click();

    }

    @And("^Enter username \"([^\"]*)\"$")
    public void enterUsername(String username) {
        WebElement element = browser.findElement(By.id("user-name"));
        element.sendKeys(username);
    }

    @And("^I navigate to url \"([^\"]*)\"$")
    public void iNavigateToUrl(String url) throws Throwable {
        browser.get(url);
    }

    @When("^I Click on Username$")
    public void iClickOnUsername() {
        WebElement element = browser.findElement(By.id("user-name"));
        element.click();
    }

    @And("^Click on password$")
    public void clickOnPassword() {
        WebElement passwordField = browser.findElement(By.id("password"));
        passwordField.click();
    }

    @And("^Enter password \"([^\"]*)\"$")
    public void enterPassword(String password) throws Throwable {
        WebElement passwordField = browser.findElement(By.id("password"));
        passwordField.sendKeys(password);
    }

    @And("^I Click on Login$")
    public void iClickOnLogin() {
        WebElement submitBtn = browser.findElement(By.className("btn_action"));
        submitBtn.click();
    }

    @And("^sort the items by \"([^\"]*)\"$")
    public void sortTheItemsBy(String sort) throws Throwable {
        WebElement drpDown = browser.findElement(By.className("product_sort_container"));
    Select price = new Select(drpDown);
    price.selectByVisibleText(sort);
    }

    @Then("^the item is successfully added to basket$")
    public void theItemIsSuccessfullyAddedToBasket() throws InterruptedException {
        //Clicking on add to cart to see the presence of item
        Thread.sleep(3000);
        WebElement IteminCart = browser.findElement(By.xpath("//*[@data-icon=\"shopping-cart\"]"));
        IteminCart.click();

        //Assertion to find out whether the selected item is in the cart.

        WebElement ProductinCart = browser.findElement(By.className("inventory_item_name"));
        ProductinCart.getText();
       // System.out.println("ProductinCart");
        String actual = ProductinCart.getText();
        String Expected = ProductName;
        Assert.assertEquals(ProductName, ProductinCart.getText());
    }

    @And("^checkout with \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" address$")
    public void checkoutWithAddress(String first_name, String last_name, String zip) throws Throwable {
        Thread.sleep(3000);
        WebElement Checkoutbtn = browser.findElement(By.xpath("//a[text()='CHECKOUT']"));
        Checkoutbtn.click();
        WebElement FirstName = browser.findElement(By.xpath("//input[@id = 'first-name']"));
        FirstName.sendKeys(first_name);
        WebElement LastName = browser.findElement(By.xpath("//input[@id='last-name']"));
        LastName.sendKeys(last_name);
        WebElement Postcode = browser.findElement(By.xpath("//input[@id='postal-code']"));
        Postcode.sendKeys(zip);
        WebElement Continuebtn = browser.findElement(By.xpath("//input[@type='submit']"));
        Continuebtn.click();
        Thread.sleep(4000);
    }

}
