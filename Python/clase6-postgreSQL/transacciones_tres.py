import psycopg2 as bd 

conexion = bd.connect( 
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
            valores = ('Alex', 'Rojas', 'arojas@mail.com')
            cursor.execute(sentencia, valores)
            sentencia = 'UPDATE persona set nombre = %s, apellido = %s, email = %s WHERE id_persona = %s'
            valores = ('Juan Carlos', 'roldan', 'jcroldan@mail.com', 1)
            cursor.execute(sentencia, valores)
except Exception as e:
    print(f'Excepción: {e}')
finally:
    conexion.close()

print('Termina la transacción')
