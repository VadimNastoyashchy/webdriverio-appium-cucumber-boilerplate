class SlideMenu {

    public get myAccountBtn() {
        return $("//*[@text=\"My Account\"]");
    }
}

export default new SlideMenu();