package Ecomm_app;

import cucumber.api.CucumberOptions;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.junit.Cucumber;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;


@RunWith(Cucumber.class)
@CucumberOptions(
        plugin ={"pretty","html:target/cucumber-html-report"},
        tags = {"@test1"}
)
public class TestRunner {
    public static WebDriver browser;

    @BeforeClass
    public static void initBrowser(){
        WebDriverManager.chromedriver().setup();
        browser = new ChromeDriver();
    }
    @AfterClass
    public static void close(){
        browser.quit();
    }
}

