var socialUrls = {
	wechat: {
		name: "微信",
		url: "http://www.ftchinese.com/m/corp/qrshare.html?title={{title}}&url={{url}}&ccode=2C1A1408"
	},
	weibo: {
		name: "微博",
		url: "http://service.weibo.com/share/share.php?&appkey=4221537403&url={{url}}&title=【{{title}}】{{summary}}&ralateUid=1698233740&source=FT中文网&sourceUrl=http://www.ftchinese.com/&content=utf8&searchPic=false&ccode=2G139005"
	},
	linkedin: {
		name: "LinkedIn",
		url: "http://www.linkedin.com/shareArticle?mini=true&url={{url}}&title={{title}}&summary={{summary}}&source=FT中文网"
	},
	defaultSocials: ['wechat', 'weibo', 'linkedin']
};

/*
  *@object share used as prototype
  */
var Share = {
	init: function(rootEl, config) {
		this.rootEl = rootEl;
		this.config = config;
		if (!this.rootEl) {
			this.rootEl = document.body;
		} 
		if (!(this.rootEl instanceof HTMLElement)) {
			this.rootEl = document.querySelector(rootEl);
		}

		var hasShareAttr = this.rootEl.hasAttribute('data-o-share-links');
		if (!this.config && hasShareAttr) {
			this.config = {};
			this.config.networks = this.rootEl.getAttribute('data-o-share-links').split(' ') || [];
			this.config.url = window.location.href || '';
			this.config.title = this.rootEl.getAttribute('data-o-share-title') || '';
			this.config.summary = this.rootEl.getAttribute('data-o-share-summary') || '';
		}
		if (!this.config && !hasShareAttr) {
			this.config = {};
			this.config.url = window.location.href || '';
			this.config.title = document.getElementsByTagName('title')[0].firstChild.nodeValue || '';
			this.config.summary = this.getDescription();
			this.config.networks = socialUrls.defaultSocials;
		}
		this.render();
	},

	render: function() {
		var ulElement = document.createElement('ul');

		for (var i = 0; i < this.config.networks.length; i++) {
			var network = this.config.networks[i];
			var name = socialUrls[network].name;
			var url = this.generateSocialUrl(network);

			var liElement = document.createElement('li');
			liElement.classList.add('o-share__action');
			liElement.classList.add('o-share__action--' + network);

			var aElement = document.createElement('a');
			aElement.href = url;
			aElement.target = '_blank';		
			
			var aText = document.createTextNode(name);
			aElement.appendChild(aText);
			liElement.appendChild(aElement);
			ulElement.appendChild(liElement);
		}

		this.rootEl.appendChild(ulElement);
	},

	generateSocialUrl: function(socialNetwork) {
		var templateUrl = socialUrls[socialNetwork].url;
		templateUrl = templateUrl.replace('{{url}}', encodeURIComponent(this.config.url))
			.replace('{{title}}', encodeURIComponent(this.config.title))
			.replace('{{summary}}', encodeURIComponent(this.config.summary));
		return templateUrl;
	},

	getDescription: function() {
		var descElement = document.querySelector('meta[property="og:description"]');
		if (descElement) {
			return descElement.hasAttribute('content') ? descElement.getAttribute('content') : '';
		}	
	}
};
