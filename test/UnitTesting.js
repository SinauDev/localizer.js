/* -------------------------------------------------------------------------------
 * LOCALIZER.JS
 * Native JavaScript plugin for multilingual Web applications and websites.
 *
 * Developed by Laurensius Jeffrey Chandra <arcestia@vivaldi.net>
 * https://github.com/sinaudev/localizer.js
 * ------------------------------------------------------------------------------- */


QUnit.test("Check class instance and base integrity", function(assert) {

	/**
	 * Check if 'localizer' is an instance of LocalizerJS() class
	 */
	var localizer = new LocalizerJS();
	assert.ok(localizer instanceof LocalizerJS, "Check if is instance of LocalizerJS().");

	/**
	 * Check if 'localizer' is an instance of LocalizerJS() class
	 */
	var definedLanguages = localizer.getDefinedLanguages();
	assert.ok(definedLanguages.main == null && definedLanguages.fallback == null, "Check if main and fallback languages are initially null.");

	/**
	 * Define main language as 'id-id'
	 */
	assert.ok(localizer.setLanguage("id-id") == true, "Define main language as 'id-id' (Indonesian).");

	/**
	 * Main language should be 'id-id' and fallback should be still null
	 */
	definedLanguages = localizer.getDefinedLanguages();
	assert.ok(definedLanguages.main == "id-id" && definedLanguages.fallback == null, "Check if main language is 'id-id' and fallback language is still null.");

	/**
	 * Define fallback language as 'en'
	 */
	assert.ok(localizer.setFallback("en") == true, "Define fallback language as 'en' (English).");

	/**
	 * Main language should be still 'id-id' and fallback should be 'en'
	 */
	definedLanguages = localizer.getDefinedLanguages();
	assert.ok(definedLanguages.main == "id-id" && definedLanguages.fallback == 'en', "Check if main language is 'id-id' and fallback language is 'en'.");

	/**
	 * Should return the word 'cat' in Indonesian ('Gato')
	 */
	assert.ok(localizer.getValue("cat") == "Kucing", "The word 'cat' exists in the Indonesian dictionary, check if it's returned.");

	/**
	 * Should return the word 'cat' in Indonesian ('Gato')
	 */
	assert.ok(localizer.getValue("lion") == "Lion", "The word 'lion' doesn't exist in the Indonesian dictionary, should return in English instead.");
});
