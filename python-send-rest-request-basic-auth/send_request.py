#import requests
#r = requests.get('http://localhost:4000', auth=('userTest2', 'password2'))
#print(r.text)
#!/usr/bin/env python3

import urllib.request
import ssl
import certifi
from contextlib import closing
try:
    from urllib.parse import urlencode
    from urllib.request import urlopen
except ImportError: # Python 2
    from urllib import urlencode
    from urllib2 import urlopen


#https://stackoverflow.com/questions/33382273/python-3-5-urllib-request-request-post-data-to-website-doing-get-and-not-post
#https://stackoverflow.com/questions/6999565/python-https-get-with-basic-authentication

context = ssl.SSLContext(ssl.PROTOCOL_TLSv1)
context.verify_mode = ssl.CERT_REQUIRED
context.load_verify_locations(certifi.where())
httpsHandler = urllib.request.HTTPSHandler(context = context)

manager = urllib.request.HTTPPasswordMgrWithDefaultRealm()
manager.add_password(None, 'http://localhost:4000/auth', 'userTest', 'password')
authHandler = urllib.request.HTTPBasicAuthHandler(manager)

opener = urllib.request.build_opener(httpsHandler, authHandler)

# Used globally for all urllib.request requests.
# If it doesn't fit your design, use opener directly.
urllib.request.install_opener(opener)

data = urlencode({"field1" : "value", "Submit": "Save"}).encode()

response = urllib.request.urlopen('http://localhost:4000/auth-post',data)
response = urllib.request.urlopen('http://localhost:4000/auth')

print(response.read())