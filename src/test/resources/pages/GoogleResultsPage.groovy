package pages

import geb.Page

class GoogleResultsPage extends Page {
	
	static at = {
		waitFor {
			$('div#resultStats')
		}
	}
	
	void assertResultIs( def title) {
		assert $('div#ires h3.r', 0).text() == title
	}
	
}