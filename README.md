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
    + T-1000/       (T-800 index.html)

Check example: `1_plain_old_folders`

```
 $ npm install -g node-static
 
 $ static
 > serving "." at http://127.0.0.1:8080
```



### 2) Calling NodeJs for help


### 3) Different Folders and Nginx routing


### 4) React SPAs and packages

