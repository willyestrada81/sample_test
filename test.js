import { Selector } from 'testcafe';


fixture`Running Test`
    .page`https://google.com`;

test('Google Sample Test', async t => {
    const logoExists = Selector('.ytd-topbar-logo-renderer').exists;
    await t
        .typeText('.gLFyf', 'youtube')
        .click('.gNO89b')
        .navigateTo(`https://www.youtube.com/`)
        .expect(logoExists).ok();
});