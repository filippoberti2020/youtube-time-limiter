# YouTube Time Limiter Chrome Extension

## Description

YouTube Time Limiter is a Chrome extension that helps users manage their time on YouTube. It allows setting a custom time limit for YouTube browsing, after which the user is blocked from accessing the site.

## Features

- Set a custom time limit for YouTube usage
- Automatic timer start when visiting YouTube
- Blocks access to YouTube after the time limit is reached
- Simple and user-friendly interface

## Installation

1. Clone this repository or download the ZIP file and extract it.
2. Open Google Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the `youtube-time-limiter` folder.

## Usage

1. Click on the extension icon in the Chrome toolbar to open the popup.
2. Enter the desired time limit in minutes.
3. Click "Set Limit" to apply the new time limit.
4. Browse YouTube as normal. The extension will automatically start timing your usage.
5. Once the time limit is reached, you'll be redirected away from YouTube.

## Files

- `manifest.json`: Extension manifest file
- `background.js`: Background script for timer and blocking logic
- `popup.html`: HTML structure for the extension popup
- `popup.js`: JavaScript for the popup functionality
- `styles.css`: CSS styles for the popup

## Development

To modify or enhance the extension:

1. Make changes to the relevant files.
2. If you modify `manifest.json`, you may need to reload the extension in Chrome.
3. For other file changes, usually reloading the extension page is sufficient.

## Future Improvements

- Add a visible countdown timer
- Implement a pause/resume feature for the timer
- Allow scheduling of YouTube access times
- Provide usage statistics and reports

## Contributing

Contributions to improve YouTube Time Limiter are welcome. Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
