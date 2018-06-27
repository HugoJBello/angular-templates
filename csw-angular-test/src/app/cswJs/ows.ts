
export class Ows {
   version:string='0.1.2';
   Proxy:any = '/cgi-bin/proxy.cgi?url=';
    constructor() {  
     }

     public static httpGet = function(url) {
        var httpRequest;
        try {
            try {
                httpRequest = new ActiveXObject('Microsoft.XMLHTTP');
            } catch (e) {
                httpRequest = new XMLHttpRequest();
            }
            httpRequest.open('GET', url, false);
            httpRequest.send(null);
            return httpRequest;
        } catch (e) {
            throw e;
        }
    };
    
    public static httpPost = function(url, lang, request, credentials) {
        return new Promise(function(fulfill, reject){
            var httpRequest = new XMLHttpRequest();
            httpRequest.onreadystatechange=function() {
                if (httpRequest.readyState==4 && httpRequest.status==200) {
                    console.log(request);
                    fulfill(httpRequest.responseXML);
                }
            };
            httpRequest.open('POST', url, true);
            httpRequest.setRequestHeader('Accept-Language',lang);
            if (credentials != undefined && credentials.user != undefined && credentials.pass != undefined){
                httpRequest.setRequestHeader("Authorization", "Basic " + btoa(credentials.user + ":" + credentials.pass));
            }
            httpRequest.send(request);
        });
    };
    
    public static buildUrl = function(url, params) {
        var kvps = [];
    
        for (var key in params) { 
            if (params[key] !== null) {
                kvps.push(key+'='+params[key]);
            }
        }
        return url + '?' + kvps.join('&');
    };
  
     

   
  }