import psycopg2 # importar la libreria para crear la conección a la base de datos 

conexion = psycopg2.connect( # pasar los parametros para la conección
    user = 'postgres',
    password = 'Joako2004@',
    host = '127.0.0.1',
    port = '5432',
    database = 'test_db'
)

try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'SELECT * FROM persona WHERE id_persona IN %s'
            entrada = input('Digite los id de las personas que quiera buscar, separe por coma: ')
            llaves_primarias = (tuple(entrada.split(",")), )
            cursor.execute(sentencia, llaves_primarias) # ejecutar la variable con la consulta usando el cursor
            registros = cursor.fetchall() # obtener los registros
            for registro in registros:
                print(registro) # imprimir los registros
                        
except Exception as e:
    print(f'Excepción: {e}')
    
finally:
    conexion.close() # cerrar la conexión a la base de datos
    