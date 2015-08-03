package pages

import geb.Page

class GoogleResultsPage extends Page {
	
	static at = {
		waitFor {
			$('div#resultStats')
		}
	}
	
	void assertResultIs(def index, def title) {
		//Thread.sleep(600000);
		//Thread.sleep(1000);
		assert $('div#ires h3.r').text() == title
	}
	
}