[![Build Status](https://travis-ci.org/Codents/web.png?branch=master)](https://travis-ci.org/Codents/web)
# **Codents Web**
[TEST WEB](https://codents.github.io/web/)

_Como crear rama [rama: sample-branch]_
```
$> git clone https://github.com/Codents/web.git
$> cd web
$> git checkout -b sample-branch
$> npm install
```

_Arrancar el proyecto en modo desarrollo y con watcher(tomara los cambios sin tener que compilar)_
```
$> npm run watch
```

_Construir el proyecto en modo release /build_
```
$> npm run build
```

_Ejecutar los Test BDD contra localhost_
```
$> npm run watch
$> npm run test # En una terminal diferente
```

_Ejecutar los Test BDD contra la web desplegada_
```
$> npm run test
```


_Issues_

En windows se ha detectado ciertos problemas a la hora de instalar el chromedriver y al compilar con webpack, para ello se han seguido estos pasos:

Añadir el fichero de configuración `.npmrc` con:
```
chromedriver_cdnurl=https://npm.taobao.org/mirrors/chromedriver
```

```
npm cache clean --force
```

```
node node_modules/node-sass/scripts/install.js
npm rebuild node-sass
```

Con esto se ha podido finalizar correctamente el `npm install` del proyecto y la compilación.

