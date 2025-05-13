from interpreter import draw
from chessPictures import *

fila = square.negative()

for i in range(7):
    if i % 2 == 0:
        fila = fila.join(square)
    else:
        fila = fila.join(square.negative())

draw(fila)