from interpreter import draw
from chessPictures import *

# Se crea un Fig, donde se coloca al caballo al costado a otra
# Fig de un caballo de color invertido
blancoYnegro = knight.join(knight.negative())

# Se crea una Fig, donde se crea una Fig de caballo invertido y
# se inseta un caballo a su costado
negroYblanco = knight.negative().join(knight)

draw(negroYblanco.up(blancoYnegro))