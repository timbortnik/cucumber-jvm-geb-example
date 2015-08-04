$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/search.feature");
formatter.feature({
  "line": 1,
  "name": "Google Search",
  "description": "In order to demonstrate the power of Cucumber and WebDriver combined\r\nAs a Cucumber instructor\r\nI want to walk through a simple google search.",
  "id": "google-search",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4198554687,
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
  "duration": 919383432,
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
  "duration": 1029083080,
  "status": "passed"
});
formatter.match({
  "location": "search_steps.groovy:19"
});
formatter.result({
  "duration": 729969488,
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
  "duration": 163273742,
  "error_message": "Assertion failed: \n\nassert $(\u0027div#ires h3.r\u0027, 0).text() \u003d\u003d title\n       |                     |      |  |\n       |                     |      |  WikiMedia\n       |                     |      false\n       |                     Wikipedia\n       [[[InternetExplorerDriver: internet explorer on WINDOWS (8f7f8677-6bf7-4f5f-be64-869780f86a03)] -\u003e css selector: div#ires h3.r]]\n\r\n\tat pages.GoogleResultsPage.assertResultIs(GoogleResultsPage.groovy:14)\r\n\tat pages.GoogleResultsPage$assertResultIs.call(Unknown Source)\r\n\tat step_definitions.search_steps$_run_closure4.doCall(search_steps.groovy:27)\r\n\tat ✽.And The first link should be \"WikiMedia\"(features/search.feature:11)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 230849366,
  "status": "passed"
});
formatter.before({
  "duration": 33880419,
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
  "duration": 686081045,
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
  "duration": 897930935,
  "status": "passed"
});
formatter.match({
  "location": "search_steps.groovy:19"
});
formatter.result({
  "duration": 1017419337,
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
  "duration": 148846735,
  "status": "passed"
});
formatter.after({
  "duration": 725923,
  "status": "passed"
});
});