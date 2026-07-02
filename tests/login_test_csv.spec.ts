import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { readCSV } from '../utils/csvReader'


const loginData = readCSV('./test-data/loginDate.csv');

loginData.forEach((data: any) => {
    if (data.run != 'true') return;
    test(`Login Test ${data.username}`, async ({ page }) => {
        const loginPage = new LoginPage(page)
        await loginPage.login(data.username, data.password)
        if (data.expected === 'success') {
            await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
        } else
            await expect(loginPage.errorMessage).toBeVisible();

    })
})



// readCSV.forEach((data) => {
//     if (!data.run) return;
//     test(`Login Test ${data.username}`, async ({ page }) => {
//         const loginPage = new LoginPage(page)

//         await loginPage.gotoLoginPage();
//         await loginPage.login(data.username, data.password)

//         if (data.expected === 'success') {
//             await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
//         } else
//             await expect(loginPage.errorMessage).toBeVisible();

//     })
// })


// test('Login Test', async ({ page }) => {
//     const loginPage = new LoginPage(page)

//     await loginPage.gotoLoginPage();
//     await loginPage.login(
//         loginData.username,
//         loginData.validUser.password
//     );
//     await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
// })

// test('Invalid Login Test', async ({ page }) => {
//     const loginPage = new LoginPage(page)

//     await loginPage.gotoLoginPage();
//     await loginPage.login(
//         loginData.invalidUser.username,
//         loginData.invalidUser.password
//     );
//     await expect(loginPage.errorMessage).toBeVisible();
// })

