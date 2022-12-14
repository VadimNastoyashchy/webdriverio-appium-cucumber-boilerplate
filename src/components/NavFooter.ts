class NavFooter {

    private get skipBnt() {
        return $("//*[@text=\"SKIP\"]");
    }

    private get nextBtn() {
        return $("//*[@text=\"NEXT\"]");
    }

    private get gotItBtn() {
        return $("//*[@text=\"GOT IT\"]");
    }

    public async clickOnNextBtn() {
        await (await this.nextBtn).click();
    }

    public async clickOnGotItBtn() {
        await (await this.gotItBtn).click();
    }

    public async clickOnSkipBtn() {
        await (await this.skipBnt).click();
    }

}

export default new NavFooter();