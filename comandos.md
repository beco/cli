# Lista de comandos usados en #PlatziTerm

_Work in progress_

## Conceptos
- **PROMPT**: Donde se encuentra el cursor, un lugar en el árbol de nodos que es la representación del disco duro en el sistema operativo

## Comandos (y algunas banderas)

- `ls`: lista los contenidos de un directorio
  - `ls -l`: lista los archivos con datos de cada nodo, ordenados alfabéticamente
  - `ls -lS`: lista los contenidos ordenados por tamaño
  - `ls -lh`: lista los contenidos mostrando los datos legibles fácilmente (tamaño)
  - `ls -r`: lista los archivos ordenados de forma inversa (sirve con las banderas `S` y `t`)
- `rm [FILE]`: elimina un archivo
- `rm -rf [DIRECTORY]`: elimina un directorio recursivamente **sin preguntar**
- `mv [FILE] [DIRECTORY]`: mueve FILE a DIRECTORY
- `mv [FILE] [NAME]`: renombra FILE a NAME
- `cd [DIRECTORY]`: lleva el PROMPT a DIRECTORY
- `touch [FILE]`: si FILE existe, modifica la hora de última modificación al momento de la ejecución del comando, si FILE no existe, lo crea
- `ln -s [DIRECTORY] [NAME]`: crea un _link_ simbólico llamado NAME hacia DIRECTORY, NAME se comporatará como DIRECTORY
- `tail`
- `more`
- `cat [nombre de archivo]`: permite visualizar el contenido de un archivo de texto
- `clear`:limpia la terminal
- `pwd`: imprime o muestra la ruta actual donde nos encontramos ubicados
- `man [comando]`: muestra la documentacion de todos los comandos
- `cat` [nombre de archivo]: permite visualizar el contenido de un archivo de texto
- `mkdir` [nombre directorio]: crea un directorio en la ubicación actual
- `mkdir` -p [ruta de directorios]: crea un árbol de directorios completo que no existe
- `cp` [archivo/directorio origen] [archivo/directorio destino]: copia un archivo o directorio desde un origen a un destino
- `cp` -r [directorio origen] [directorio destino]: copia un directorio y todos sus directorios hijos de forma recursiva
- `open  [ FILE | DIRECTORY ] ` Este comando puede abrir en el Finder la carpeta o archivos que le especifiquemos.

### Operadores para STDIN, STDOUT/STDERR
`````
      entrada      ->    ejecución     ->        salida
                                 +-------> STDOUT (1)
                                 |
                  +--------+     |
  STDIN (0) ----> | script | ----+
                  +--------+     |
                      T          |
                      |          +-------> STDERR (2)
                      |
          STDIN (0)---+
`````

#### operador `|` (pipe):
`command_1 | command_2`
Manda el STDOUT de `command_1` al STDIN de `command_2`

#### operador `>`
`command_1 > FILE`
Manda el STDOUT de `command_1` al inicio de FILE. Si FILE no existe lo crea, si existe **lo sobreescribe**.

#### operador `>>`
`command_1 >> FILE`
Manda el STDOUT de `command_1` al inicio de FILE. Si FILE no existe lo crea, si existe **lo concatena al fina** (tras un _newline_).

#### operador `<`
`command_1 < FILE`
Manda al STDIN de `command_1` el contenido de FILE.

#### redirección de salidas
1. `command > FILE` - manda el STDOUT a FILE
1. `command 1> FILE 2>FILE_ERROR` - manda el STDOUT a FILE y el STDERR a FILE_ERROR
1. `command > FILE 2>&1` - manda, tanto el STDOUT como el STDERR a FILE
1.- `command >> FILE 2>&1` - manda a **concatenar** las salidas de STDOUT y STDERR a FILE,
