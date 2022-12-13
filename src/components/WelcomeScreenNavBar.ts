class WelcomeScreenNavBar {

    private get skipBnt() {
        return $("//*[@text=\"SKIP\"]");
    }

    private get nextBtn() {
        return $("//*[@text=\"NEXT\"]");
    }

    private get gotItbtn() {
        return $("//*[@text=\"GOT IT\"]");
    }

    public async clickOnNextBtn() {
        await (await this.nextBtn).click();
    }

    public async clickOnGotItBtn() {
        await (await this.gotItbtn).click();
    }

}

export default new WelcomeScreenNavBar();