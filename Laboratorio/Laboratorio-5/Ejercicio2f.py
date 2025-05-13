from interpreter import draw
from chessPictures import *

# Fila que comienza con cuadrado
fila = square

for i in range(7):
    if i % 2 == 0:
        fila = fila.join(square.negative())
    else:
        fila = fila.join(square)

# Fila que comienza con cuadrado negativo
filaNegativa = square.negative()

for i in range(7):
    if i % 2 == 0:
        filaNegativa = filaNegativa.join(square)
    else:
        filaNegativa = filaNegativa.join(square.negative())

# Union de cada fila
tabla = filaNegativa.up(fila)
tabla = tabla.up(tabla)

draw(tabla)