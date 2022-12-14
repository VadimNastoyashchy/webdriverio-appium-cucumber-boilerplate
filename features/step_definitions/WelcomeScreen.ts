import {Given, Then, When} from "@wdio/cucumber-framework";
import WelcomeScreen from "../../src/screens/WelcomeScreen";
import MainScreen from "../../src/screens/MainScreen";

Given(/^I am on the welcome screen step one\. Title (.*) and subTitle (.*) is present\.$/, async (title, subtitle) => {
    await expect(await (await WelcomeScreen.stepOne.title).getText()).toEqual(title);
    await expect(await (await WelcomeScreen.stepOne.subTitle).getText()).toEqual(subtitle);
});

When(/^I tap on the Next button\.$/, async () => {
    await WelcomeScreen.nav.clickOnNextBtn();
});

Then(/^I should be redirected to the welcome screen step two\. Title (.*) and subTitle (.*) is present\.$/, async (title, subtitle) => {
    await expect(await (await WelcomeScreen.stepTwo.title).getText()).toEqual(title);
    await expect(await (await WelcomeScreen.stepTwo.subTitle).getText()).toEqual(subtitle);
});

Then(/^I should be redirected to the welcome screen step third\. Title (.*) and subTitle (.*) is present\.$/, async (title, subtitle) => {
    await expect(await (await WelcomeScreen.stepThird.title).getText()).toEqual(title);
    await expect(await (await WelcomeScreen.stepThird.subTitle).getText()).toEqual(subtitle);
});

When(/^I tap on the Got It button\.$/, async () => {
    await WelcomeScreen.nav.clickOnGotItBtn();
});

Then(/^I should be redirected to the main screen\. App header Title (.*) is present\.$/, async (title) => {
    await expect(await (await MainScreen.header.title).getText()).toEqual(title);
});