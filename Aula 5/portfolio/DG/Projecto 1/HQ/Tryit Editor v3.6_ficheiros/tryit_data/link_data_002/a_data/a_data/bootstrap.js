(function() {
	var _smartsupp = {};
	var smartsupp = window.parent.smartsupp;
	var smartsuppChat = parent.smartsupp.chats[smartchatId];
	
	var _config = {"colors":{"primary":"#e84253","banner":"#494949","widget":"#e84253"},"translates":{"online":{"title":"Chat - Aten\u00e7\u00e3o ao cliente","infoTitle":"wecanimal.pt","infoDesc":"","send":"Enviar","textareaPlaceholder":""},"offline":{},"widget":{"offline":"Offline","online":"Chat"},"banner":{"arrow":{"title":"Alguma pergunta? ","desc":"Fale connosco!"},"bubble":{}},"privacyNotice":{"title":"Processamento de dados pessoais"}},"theme":{"name":"flat","options":{"widgetRadius":3}},"lang":"pt","muteSounds":false,"orientation":"right","hideBanner":false,"hideWidget":false,"hideOfflineChat":false,"hideOfflineBanner":true,"enableRating":false,"ratingComment":false,"requireLogin":false,"transcriptEnabled":false,"privacyNoticeUrl":"","privacyNoticeEnabled":true,"banner":{"type":"arrow","options":{}},"package":"free","isEnabledEvents":false,"api":{"basic":true,"banner":false,"theme":false,"events":false,"groups":false}};
	_config.baseLang = 'es';
	_config.browserLang = 'pt';
	_config.avatar = '';
	_config.avatarPath = '';
	_config.host = 's21.smartsupp.com';
	_config.packageName = 'free';
	_config.logoUrl = '';
	_config.logoSrc = '';
	_config.logoSmSrc = '';
	_config.smartlook = window.smartlook;
	
	var smartsuppLoadInterval = setInterval(function() {
		if (!window.miwo) return;
		clearInterval(smartsuppLoadInterval);
		smartsuppChat.setOptions(_smartsupp);
		
		miwo.ready(function() {
			miwo.cookie.document = parent.document;
			miwo.baseUrl = smartsuppChat.getOption('baseUrl');
			miwo.staticUrl = smartsuppChat.getOption('staticUrl');

			var configurator = new Miwo.Configurator();
			configurator.addConfig(App.DefaultConfig.getConfig());
			configurator.addConfig(App.ClientConfig.getConfig(_config));
			configurator.addConfig(App.ChatConfig.getConfig(smartsuppChat));

			configurator.ext(new Chat.ChatExtension());
			var container = configurator.createContainer();
			container.get('miwo.application').run();
		});
	}, 50);
	
	if (_config.api.events && smartsuppChat.getOption('gaKey')) {
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
	}
	
	
	
	!smartsuppChat.getOption('disableInternalApi') && (function() {
		
	})();
})();
