import psycopg2 # importar la libreria para crear la conección a la base de datos 

conexion = psycopg2.connect( # pasar los parametros para la conección
    user = 'postgres',
    password = 'Joako2004@',
    host = '127.0.0.1',
    port = '5432',
    database = 'test_db'
)

cursor = conexion.cursor() # crear un cursor
sentencia = 'SELECT * FROM persona' # crear un consulta y asignarla a una variable
cursor.execute(sentencia) # ejecutar la variable con la consulta usando el cursor
registros = cursor.fetchall() # obtener los registros

print(registros) # imprimir los registros

cursor.close() # cerrar la conección a la base de datos
conexion.close() # cerrar la conección a la base de datos