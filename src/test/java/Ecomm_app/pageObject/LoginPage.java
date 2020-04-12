package Ecomm_app.pageObject;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage extends basePage {
    @FindBy(how = How.ID,using = "user-name")
    WebElement username;
    @FindBy(how = How.ID,using = "password")
    WebElement password;
    @FindBy(how = How.CLASS_NAME,using = "btn_action")
    WebElement submitbtn;

    public  void Login(String usrnmData,String pwdData){
        username.sendKeys(usrnmData);
        password.sendKeys(pwdData);
        submitbtn.click();
    }

}
