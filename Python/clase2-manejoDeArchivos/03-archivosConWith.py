from manejoArchivos import ManejoArchivos

# with open('prueba.txt', 'r', encoding='UTF8') as file:
#     print(file.read()) 

with ManejoArchivos('prueba.txt') as file:
    print(file.read)