from interpreter import draw
from chessPictures import *

# Se comienza insertando las piezas blancas
trio = bishop.join(knight.join(rock))
trioI = rock.join(knight.join(bishop))
especialesBlancos = trioI.join(queen.join(king.join(trio)))
peonesBlancos = pawn.horizontalRepeat(8)
piezasBlancas = especialesBlancos.up(peonesBlancos)

# Se crean las piezas negativas
piezasNegativas = peonesBlancos.negative().up(especialesBlancos.negative())

# Se crean filas
# Fila que comienza con cuadrado Blanco
fila = square

for i in range(7):
    if i % 2 == 0:
        fila = fila.join(square.negative())
    else:
        fila = fila.join(square)

# Fila que comienza con cuadrado Negativo
filaNegativa = fila.negative()

# Fila de 2 para repetir despues
cuartoTabla = filaNegativa.up(fila)


# Se procede a juntar todo
# Va seguir un orden:

# 1ro Se sobre ponen las piezas a cuadros
piezasNegativas = cuartoTabla.under(piezasNegativas);
piezasBlancas = cuartoTabla.under(piezasBlancas)
draw(piezasBlancas)