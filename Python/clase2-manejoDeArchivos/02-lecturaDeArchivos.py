# w: escribe
# r: lee
# a: añade
# x: crea

file = open('prueba.txt', 'r', encoding='UTF8')

# print(file.read())
# print(file.read(16))
# print(file.read(5))
# print(file.readline())
# print(file.readline())

# iterar el archivo
# for line in file:
    # print(line)
    # print(file.readlines()) acceder como si fuera lista

# print(file.readlines()[1])

# agregar información
file2 = open('copia.txt', 'a', encoding='UTF8')
file2.write(file.read())
file.close()