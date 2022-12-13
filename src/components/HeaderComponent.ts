class HeaderComponent {

    public get title() {
        return $("//*[@text=\"eCommerce App\"]");
    }

}

export default new HeaderComponent();