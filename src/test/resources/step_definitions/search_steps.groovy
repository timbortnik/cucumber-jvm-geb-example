package step_definitions

import pages.*
import static cucumber.api.groovy.EN.*

Given(~'I am on the Google search page') { ->

	to GoogleHomePage
	at GoogleHomePage

}

When(~'I search for "(.+)"') { searchTerm ->

	page.searchFor(searchTerm)

}

Then(~'I should see the results page') { ->

	at GoogleResultsPage

}

Then(~'The first link should be "(.+)"') { searchTerm ->

	page.assertResultIs(searchTerm)

}
