(function(){
	window.Browser = new (function(){

		this.browser = {};
		this.initialize = function(){
			var userAgent = navigator.userAgent;
			var indexChrome = navigator.userAgent.indexOf("Chrome");
			var indexSafari = navigator.userAgent.indexOf("Safari");
			var indexFirefox = navigator.userAgent.indexOf("Firefox");
			var indexOpera = navigator.userAgent.indexOf("OPR");
			var indexMSIE = navigator.userAgent.indexOf("MSIE");
			var indexTrident = navigator.userAgent.indexOf("Trident");

			//chrome
			if(window.chrome && indexChrome != -1 && indexOpera == -1){
				this.browser.CHROME = true;
				this.browser.browserVersion = navigator.userAgent.substring(indexChrome+7, navigator.userAgent.indexOf(" ",indexChrome));
			}
			//opera			
			else if(indexOpera != -1){
				this.browser.OPERA = true;
				this.browser.browserVersion = navigator.userAgent.substring(indexOpera+4, navigator.userAgent.length);
			}
			//firefox
			else if(indexFirefox != -1){
				this.browser.FIREFOX = true;
				this.browser.browserVersion = navigator.userAgent.substring(indexFirefox+8, navigator.userAgent.length);	
			}
			//safari
			else if(indexSafari != -1 && navigator.vendor.indexOf("Apple") != -1){
				this.browser.SAFARI = true;
				var indexVersion = navigator.userAgent.indexOf("Version");
				this.browser.browserVersion = navigator.userAgent.substring(indexVersion+8, navigator.userAgent.indexOf(" ",indexVersion));	
			}
			//internet explorer
			else if(indexMSIE != -1){
				this.browser.IE = true;
				this.browser.browserVersion = navigator.userAgent.substring(indexMSIE+5, navigator.userAgent.indexOf(";", indexMSIE));
			}
			else if(indexTrident != -1){
				this.browser.IE = true;
				var indexRV = navigator.userAgent.indexOf("rv:");
				this.browser.browserVersion = navigator.userAgent.substring(indexRV+3, navigator.userAgent.indexOf(")", indexTrident));	
			}
			//set browser properties
			this.setBrowserProperties();
			return this.browser;
		};
		this.setBrowserProperties = function(){
			if(this.browser.CHROME){
				this.browser.browserName = "Google Chrome";
			}
		}
		this.browser.isChrome = function(){
			return !!this.CHROME;
		}
		this.browser.isIE = function(){
			return !!this.IE;
		}
		this.browser.isFirefox = function(){
			return !!this.FIREFOX;
		}
		this.browser.isSafari = function(){
			return !!this.SAFARI;
		}
		this.browser.isOpera = function(){
			return !!this.OPERA;
		}
	})().initialize();
	console.log(Browser.browserVersion);
})();