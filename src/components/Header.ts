class Header {

    public get slideMenuBtn() {
        return $("//android.widget.ImageButton[@content-desc=\"App\"]");
    }

    public get title() {
        return $(".android.widget.TextView");
    }
}

export default new Header();