document.addEventListener("DOMContentLoaded", function(){
    // Check if the cookie consent is already accepted
    if(!getCookie("cookieConsent")) {
        // Show cookie consent banner
        // You need to add the HTML for this banner
        document.getElementById("cookieConsentBanner").style.display = "block";
    }

    document.getElementById("acceptCookieConsent").addEventListener("click", function(){
        setCookie("cookieConsent", "accepted", 365); // Set cookie for 365 days
        document.getElementById("cookieConsentBanner").style.display = "none";
    });

    document.getElementById("declineCookieConsent").addEventListener("click", function(){
        // Handle decline action
        document.getElementById("cookieConsentBanner").style.display = "none";
    });
});

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
