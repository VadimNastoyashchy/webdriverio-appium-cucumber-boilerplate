import { When, Then } from "@wdio/cucumber-framework";
import MainScreen from "../../src/screens/MainScreen";
import Swipe from "../../src/Swipe";
import ProductDetailsScreen from "../../src/screens/ProductDetailsScreen";

When(/^I tap on the Clothing category\.$/, async () => {
    await (await MainScreen.clothingCategory).click();
});

When(/^I tap on the Women category\.$/, async () => {
    await Swipe.down();
    await (await MainScreen.womenClothingCategory).click();
});

When(/^I tap on the Tops category\.$/, async () => {
    await (await MainScreen.topsClothingCategory).click();
});

When(/^I tap on the first product item\.$/, async () => {
    await (await MainScreen.firstProductItem).click();
});

Then(/^I should be redirected to the Product details screen\. Title (.*) is present\.$/, async (title) => {
    await expect(await (await ProductDetailsScreen.header.title).getText()).toEqual(title);
});

When(/^I add one item and tap on BUY NOW button\.$/, async () => {
    await (await ProductDetailsScreen.plusBtn).click();
    await (await ProductDetailsScreen.buyNowBtn).click();
});

Then(/^An Error modal is shown\. Error message (.*) is present\.$/, async (message) => {
    await expect(await (await ProductDetailsScreen.snackBar.loginMessage).getText()).toEqual(message);
});