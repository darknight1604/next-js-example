export const getStoreUrl = () => {
    var userAgent = _getMobileOperatingSystem();

    var storeUrl = "";
    switch (userAgent) {
        case device.android:
            storeUrl = "https://play.google.com/store/apps/details?id=com.spotify.music&hl=vi&gl=US";
            break;
        case device.iOS:
            storeUrl = "https://apps.apple.com/vn/app/spotify-ph%C3%A1t-nh%E1%BA%A1c-playlist/id324684580?l=vi";
            break;
        default:
            break;
    }

    return storeUrl;
}

const device = {
    windowPhone: "Windows Phone",
    android: "Android",
    iOS: "iOS",
    unknown: "unknown"
}

/**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 *
 * @returns {String}
 */
function _getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return device.windowPhone;
    }

    if (/android/i.test(userAgent)) {
        return device.android;
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return device.iOS;
    }

    return device.unknown;
}