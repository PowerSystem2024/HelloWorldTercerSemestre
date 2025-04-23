class CatalogoPeliculas:
    ruta_archivo = 'peliculas.txt'

    @staticmethod
    def agregar_pelicula(p):
        with open(CatalogoPeliculas.ruta_archivo, 'a', encoding='utf-8') as archivo:
            archivo.write(f"{p.nombre}\n")
        print(f"Agregando: {p.nombre}")
    
    @staticmethod
    def listar_peliculas():
        try:
            with open(CatalogoPeliculas.ruta_archivo, 'r', encoding='utf-8') as archivo:
                peliculas = archivo.readlines()
                if peliculas:
                    print("\nListado de películas:")
                    for pelicula in peliculas:
                        print(pelicula.strip())
                else:
                    print("\nEl catálogo está vacío.")
        except FileNotFoundError:
            print("\nNo se encontró el archivo. Agregá una película primero.")

    @staticmethod
    def eliminar():
        import os
        try:
            os.remove(CatalogoPeliculas.ruta_archivo)
            print("Archivo eliminado correctamente")
        except FileNotFoundError:
            print("No existe el archivo a eliminar")