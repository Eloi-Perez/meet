import puppeteer from 'puppeteer';
/**/

describe('show/hide an event details', () => {

    let page, browser;
    beforeAll(async () => { // npm start should be running before test
        jest.setTimeout(30000);
        browser = await puppeteer.launch();
        // browser = await puppeteer.launch({
        //     headless: false,
        //     slowMo: 250,
        //     ignoreDefaultArgs: ['--disable-extensions'] // avoid timeout error
        // });
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        // await page.screenshot({ path: 'example.png' });
        await page.waitForSelector('.event-container');
    });
    afterAll(() => {
        browser.close();
    });

    test('An event element is collapsed by default', async () => {
        const eventDetails = await page.$('.event-container .event-details');
        expect(eventDetails).toBeNull();
    });
    test('User can expand an event to see its details', async () => {
        await page.click('.event-container .details-btn');
        const eventDetails = await page.$('.event-container .event-details');
        expect(eventDetails).toBeDefined();
    });
    test('User can collapse an event to hide its details', async () => {
        await page.click('.event-container .details-btn');
        const eventDetails = await page.$('.event-container .event-details');
        expect(eventDetails).toBeNull();
    });

});



// describe('filter events by city', () => {

//     let page, browser;
//     beforeAll(async () => {
//         jest.setTimeout(30000);
//         browser = await puppeteer.launch();
//         page = await browser.newPage();
//         await page.goto('http://localhost:3000/');
//         await page.waitForSelector('.EventList');
//     });
//     afterAll(() => {
//         browser.close();
//     });

//     test('When user hasn’t searched for a city, show upcoming events from all cities', async () => {
//         const events = await page.$('.EventList');
//         expect(events).toBe();
//     });
//     test('user should see a list of suggestions when they search for a city', async () => {
//         page.type('.cityInput', 'Berlin');
//     });
//     test('user can select a city from the suggested list', async () => {
//         page.type('.cityInput', 'Berlin');
//     });
// });


