i18nTemplate.process(document, {'getString': function(id) {
	return chrome.i18n.getMessage(id);
}});
