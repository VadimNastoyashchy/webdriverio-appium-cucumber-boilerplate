class SnackBar {

    public get loginMessage() {
        return $("//*[@text=\"Please Login First\"]");
    }
}

export default new SnackBar();