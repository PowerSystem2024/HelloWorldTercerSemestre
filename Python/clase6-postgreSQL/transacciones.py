import psycopg2 as bd 

conexion = bd.connect( 
    user = 'postgres',
    password = 'Joako2004@',
    host = '127.0.0.1',
    port = '5432',
    database = 'test_db'
)

try:
    conexion.autocommit = True
    cursor = conexion.cursor()
    sentencia = 'INSERT INTO persona (nombre, apellido, email) VALUES (%s, %s, %s)'
    valores = ('Maria', 'Esparza', 'mesparza@mail.com')
    cursor.execute(sentencia, valores)
    # conexion.commit()
    print('Termina la transacción')
except Exception as e:
    conexion.rollback()
    print(f'Excepción: {e}')
finally:
    conexion.close()
