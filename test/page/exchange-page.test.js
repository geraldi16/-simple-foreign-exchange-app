import puppeteer from "puppeteer";

/**
 * This test will be about user changing amount
 */
test("Changing amount value", async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ["--window-size=1920,1080"]
  });
  const page = await browser.newPage();

  await page.goto("https://simple-exchange-rate.herokuapp.com/");

  expect(1).toBe(1);
}, 30000);

/**
 * This test will be about user add new currency rate
 */
// test('Changing amount value', async () => {

// })

// /**
//  * This test will be about user removing currency rate
//  */
// test('Changing amount value', async () => {

// })
