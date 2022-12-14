class HeaderComponent {

    private get SlideMenuBtn() {
        return $("//android.widget.ImageButton[@content-desc=\"App\"]");
    }

    public get title() {
        return $(".android.widget.TextView");
    }

    public async clickOnSlideMenuBtn() {
        await (await this.SlideMenuBtn).click();
    }

}

export default new HeaderComponent();