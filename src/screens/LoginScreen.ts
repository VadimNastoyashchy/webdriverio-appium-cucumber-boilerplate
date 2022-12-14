import HeaderComponent from "../components/HeaderComponent";

class LoginScreen {
    public header = HeaderComponent;

    private get emailInputField() {
        return $("//*[@text=\"Email\"]");
    }

    private get passwordInputField() {
        return $("//*[@text=\"Password\"]");
    }

    private get loginBtn() {
        return $("//*[@text=\"LOGIN\"]");
    }

    public async fillEmail(email: string) {
        await (await this.emailInputField).setValue(email);
    }

    public async fillPassword(password: string) {
        await (await this.passwordInputField).setValue(password);
    }

    public async clickOnLoginBtn() {
        await (await this.loginBtn).click();
    }
}

export default new LoginScreen();