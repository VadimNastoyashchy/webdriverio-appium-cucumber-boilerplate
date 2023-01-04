import { join } from "path";

exports.config = {
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: "./tsconfig.json"
        }
    },
    port: 4723,
    specs: ["./features/**/*.feature"],
    exclude: [],
    maxInstances: 2,
    capabilities: [
        {
            platformName: "Android",
            maxInstances: 1,
            "appium:avd": "Pixel_XL_API_29",
            "appium:deviceName": "Pixel_XL_10.0",
            "appium:platformVersion": "10.0",
            "appium:orientation": "PORTRAIT",
            "appium:automationName": "UiAutomator2",
            "appium:app": join(process.cwd(), "app/E-Commerce App_1.8_apkcombo.com.apk"),
            "appium:appWaitActivity": "com.studiobluelime.ecommerceapp.WelcomeActivity",
            "appium:newCommandTimeout": 240,
        },
    ],
    logLevel: "info",
    bail: 0,
    baseUrl: "http://localhost",
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        [
            "appium",
            {
                args: {
                    address: "localhost",
                    port: 4723,
                },
                logPath: "./",
            },
        ],
    ],
    framework: "cucumber",
    reporters: ["spec"],
    cucumberOpts: {
        require: ["./features/step_definitions/*.ts",],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: "",
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
};