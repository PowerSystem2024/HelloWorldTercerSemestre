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
            sentencia = 'INSERT INTO persona (nombre, apellido, email) VALUES (%s, %s, %s)' 
            valores = (
                ('Carlos', 'Lara', 'clara@mai.com'),
                ('Marcos', 'Canto', 'mcanto@mail.com'),
                ('Marcelo', 'Cuenca', 'mcuenca@mail.com')
                )
            cursor.executemany(sentencia, valores) # ejecutar la variable con la consulta usando el cursor
            # conexion.commit() no es necesario usando el with
            registros_insertados = cursor.rowcount
            print(f'Los registros insertados son: {registros_insertados}')
            
                        
except Exception as e:
    print(f'Excepción: {e}')
    
finally:
    conexion.close() # cerrar la conexión a la base de datos
    