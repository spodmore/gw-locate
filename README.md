# GW Locate

**This extension adds a button to the address bar in Firefox (or toolbar in Google Chrome) which allows to view current Google Maps location in the new tab on Wikimapia at the same zoom if available.**

It works on all supported Google domains except for '.ru'. See the Google domain reference: https://www.google.com/supported_domains.

It doesn't work on websites other than Google Maps (eg. google.com/maps).

Available locales: English (en), Ukrainian (uk).

Tested in
* **macOS** Sierra: Firefox 55, Google Chrome 60
* **Windows** 10: Firefox 55, Google Chrome 60
* **Ubuntu** 14.04: Firefox 55

## How it works

On Google Maps website, click the address bar button (or toolbar button in Google Chrome). This will open your location with the same coordinates and zoom (if available) on the wikimapia.org website in the new browser tab.

## Zoom

Direct zoom value is currently not available in the satellite view of Google Maps. In this case Wikimapia will open location with their default zoom.

Zoom might be fractional in Google Maps, it will be rounded on the Wikimapia website.

# Icon

GW Locate icon is thankfully taken from the Icon Beast Light set: http://www.iconbeast.com/free/.

# Developer Installation Notes
You can add the extension to your browser manually. Download the source code and unzip it to a location you prefer.

**Firefox** supports the Debugging mode which allows to load extensions temporarily. To do so,
* in the address bar type about:debugging,
* click the 'Load temporary add-on' button and
* select the manifest.json file.

This will keep the extension until you close the browser window. You can remove the extension, or disable it in the native built-in Addon Manager, anytime before.

In **Google Chrome**,
* go to chrome://extensions,
* check the 'Developer mode' box,
* click the 'Load unpacked extension...' button and
* select the folder where you have unpacked the extension.

It will persist in Google Chrome until you disable or remove it.
