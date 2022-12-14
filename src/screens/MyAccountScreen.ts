import HeaderComponent from "../components/HeaderComponent";

class MyAccountScreen {

    public header = HeaderComponent;

    private get logOutBtn() {
        return $("//*[@text=\"LOGOUT\"]");
    }

    public async clickOnLogOutBtn() {
        await (await this.logOutBtn).click();
    }
}

export default new MyAccountScreen();