# declarar la varibale para el archivo
try:
    file = open('prueba.txt', 'w', encoding='UTF8') # encoding para formato de acentos
    file.write('Programamos con diferentes tipos de archivos, ahora .txt\n')
    file.write('Los acentos son importantes para las palabras\n')
    file.write('Acción, ejecución y producción\n')
    file.write('Letras:\nw -> escribe\nr -> lee\na -> agrega\nx -> crea\nt -> texto\nb -> binarios\nw+ -> escribe y lee\nr+ -> lee y escribe')
    file.write('\nsaludos')
    file.write('\nCon esto terminamos')
except Exception as e:
    print(e)
finally:
    file.close() # cerrar el archivo al terminar
# file.write('Todo quedo perfecto') como el archivo ya está cerrado, no se puede escribir