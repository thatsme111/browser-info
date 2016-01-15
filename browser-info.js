(function(){
	var Browser = function(){
		this.initialize = function(){
			//set name of browser by ducktyping :)
			if(window.chrome){
				this.browserName = "Chrome";
				var indexChrome = navigator.userAgent.indexOf("Chrome");
				this.browserVersion = navigator.userAgent.substring(indexChrome+7, navigator.userAgent.indexOf(" ",indexChrome));
			}
				
			if(!!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0){
				this.browserName = "Opera";
				var indexOpera = navigator.userAgent.indexOf("OPR");
				this.browserVersion = navigator.userAgent.substring(indexOpera+4, navigator.userAgent.length);
			}
				
			if(navigator.vendor.toLowerCase().indexOf('apple') != -1)
				this.browserName = "Safari";
			if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1)
				this.browserName = "Firefox";
			if(navigator.userAgent.toLowerCase().indexOf(".net") != -1)
				this.browserName = "Internet Explorer";
			if(typeof this.browserName == "undefined")
				this.browserName = "Unknown";
		};
	};
	window.browser = new Browser();
	window.browser.initialize();
	document.write(window.browser.browserName);
})();