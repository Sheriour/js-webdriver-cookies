import { ServiceBuilder, Options, Driver } from "selenium-webdriver/chrome.js"

const driverPath: string = "./test/chromedriver/chromedriver";


//Recommended, and much simpler. This supresses annoying errors I couldn't resolve.
export default function getDriver(){
    const options = new Options()
        .excludeSwitches('enable-logging');
    return Driver.createSession(options);
}

/*No longer used as I couldn't get the chrome options to work with it
This doesn't seem to work... But Selenium4 has a better way of spawning the driver, check exports.getDriver instead
setting chrome options to get rid of "Error parsing cert retrieved from AIA (as DER)" error*/

/*import { Builder, Capabilities } from "selenium-webdriver"
const serviceBuilder: ServiceBuilder = new ServiceBuilder(driverPath);

export function getDriverOld(){
    const options = new Options();
    const chromeCapabilities = Capabilities.chrome();

    const chromeOptions = {
        'args': ['--ignore-certificate-errors', '--start-maximized'] //, '--start-maximized'
    };
    options.add_experimental_option('excludeSwitches', ['enable-logging'])
    chromeCapabilities.set('chromeOptions', chromeOptions);

    return new Builder()
    .forBrowser('chrome')
    .withCapabilities(chromeCapabilities)
    .setChromeService(serviceBuilder)
    .build();
}*/