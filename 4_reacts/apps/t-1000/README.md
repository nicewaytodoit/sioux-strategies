# T-1000


## Error:

> react-scripts build

Creating an optimized production build...
Failed to compile.

Failed to minify the bundle. Error: static/js/main.c72ffdb2.chunk.js from Terser
TypeError: Cannot read property 'minify' of undefined
    at compiler.run (C:\Users\mind\Desktop\Projects\sandbox\sioux-strategies\4_reacts\t-1000\node_modules\react-scripts\scripts\build.js:169:23)
    Read more here: http://bit.ly/CRA-build-minify

### Fix: 
`$ npm install terser@3.14.1 --save-dev`

