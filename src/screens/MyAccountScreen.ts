import Header from "../components/Header";

class MyAccountScreen {

    public header = Header;

    public get logOutBtn() {
        return $("//*[@text=\"LOGOUT\"]");
    }
}

export default new MyAccountScreen();