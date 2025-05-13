from interpreter import draw
from chessPictures import *

# Se coloca al caballo al costado de un caballo de color invertido
blancoYnegro = knight.join(knight.negative())

# Se coloca al caballo invertido y se inserta un caballo a su costado
negroYblanco = knight.negative().join(knight)

draw(negroYblanco.up(blancoYnegro))