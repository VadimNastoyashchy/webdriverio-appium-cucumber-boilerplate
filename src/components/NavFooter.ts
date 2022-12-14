class NavFooter {

    public get skipBnt() {
        return $("//*[@text=\"SKIP\"]");
    }

    public get nextBtn() {
        return $("//*[@text=\"NEXT\"]");
    }

    public get gotItBtn() {
        return $("//*[@text=\"GOT IT\"]");
    }
}

export default new NavFooter();