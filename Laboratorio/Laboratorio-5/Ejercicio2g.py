from interpreter import draw
from chessPictures import *

# Se comienza insertando las piezas blancas
trio = bishop.join(knight.join(rock))
trioI = rock.join(knight.join(bishop))
piezas = trioI.join(queen.join(king.join(trio)))
piezas = piezas.up(pawn.horizontalRepeat(8))

draw(piezas)
