import Header from "../components/Header";

class LoginScreen {
    public header = Header;

    private get emailInputField() {
        return $("//*[@text=\"Email\"]");
    }

    private get passwordInputField() {
        return $("//*[@text=\"Password\"]");
    }

    public get loginBtn() {
        return $("//*[@text=\"LOGIN\"]");
    }

    public async fillEmail(email: string) {
        await (await this.emailInputField).setValue(email);
    }

    public async fillPassword(password: string) {
        await (await this.passwordInputField).setValue(password);
    }
}

export default new LoginScreen();