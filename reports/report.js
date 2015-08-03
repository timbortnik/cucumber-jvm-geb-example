$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features\\search.feature");
formatter.feature({
  "line": 1,
  "name": "Google Search",
  "description": "In order to demonstrate the power of Cucumber and WebDriver combined\r\nAs a Cucumber instructor\r\nI want to walk through a simple google search.",
  "id": "google-search",
  "keyword": "Feature"
});
formatter.before({
  "duration": 352119917,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Show you how to search Wikipedia on google",
  "description": "",
  "id": "google-search;show-you-how-to-search-wikipedia-on-google",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@wikipedia"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on the Google search page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I search for \"Wikipedia\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should see the results page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "The first link should be \"WikiMedia\"",
  "keyword": "And "
});
formatter.match({
  "location": "search_steps.groovy:6"
});
formatter.result({
  "duration": 4627696550,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wikipedia",
      "offset": 14
    }
  ],
  "location": "search_steps.groovy:13"
});
formatter.result({
  "duration": 1361696400,
  "status": "passed"
});
formatter.match({
  "location": "search_steps.groovy:19"
});
formatter.result({
  "duration": 791353313,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WikiMedia",
      "offset": 26
    }
  ],
  "location": "search_steps.groovy:25"
});
formatter.result({
  "duration": 196398847,
  "error_message": "Assertion failed: \n\nassert $(\u0027div#ires h3.r\u0027).text() \u003d\u003d title\n       |                  |      |  |\n       |                  |      |  WikiMedia\n       |                  |      false\n       |                  Wikipedia\n       [[[[[InternetExplorerDriver: internet explorer on WINDOWS (c37f8ad7-b3f0-4e49-aaeb-ee3c69c32da1)] -\u003e tag name: html]] -\u003e css selector: div#ires h3.r], [[[[InternetExplorerDriver: internet explorer on WINDOWS (c37f8ad7-b3f0-4e49-aaeb-ee3c69c32da1)] -\u003e tag name: html]] -\u003e css selector: div#ires h3.r], [[[[InternetExplorerDriver: internet explorer on WINDOWS (c37f8ad7-b3f0-4e49-aaeb-ee3c69c32da1)] -\u003e tag name: html]] -\u003e css selector: div#ires h3.r], [[[[InternetExplorerDriver: internet explorer on WINDOWS (c37f8ad7-b3f0-4e49-aaeb-ee3c69c32da1)] -\u003e tag name: html]] -\u003e css selector: div#ires h3.r], [[[[InternetExplorerDriver: internet explorer on WINDOWS (c37f8ad7-b3f0-4e49-aaeb-ee3c69c32da1)] -\u003e tag name: html]] -\u003e css selector: div#ires h3.r], [[[[InternetExplorerDriver: internet explorer on WINDOWS (c37f8ad7-b3f0-4e49-aaeb-ee3c69c32da1)] -\u003e tag name: html]] -\u003e css selector: div#ires h3.r], [[[[InternetExplorerDriver: internet explorer on WINDOWS (c37f8ad7-b3f0-4e49-aaeb-ee3c69c32da1)] -\u003e tag name: html]] -\u003e css selector: div#ires h3.r], [[[[InternetExplorerDriver: internet explorer on WINDOWS (c37f8ad7-b3f0-4e49-aaeb-ee3c69c32da1)] -\u003e tag name: html]] -\u003e css selector: div#ires h3.r], [[[[InternetExplorerDriver: internet explorer on WINDOWS (c37f8ad7-b3f0-4e49-aaeb-ee3c69c32da1)] -\u003e tag name: html]] -\u003e css selector: div#ires h3.r]]\n\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.assertFailed(InvokerHelper.java:402)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.assertFailed(ScriptBytecodeAdapter.java:650)\r\n\tat pages.GoogleResultsPage.assertResultIs(GoogleResultsPage.groovy:16)\r\n\tat pages.GoogleResultsPage$assertResultIs.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:133)\r\n\tat step_definitions.search_steps$_run_closure4.doCall(search_steps.groovy:27)\r\n\tat ✽.And The first link should be \"WikiMedia\"(features\\search.feature:11)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 800086308,
  "status": "passed"
});
formatter.before({
  "duration": 30749995,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Show you how to search Youtube on google",
  "description": "",
  "id": "google-search;show-you-how-to-search-youtube-on-google",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@youtube"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I am on the Google search page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I search for \"YouTube\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I should see the results page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "The first link should be \"YouTube\"",
  "keyword": "And "
});
formatter.match({
  "location": "search_steps.groovy:6"
});
formatter.result({
  "duration": 556377479,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "YouTube",
      "offset": 14
    }
  ],
  "location": "search_steps.groovy:13"
});
formatter.result({
  "duration": 1442677795,
  "status": "passed"
});
formatter.match({
  "location": "search_steps.groovy:19"
});
formatter.result({
  "duration": 287070558,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "YouTube",
      "offset": 26
    }
  ],
  "location": "search_steps.groovy:25"
});
formatter.result({
  "duration": 163147312,
  "status": "passed"
});
formatter.after({
  "duration": 507119,
  "status": "passed"
});
});