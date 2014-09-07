chrome.pageAction.onClicked.addListener(
	function(tab) {
		chrome.tabs.executeScript(
			{
			    code: 'var html=document.querySelector("html"), video=document.querySelector("#divPlayer");'+
			    'html.style.height="100%";'+
			    'html.style.width="100%";'+
			    'html.style.overflow="hidden";'+
			    'document.body.style.height="100%";'+
			    'document.body.style.width="100%";'+
			    'document.body.style.overflow="hidden";'+
				'video.style.position="fixed";'+
				'video.style.zIndex=20000;'+
				'video.style.top=0;'+
				'video.style.left=0;'+
				'video.style.width="100%";'+
				'video.style.height="100%";'+
				'document.querySelector("#channel-header").style.display="none";'+
				'document.querySelector("#header").style.display="none";'
	  		}
		);
	}
);

function checkForValidUrl(tabId, changeInfo, tab) {
    if (tab.url.indexOf('pandora.tv') > -1) {
        chrome.pageAction.show(tabId);
    }
};

chrome.tabs.onUpdated.addListener(checkForValidUrl);