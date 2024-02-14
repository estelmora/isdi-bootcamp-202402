#bash
pwd: indica la carpeta actual
ls: ensenya les carpetes dins de la carpeta actual
ls -l: mostra els permisos
drwx
- d: directorio
- r: read
- w: write
- x: exectue

l: link
.= archivo oculto
touch : crea doc
mkdir: crea directorio//carpeta
cd: change directorio (para crear o acceder a carpetas ej: cd estel y dentro de allí puedes crear y ver etc.)
cd .. : volver a la carpeta anterior 
mv: cambiar nombre directorio/carpeta

comand J : para abrir el terminal dentro de visual

## pwd path to working directory:
```sh
/Users/esetlmora
````

```js
console.log("Hola mundo")
````
## ls -l (lust file with details)
```sh
sh = bash ()
````
### ls -a ( list hiddens)
````sh
muestra los archivos ocultos
Ejemplo:
estel@MacBook-Air-de-Estel ~ % ls -a
.			.viminfo		Movies
..			.vscode			Music
.CFUserTextEncoding	.zsh_history		Pictures
.DS_Store		.zsh_sessions		Public
.Trash			Applications		README.md
.cups			Desktop			index.html
.gitconfig		Documents		workspace
.lesshst		Downloads
.np
```

## mkdir (crear carpeta / directorio)
```sh
$ mkdir workspace
````
## cd (cambiar directorio)
```sh
$ cd workspace
````
## touch (crear un archivo vacío)
````sh
$ touch hello.world
````
## mv (renombrar una carpeta o mover carpeta)
```sh
$ mv hello.world  hola.mundo
carpeta  hello world --> hola.mundo
para cambiar de lugar la carpeta:
$ move hello.world folder-a/folder-b/folder-c
poner la ruta nueva 
````

## clear ( limpiar el terminal)
```sh
deja el terminal en blanco, sin tener que cerrar y volver abrir
````
## sudo (super admin user)
```sh
sirve para hacer acciones que requieren contraseña o perfil de administrador
````
## top
```sh
muestra todos los procesos que están pasando en el ordenador, %CPU, etc
````
## kill -9
```$ kill -9
para parar el "top" y poder seguir usando el terminal
````
## tree <path> (muestra la estructura de archivos/carpetas en forma de árbol)
```sh
$ tree workspace/isdi-bootcamp2024
por ahora no funciona, porque se tiene que instalar
```

## rm -rf (eliminar carpeta + contenido)
```sh
$ rm -rf workspace/helloworld
 workspace (+ruta del directorio/carpeta)
$ rm :remove --> borra la carpeta si está vacía, si hay contenido no
$ rm -rf : eliminar forzado con el contenido de dentro.
````

