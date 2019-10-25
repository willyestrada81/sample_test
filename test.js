import { Selector } from 'testcafe';


fixture`Running Test`
    .page`https://google.com`;

test('Google Sample Test', async t => {
    await t
        .typeText('.gLFyf', 'youtube')
        .click('.gNO89b')
        .navigateTo(`https://www.youtube.com/`);
});