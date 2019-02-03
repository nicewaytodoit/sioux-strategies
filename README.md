# sioux-strategies
Sandboxing a few hosting strategies for multiple SPAs deployment

## Problem statement
This repo should explain few strategies how to deal with the case when there is need to deploy sevearl SPAs under the same domain.
Allowing redirection between application.
```
A -> B
A -> C
B -> A
B -> C
C -> A
C -> B
```
Althoug solution can look simple there are few complexitis about the routing and securty (sharing cookies, tokens) that must be considered while deploying SPA (single-page applications).

### 1) Folder structure
For the first example our physical folder structure on hard drive will define routing. For this purpose we will use static conent pages of three index.html pages.
Three "applications" (T-800, T-1000, SkyNet) will map to specific folders but in first case because we won't have any routing one of these tree applications needs to behave as entry point so they will respectively map to following structure:

+ /                 (SkyNet index.html)
    + T-800/        (T-800 index.html)
    + T-1000/       (T-1000 index.html)

Check example: `1_plain_old_folders`

```
 $ npm install -g node-static
 
 $ static
 > serving "." at http://127.0.0.1:8080
```

Problem with this strutucture is that we need to have strict folder structure, URLs are mapped to hard drive and 404 pages is not defind if we specifically do not tell our hosting engine to do so.

### 2) Calling NodeJs for help


```bash
$ cd 2_nodejs
$ npm init
$ npm install express --save
$ touch app.js
```

```javascript
const express = require('express');
const app = express();
const path = require('path');

const port = 8000;
const rootRoute = '/';
const t800Route = '/t-800';
const t1000Route = '/t-1000';

app.get(rootRoute, function(req, res) {
    res.sendFile(path.join(__dirname, 'skynet', '/index.html'));
});

app.get(t800Route, function(req, res) {
    res.sendFile(path.join(__dirname, 't-800', '/index.html'));
});

app.get(t1000Route, function(req, res) {
    res.sendFile(path.join(__dirname, 't-1000', '/index.html'));
});

app.listen(port);

console.log(`Hosting at http://localhost:${port}`);
```

Final touch we will resolve `favicon.ico` file. 
Install following package `npm i --save serve-favicon` and then add these two lines:

```
var favicon = require('serve-favicon');
app.use(favicon(path.join(__dirname,  'skynet', 'favicon.ico')));
```

This solution is allowing us to have what ever folder we want and in that way we can separate concerns.
Later on if we want to change urls it we do not need to move folder we only need to change routing rules.

### 3) Different Folders and Nginx routing
http://nginx.org/en/docs/http/request_processing.html

```nginx
server {
  listen 80 default_server;
  listen [::]:80 default_server;

  root /var/www/3_nginx;

  index index.html;

  server_name localhost;

  location / {
    try_files $uri $uri/ =404;
  }
}
```

### 4) React SPAs and packages

Created in 
+ 4_reacts
    + apps - applications
    + hosting - builds

PUBLIC_URL=/t-800

### 5 Apache server

https://www.apachelounge.com/download/

unzip
mkdir apache root 
copy conent of Apache to c:/apache

adjust confi
c:\apache\conf\httpd.conf 


Define SRVROOT "c:/apache"
ServerAdmin admin@localhost
ServerName localhost:80
DocumentRoot "${SRVROOT}/htdocs"
<Directory "${SRVROOT}/htdocs">
ScriptAlias /cgi-bin/ "${SRVROOT}/cgi-bin/"

cd apache\bin
httpd -k install
httpd -k start
~Private netowr, su as my home or work network 
-public network 

apache Monitor 

KeyThing except of PUBLIC_URL is to adjust Aliases in apache and access to specific folders ...

## Security Cookies / Token sharing 

