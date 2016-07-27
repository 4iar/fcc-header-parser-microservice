# Header parser microservice
[FreeCodeCamp project](https://www.freecodecamp.com/challenges/request-header-parser-microservice)

## Deployment
Hosted on https://header-parser-ms-4iar.herokuapp.com/

## Usage and examples

**Get information from normal user-agent**
```
curl -H "Accept-Language: klingon" -A "Mozilla/5.0 (Windows; U; Windows NT 5.1; de; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3" https://header-parser-ms-4iar.herokuapp.com/
```
```
{"ipaddress": "55.37.80.08", "language": "klingon", "useragent": "Mozilla/5.0 (Windows; U; Windows NT 5.1; de; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3", "software": "Windows; U; Windows NT 5.1; de; rv:1.9.2.3"}
```

**Special case: malformed user-agent**
```
curl -H "Accept-Language: klingon" -A "sausages" https://header-parser-ms-4iar.herokuapp.com/
```
```
{"ipaddress": "55.37.80.08", "language": "klingon", "useragent": "sausages", "software": null}
```

**Special case: missing user-agent**
```
curl -H "Accept-Language: klingon" -A "" https://header-parser-ms-4iar.herokuapp.com/
```
```
{"ipaddress": "55.37.80.08", "language": "klingon", "useragent": null, "software": null}
```
**Special case: tight lips**
```
curl -A "" https://header-parser-ms-4iar.herokuapp.com/
```
```
{"ipaddress": "55.37.80.08", "language": null, "useragent": null, "software": null}
```

**Special case: Spoofed IP**
```
curl -H "X-Forwarded-For: 1.2.3.4" -A "" https://header-parser-ms-4iar.herokuapp.com/
```
```
{"ipaddress": "1.2.3.4", "language": null, "useragent": null, "software": null}
```














