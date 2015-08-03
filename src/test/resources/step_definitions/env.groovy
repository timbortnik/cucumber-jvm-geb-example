package step_definitions

import geb.Browser
import geb.binding.BindingUpdater
import org.openqa.selenium.OutputType
import org.openqa.selenium.WebDriverException

import static cucumber.api.groovy.Hooks.After
import static cucumber.api.groovy.Hooks.Before

def browser
def bindingUpdater

Before() {
	browser =  new Browser()
	bindingUpdater = new BindingUpdater(binding, browser)
	bindingUpdater.initialize()
}

After { scenario ->
	bindingUpdater.remove()
	// embed screenshot into cucumber report
	if(scenario.failed) {
		try {
			scenario.embed(browser.driver.getScreenshotAs(OutputType.BYTES), "image/png")
		} catch(WebDriverException e) {
			// sometime firefox runs out of memory trying to take a screenshot, not a big deal so ignore
		} catch(MissingMethodException e) {
			// HTMLUnit doesn't support screenshots
		}
	}
}