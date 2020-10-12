# Randomizer

Create a local server that upon a request, returns number between a start number and an end number specified as query params.

You should check [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) and make use of `request.url`.

## Extra

If no paremeters are passed it should return between 0 and 3. If only the end parameter is passed, it should return between 0 and that number. If only the start parameter is passed it should return an error request with status code 400 and a descriptive message.
