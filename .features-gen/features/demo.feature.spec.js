// Generated from: features\demo.feature
import { test } from "playwright-bdd";

test.describe('Lofin Fuctionality', () => {

  test('Verify user is able to Login using valid credentials', async ({ Given, When, Then, And, page }) => { 
    await Given('I Navigate to \'https://www.saucedemo.com/\'', null, { page }); 
    await When('You Enter username \'standard_user\'', null, { page }); 
    await And('You Enter password \'secret_sauce\'', null, { page }); 
    await And('You Click on Login Button', null, { page }); 
    await Then('Verify url should contain \'/inventory.html/\'', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\demo.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":2,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given I Navigate to 'https://www.saucedemo.com/'","stepMatchArguments":[{"group":{"start":14,"value":"'https://www.saucedemo.com/'","children":[{"children":[{}]},{"start":15,"value":"https://www.saucedemo.com/","children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When You Enter username 'standard_user'","stepMatchArguments":[{"group":{"start":19,"value":"'standard_user'","children":[{"children":[{}]},{"start":20,"value":"standard_user","children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"And You Enter password 'secret_sauce'","stepMatchArguments":[{"group":{"start":19,"value":"'secret_sauce'","children":[{"children":[{}]},{"start":20,"value":"secret_sauce","children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And You Click on Login Button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then Verify url should contain '/inventory.html/'","stepMatchArguments":[{"group":{"start":26,"value":"'/inventory.html/'","children":[{"children":[{}]},{"start":27,"value":"/inventory.html/","children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end