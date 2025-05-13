from colors import *
class Picture:
  def __init__(self, img):
    self.img = img;

  def __eq__(self, other):
    return self.img == other.img

  def _invColor(self, color):
    if color not in inverter:
      return color
    return inverter[color]

  def verticalMirror(self):
    """ Devuelve el espejo vertical de la imagen """
    vertical = []
    for value in self.img:
      vertical.append(value[::-1])
    return vertical

  def horizontalMirror(self):
    """ Devuelve el espejo horizontal de la imagen """
    horizontal = []
    for valor in self.img:
      horizontal.insert(0, valor)
    return horizontal

  def negative(self):
    """ Devuelve un negativo de la imagen """
    negativo = []
    
    for valor in self.img:
      cadena = ""
      
      for pixel in valor:
        if pixel != "#":
          invertido = self._invColor(pixel)
          cadena += invertido
        
        else:
          cadena += pixel

      negativo.append(cadena)

    return negativo

  def join(self, p):
    """ Devuelve una nueva figura poniendo la figura del argumento 
        al lado derecho de la figura actual """
    
    lado = []

    for i in range(len(self.img)):
      nuevo = self.img[i] + p.img[i]
      lado.append(nuevo)
    
    return lado

  def up(self, p):
    """ Devuelve una nueva figura poniendo la figura p encima de la
        figura actual """
    
    arriba = p.img.copy()

    for valor in self.img:
      arriba.append(valor)
    
    return arriba

  def under(self, p):
    """ Devuelve una nueva figura poniendo la figura p sobre de la
        figura actual """
    
    encima = []
    cadena = ""
    
    for i in range(len(p.img)):          # Recorre las cadenas
      
      for j in range(len(p.img[i])):     # Recorre cada pixel - letra
        
        if p.img[i][j] == " ":
          cadena += self.img[i][j]

        else:
          cadena += p.img[i][j]
          
      encima.append(cadena)
      cadena = ""
       
    return encima
  
  def horizontalRepeat(self, n):
    """ Devuelve una nueva figura repitiendo la figura actual al costado
        la cantidad de veces que indique el valor de n """
    
    repeticion = Picture(self.img)

    for i in range(n-1):
      repeticion.img = repeticion.join(self)

    return repeticion

  def verticalRepeat(self, n):
    """Devuelve una nueva figura repitiendo la figura actual debajo, la
       cantidad de veces que indique el valor de n"""
    
    repeticion = Picture(self.img)

    for i in range(n-1):
      repeticion.img = repeticion.up(self)

    return repeticion

  #Extra: Sólo para realmente viciosos 
  def rotate(self):
    """Devuelve una figura rotada en 90 grados, puede ser en sentido horario
    o antihorario"""
    return Picture(None)

