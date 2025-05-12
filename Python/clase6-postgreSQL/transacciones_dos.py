import psycopg2 as bd 

conexion = bd.connect( 
    user = 'postgres',
    password = 'Joako2004@',
    host = '127.0.0.1',
    port = '5432',
    database = 'test_db'
)

try:
    conexion.autocommit = False
    cursor = conexion.cursor()
    sentencia = 'INSERT INTO persona (nombre, apellido, email) VALUES (%s, %s, %s)'
    valores = ('jorge', 'Prol', 'jprol@mail.com')
    cursor.execute(sentencia, valores)
    sentencia = 'UPDATE persona set nombre = %s, apellido = %s, email = %s WHERE id_persona = %s'
    valores = ('Juan Carlos', 'perez', 'jcperez@mail.com', 1)
    cursor.execute(sentencia, valores)
    conexion.commit()
    print('Termina la transacción')
except Exception as e:
    conexion.rollback()
    print(f'Excepción: {e}')
finally:
    conexion.close()
