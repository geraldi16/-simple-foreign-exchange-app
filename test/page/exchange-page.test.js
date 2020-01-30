import puppeteer from "puppeteer";

/**
 * This test will be about user changing amount
 *
 * @description
 * This test will simulate using the app in these following steps:
 * 1. User open the page
 * 2. User click amount input on the top page
 * 3. User type 125 at the start of text field
 *
 */
test("Changing amount value", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://simple-exchange-rate.herokuapp.com/");
  await page.click("input#amount-input");
  await page.type("input#amount-input", "125");

  const text = await page.$eval("#amount-input", el => el.value);

  expect(text).toBe("12510.000");
}, 30000);

/**
 * This test will be about user add new currency rate
 *
 * @description
 * This test will simulate user add new rate in these following steps:
 * 1. User open the page
 * 2. click input rate below
 * 3. type 'idr'
 * 4. click submit
 * 5. check if IDR currency is added to the page
 */
test("Adding new currency state to the page", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://simple-exchange-rate.herokuapp.com/");
  await page.waitForSelector("button#remove-btn-CAD", {
    visible: true
  });

  // check if element not exist before adding
  const elementNotExist = await page.$("#remove-btn-IDR");
  expect(elementNotExist).toBeNull();

  await page.click("input#rate-input");
  await page.type("input#rate-input", "idr");
  await page.click("button#add-submit");

  const elementExist = await page.$("#remove-btn-IDR");
  expect(elementExist).not.toBeNull();
}, 30000);

/**
 * This test will be about user removing currency rate
 *
 * @description
 * This test will simulate user to remove exchange rate from page:
 * 1. open the page
 * 2. wait until page finish load
 * 3. click button x on component with currency name CAD
 * 4. component rate removed
 * 5. check if currency is gone from the page
 */
test("Remove currency from page", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://simple-exchange-rate.herokuapp.com/");
  await page.waitForSelector("button#remove-btn-CAD", {
    visible: true
  });

  // check element is exist before removal
  const elementExist = await page.$("#remove-btn-CAD");
  expect(elementExist).not.toBeNull();

  await page.click("button#remove-btn-CAD");

  const elementNotExist = await page.$("#remove-btn-CAD");
  expect(elementNotExist).toBeNull();
}, 30000);
