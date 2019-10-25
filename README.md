# Simple Test Using TestCafe

This simple application will test opening a the google.com page, write youtube in the google search bar and opening the youtube.com webpage.

## Installation

Use the package manager npm to install.

```bash
npm install
```

### To run the test in Chrome, run the following script:

```bash
npm run test_chrome
```
### Mozilla Firefox:

```bash
npm run test_firefox
```

### Safari:

```bash
npm run test_safari
```

To run in any other Browser, just make sure to disable tracking JavaScript errors in TestCafe by adding the following at the end of the command:

```bash
--skip-js-errors
```
