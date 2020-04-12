package Ecomm_app.pageObject;

import Ecomm_app.TestRunner;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

    public abstract class basePage extends TestRunner {

        public basePage(){
            PageFactory.initElements(browser,this);
        }

        @FindBy(how = How.XPATH, using = "//*[@id=\"menu_button_container\"]/div/div[3]/div/button")
        WebElement menu;

        public void openMenu(){
            menu.click();
        }
}
