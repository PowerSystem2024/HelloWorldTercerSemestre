class ManejoArchivos:
    def __init__(self, nombre):
        self.nombre = nombre
    
    def __enter__(self):
        print('Obtener el recurso'.center(50, '-'))
        self.nombre = open(self.nombre, 'r', encoding='UTF8')
        return self.nombre
    
    def __exit__(self, tipo, valor, traza):
        print('cerrar el recurso'.center(50, '-'))
        if self.nombre :
            self.nombre.close()
        