import Header from "../components/Header";
import SnackBar from "../components/SnackBar";

class ProductDetailsScreen {

    public header = Header;
    public snackBar = SnackBar;

    public get plusBtn() {
        return $("//*[@text=\"+\"]");
    }

    public get buyNowBtn() {
        return $("//*[@text=\"  BUY NOW  \"]");
    }
}

export default new ProductDetailsScreen();