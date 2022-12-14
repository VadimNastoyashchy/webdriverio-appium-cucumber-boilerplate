import Header from "../components/Header";

class MainScreen {
    header = Header;

    public get clothingCategory() {
        return $("//*[@text=\"Clothing\"]");
    }

    public get womenClothingCategory() {
        return $("//*[@text=\"Women\"]");
    }

    public get topsClothingCategory() {
        return $("//*[@text=\"Tops\"]");
    }

    public get firstProductItem() {
        return $(".android.widget.ImageView");
    }
}

export default new MainScreen();