package Ecomm_app.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class homePage extends basePage {
    @FindBy(how = How.CLASS_NAME, using = "product_sort_container")
    WebElement sortItems;

    @FindBy(how = How.XPATH, using = "//*[@data-icon=\"shopping-cart\"]")
    WebElement IteminCart;

    @FindBy(how = How.CLASS_NAME, using = "inventory_item")
    List<WebElement> elementList;


    @FindBy(how = How.TAG_NAME, using = "tr")
    List<WebElement> values;

    public void ClickaddToCart(String productName) {
        int counter = 1;
        for (WebElement element : elementList) {

            if (element.getText().contains(productName)) {
                System.out.println("Product name found at " + counter);
                element.findElement(By.tagName("button")).click();
            }
            counter++;

        }
    }

    public  void CartIconClick(){
        IteminCart.click();
    }

    public void SortDropDown(String dropDownValue){
        Select price = new Select(sortItems);
        price.selectByVisibleText(dropDownValue);
    }
    public void GotoProductPAge(){


    }
}
