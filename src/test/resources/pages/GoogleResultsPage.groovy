package pages

import geb.Page

class GoogleResultsPage extends Page {
	
	static at = {
		waitFor {
			title.endsWith("Google Search") || title.endsWith(" Google")
			// depending on the location settings
		}
	}
	
	void assertResultIs(def index, def title) {
		assert $('div#ires ol h3 a').text() == title
	}
	
}