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
