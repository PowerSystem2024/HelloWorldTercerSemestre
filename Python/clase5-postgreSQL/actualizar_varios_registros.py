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
            sentencia = 'UPDATE persona SET nombre = %s, apellido = %s, email = %s WHERE id_persona = %s' 
            valores = (
                ('Juan', 'Perez', 'jperes@mail.com', 4),
                ('Romina', 'Ayala', 'ayalar@mail.com', 5)
                    )
            cursor.executemany(sentencia, valores) # ejecutar la variable con la consulta usando el cursor
            registros_actualizados = cursor.rowcount
            print(f'Los registros actualizados son: {registros_actualizados}')
            
                        
except Exception as e:
    print(f'Excepción: {e}')
    
finally:
    conexion.close() # cerrar la conexión a la base de datos
    