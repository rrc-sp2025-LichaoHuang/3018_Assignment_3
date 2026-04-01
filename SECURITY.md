# Security Configuration Justification

## Overview

In this project, I used Helmet.js and CORS to improve the security of my API. These configurations help protect the application from common web vulnerabilities such as clickjacking, MIME sniffing, and information leakage.


## Helmet Configuration

Helmet.js is used to set secure HTTP headers.

### 1. X-Content-Type-Options

This header prevents browsers from guessing the content type.  
According to MDN Web Docs, this helps reduce the risk of executing malicious files as scripts.


### 2. X-Frame-Options

This header prevents the application from being embedded in an iframe.  
This helps protect against clickjacking attacks. According to OWASP, clickjacking can trick users into clicking hidden elements (OWASP).


### 3. Referrer-Policy

This header controls how much information is shared when making requests.  

### 4. Hide X-Powered-By

This removes the `X-Powered-By` header that reveals the backend technology.  
According to Helmet.js documentation, hiding this information reduces the attack surface (Helmet.js).


### 5. Content Security Policy (Disabled)

Content Security Policy (CSP) is disabled because this application is a JSON API and does not render HTML.  
Helmet.js documentation states that CSP is mainly used for browser-based applications (Helmet.js).


## CORS Configuration

CORS controls which origins can access the API.

- `origin: true` allows requests from different origins during development  
- `credentials: true` allows cookies and authentication headers  

According to MDN, CORS is used to securely allow or restrict requested resources on a web server.


## References

- Helmet.js. Helmet Security Middleware  
  https://helmetjs.github.io/

- MDN Web Docs. HTTP Headers  
  https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers

- OWASP. Clickjacking  
  https://owasp.org/www-community/attacks/Clickjacking

- OWASP Top 10  
  https://owasp.org/www-project-top-ten/