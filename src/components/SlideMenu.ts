class SlideMenu {

    private get myAccountBtn() {
        return $("//*[@text=\"My Account\"]");
    }

    public async clickOnMyAccountBtn() {
        await (await this.myAccountBtn).click();
    }
}

export default new SlideMenu();