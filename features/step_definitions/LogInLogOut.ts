import {Given, When, Then} from "@wdio/cucumber-framework";
import WelcomeScreen from "../../src/screens/WelcomeScreen";
import MainScreen from "../../src/screens/MainScreen";
import SlideMenu from "../../src/components/SlideMenu";
import LoginScreen from "../../src/screens/LoginScreen";
import MyAccountScreen from "../../src/screens/MyAccountScreen";

Given(/^I am on the main screen step one\.$/, async () => {
    await WelcomeScreen.nav.clickOnSkipBtn();
    await expect(await (await MainScreen.header.title).getText()).toEqual("eCommerce App");
});

When(/^I tap on the Menu button\.$/, async () => {
    await MainScreen.header.clickOnSlideMenuBtn();
});

When(/^I tap on the My Account button\.$/, async () => {
    await SlideMenu.clickOnMyAccountBtn();
});

Then(/^I should be redirected to the Login screen\. Title (.*) is present\.$/, async (title) => {
    await expect(await (await LoginScreen.header.title).getText()).toEqual(title);
});

When(/^I fill Email (.*) and Password (.*) and click on LOGIN button\.$/, async (email, password) => {
    await LoginScreen.fillEmail(email);
    await LoginScreen.fillPassword(password);
    await LoginScreen.clickOnLoginBtn();
});

Then(/^I should be redirected to the My Account screen\. Title (.*) is present\.$/, async (title) => {
    await $("//*[@text=\"My Account\"]").waitForDisplayed({timeout: 5000});
    await expect(await (await MyAccountScreen.header.title).getText()).toEqual(title);
});

When(/^I click on LOGOUT button\.$/, async () => {
    await MyAccountScreen.clickOnLogOutBtn();
});