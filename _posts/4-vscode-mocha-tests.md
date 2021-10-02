---
tag: "code"
title: "Discovering Mocha tests on VS Code"
excerpt:
    "Setting up Mocha tests discovery, in VSCode, with TypeScript."
date: "Sat, 2 Oct 2021"
author:
    name: Pablo
    twitter: "https://twitter.com/pablolbalbi"
    picture: ""
ogImage:
    url: "/assets/meta/blogSimple.jpg"
---

While working on a TypeScript project and doing TDD, obviously, I needed to debug a test. Sounds easy right? The thing is I wanted to used VSCode's debugger, since it came in handy some times in the past. 

My testing rig had the following:
- [Mocha](https://www.npmjs.com/package/mocha), for testing infrastructure
- [Chai](https://www.npmjs.com/package/chai), for assertions
- [TS-Node](https://www.npmjs.com/package/ts-node), NodeJS's TypeScript execution engine

Doing a quick Google search I found this beautiful extension, [Mocha Test Explorer](https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-mocha-test-adapter), to do what I though would be easy: discovery mocha tests.

However, there's a tiny bit of magic one has to do to enable the discovery of TypeScript-based tests, since there's a compiler in the middle to get to the finally executable JavaScript files. The steps to the everything working goes like this:

1. In my case I had all tests under a `tests/` folder, but this is not necessary, just to give some context.
2. Install the extension mentioned above in VSCode.
3. Open VSCode User Settings. Commonly through the command palette, and with the `Preferences: Open Settings (JSON)` option.
4. Add this two options in the settings file:

```json
{
    "mochaExplorer.require": "ts-node/register", // This first one enables the TS compiler in the middle
    "mochaExplorer.files": "tests/**/*.ts" // This let's the extension know which are your test files
}
```

5. Now run the `Mocha Test Explorer: Enable for a workspace folder` option from the command palette, and you are done. Happy testing!