from interpreter import draw
from chessPictures import *

# Se crea un Fig, donde se coloca al caballo al costado a otra
# Fig de un caballo de color invertido
blancoYnegro = Picture(knight.join(Picture(knight.negative())))

draw(blancoYnegro)