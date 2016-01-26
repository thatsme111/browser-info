(function(){
	window.Browser = new (function(){

		this.browser = {};

		this.initialize = function(){
			var userAgent = navigator.userAgent;
			var indexChrome = navigator.userAgent.indexOf("Chrome");
			var indexSafari = navigator.userAgent.indexOf("Safari");
			var indexFirefox = navigator.userAgent.indexOf("Firefox");
			var indexOpera = navigator.userAgent.indexOf("OPR");
			var indexIE = navigator.userAgent.indexOf("MSIE");

			//chrome
			if(window.chrome && indexChrome != -1 && indexOpera == -1){
				this.browser.CHROME = true;
				this.browser.browserVersion = navigator.userAgent.substring(indexChrome+7, navigator.userAgent.indexOf(" ",indexChrome));
				this.browser.browserName = "Google Chrome";
			}
			//opera 
			else if(indexOpera != -1){
				this.browser.OPERA = true;
				this.browser.browserVersion = navigator.userAgent.substring(indexOpera+4, navigator.userAgent.length);
				this.browser.browserName = "Opera";
			}
			//firefox
			else if(indexFirefox != -1){
				this.browser.FIREFOX = true;
				this.browser.browserVersion = navigator.userAgent.substring(indexFirefox+8, navigator.userAgent.length); 
				this.browser.browserName = "Mozilla Firefox";
			}
			//safari
			else if(indexSafari != -1 && navigator.vendor.indexOf("Apple") != -1){
				this.browser.SAFARI = true;
				var indexVersion = navigator.userAgent.indexOf("Version");
				this.browser.browserVersion = navigator.userAgent.substring(indexVersion+8, navigator.userAgent.indexOf(" ",indexVersion)); 
				this.browser.browserName = "Apple Safari";
			}
			//internet explorer
			else if(navigator.userAgent.indexOf("Trident") != -1){
				this.browser.IE = true;
				if(indexIE != -1){
					var indexSemicolon = navigator.userAgent.indexOf(";", indexIE);
					this.browser.browserVersion = navigator.userAgent.substring(indexIE+5, indexSemicolon); 
				}else{
					this.browser.browserVersion = "11.0";
				}
				this.browser.browserName = "Microsoft Internet Explorer";
			}
			//set browser properties
			//this.setBrowserProperties();
			return this.browser;
		};

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
})();