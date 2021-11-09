/*
README:https://github.com/VirgilClyne/iRingo
*/
let GeoCountryCode = "US";

if (typeof $argument != "undefined") {
    let arg = Object.fromEntries($argument.split("&").map((item) => item.split("=")));
    console.log(JSON.stringify(arg));
    GeoCountryCode = arg.GeoCountryCode;
};

const url = $request.url;

const path1 = "/pep/gcc";

if (url.indexOf(path1) != -1) {
    var today = new Date();
    var UTCstring = today.toUTCString();
    var response = {
        status: 200,
        headers: {
            'Content-Type': 'text/html',
            'Date': UTCstring,
            'Connection': 'keep-alive',
            'Content-Encoding': 'identity'
        },
        body: GeoCountryCode,
    }
};

$done({response});
