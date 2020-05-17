React-redux project combining several apis to be used either together or seperately.
testing nested git possibility

will get user information using a location tracker and be able to give area recommendations and weather information based on that.

IP Geolocation API:
GET https://api.ipgeolocationapi.com/geolocate HTTP/1.1

GET https://api.ipgeolocationapi.com/geolocate/91.213.103.0 HTTP/1.1

{
    "continent": "Europe",
    "alpha2": "DE",
    "country_code": "49",
    "international_prefix": "00",
    "name": "Germany",
    "languages_spoken": [
        "de"
    ],
    "geo": {
        "latitude": 51.165691,
        "longitude": 10.451526,
    },
    "currency_code": "EUR"
}