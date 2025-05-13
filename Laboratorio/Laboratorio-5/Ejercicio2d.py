from interpreter import draw
from chessPictures import *

fila = square

for i in range(7):
    if i % 2 == 0:
        fila = fila.join(square.negative())
    else:
        fila = fila.join(square)

draw(fila)