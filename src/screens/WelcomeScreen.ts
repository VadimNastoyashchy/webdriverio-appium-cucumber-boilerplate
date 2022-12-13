import WelcomeScreenNavBar from "../components/WelcomeScreenNavBar";

class StepOne {
    public get title() {
        return $("//*[@text=\"E Commerce App\"]");
    }

    public get subTitle() {
        return $("//*[@text=\"The Easiest Way To Order Products From This App !\"]");
    }

}

class StepTwo {
    public get title() {
        return $("//*[@text=\"New Arrivals\"]");
    }

    public get subTitle() {
        return $("//*[@text=\"Get New Products On One Touch !\"]");
    }
}

class StepThird {
    public get title() {
        return $("//*[@text=\"Sale\"]");
    }

    public get subTitle() {
        return $("//*[@text=\"Great Discounts On Many Products !\"]");
    }
}

class WelcomeScreen {
    navBar = WelcomeScreenNavBar;
    stepOne = new StepOne();
    stepTwo = new StepTwo();
    stepThird = new StepThird();
}

export default new WelcomeScreen();