/**
    Regular expression to match Google Maps URLs
    on all the supported Google domains except for '.ru'.
    The path:
    - must include the word 'maps' and the latitude and longitude
    starting with '@' symbol, comma-separated;
    - can include zoom in format which is different in Satellite View;
    - might include any other data such as a place name or technical info.

    Supported Google domains reference: https://www.google.com/supported_domains
*/
const GM_REGEXP_STRING =
    "google.(com.(?!ru)[a-z]{2}|co.[a-z]{2}|com|(?!ru)[a-z]{2})\/maps\/.*\\@(-?\\d+\\.\\d+),(-?\\d+\\.\\d+),?(\\d+\\.?\\d+?z)?.*";

// Create the RegExp object
const GM_REGEXP = new RegExp(GM_REGEXP_STRING);

// Wikimapia base URL
const WIKIMAPIA_BASE_URL_HASH = "http://wikimapia.org/#";

// Show the button only when URL matches the pattern
function checkForValidUrl(tabId, changeInfo, tab) {
    if(typeof tab != "undefined" && typeof tab != "null") {
        if (GM_REGEXP.test(tab.url)) {
            chrome.pageAction.show(tabId);
        }
    }
};

// Action performed when a user clicks the button
function locateToWikimapia(tab) {

    // Retrieve latitude, longitude and zoom from the current Google Maps URL
    var urlMatchParts = tab.url.match(GM_REGEXP);
    [lat, lon, zoom] = [urlMatchParts[2], urlMatchParts[3], urlMatchParts[4]];

    // Create the URL to follow
    var targetURL = WIKIMAPIA_BASE_URL_HASH + "lat=" + lat + "&lon=" + lon;

    // Optionally, append zoom
    if (zoom) {
        targetURL += "&z=" + zoom;
    }

    // Open a new tab with the given Wikimapia URL
    var creating = chrome.tabs.create({
        url: targetURL,
        active: true
    });
};

// Listen for any changes to the URL of any tab, updating the button availability
chrome.tabs.onUpdated.addListener(checkForValidUrl);

// Add a listener to the button
chrome.pageAction.onClicked.addListener(locateToWikimapia);
