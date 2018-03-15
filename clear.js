var callback = function () {
        document.getElementById("succes").innerHTML = "Succes!"
        document.getElementById("succes").className = "succes"
      };
	  
function clear() {
		chrome.browsingData.remove({
			"since": 0
			}, {
        "appcache": true,
        "cache": true,
        "cookies": true,
        "downloads": true,
        "fileSystems": true,
        "formData": true,
        "history": true,
        "indexedDB": true,
        "localStorage": true,
        "pluginData": true,
        "webSQL": true
      }, callback);
}
	  
document.getElementById("clear").addEventListener("click", clear);