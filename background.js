const GM_REGEXP_STRING =
    "google.(com.(?!ru)[a-z]{2}|co.[a-z]{2}|com|(?!ru)[a-z]{2})\/maps\/.*\\@(-?\\d+\\.\\d+),(-?\\d+\\.\\d+),?(\\d+\\.?\\d+?z)?.*";
const GM_REGEXP = new RegExp(GM_REGEXP_STRING);
const WIKIMAPIA_BASE_URL_HASH = "http://wikimapia.org/#";

function checkForValidUrl(tabId, changeInfo, tab)
{
    if(typeof tab != "undefined" && typeof tab != "null" )
    {
        if (GM_REGEXP.test(tab.url))
        {
            chrome.pageAction.show(tabId);
        }
    }
};

function locateToWikimapia(tab) {
    var urlMatchParts = tab.url.match(GM_REGEXP);
    [lat, lon, zoom] = [urlMatchParts[2], urlMatchParts[3], urlMatchParts[4]];
    var targetURL = WIKIMAPIA_BASE_URL_HASH + "lat=" + lat + "&lon=" + lon;
    if (zoom) {
        targetURL += "&z=" + zoom;
    }
    var creating = chrome.tabs.create({
        url: targetURL,
        active: true
    });
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);

chrome.pageAction.onClicked.addListener(locateToWikimapia);
