from interpreter import draw
from chessPictures import *

# Se coloca al caballo al costado de un caballo de color negativo
blancoYnegro = knight.join(knight.negative())

# Se coloca al caballo negativo y se inserta un caballo a su costado,
# se invierte
negroYblancoInvertido = blancoYnegro.verticalMirror()

draw(negroYblancoInvertido.up(blancoYnegro))