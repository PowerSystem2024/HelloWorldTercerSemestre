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
            sentencia = 'DELETE FROM persona WHERE id_persona = %s'
            entrada = input('Digite el ID de la persona que desea eliminar: ')
            valores = (entrada,)
            cursor.execute(sentencia, valores)
            registros_eliminados = cursor.rowcount
            print(f'Los registros eliminados son: {registros_eliminados}')
            
                        
except Exception as e:
    print(f'Excepción: {e}')
    
finally:
    conexion.close() # cerrar la conexión a la base de datos
    