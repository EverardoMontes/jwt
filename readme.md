JWT PRÁCTICA <br>   
Aquí voy a plasmar un readme pequeñito

El proyecto es una fusión de mis 2 actividades anteriores, la implementación de variables de entorno y al mismo tiempo un
login verificable con autentificación y un token secreto.
<br>
La implementación de esto no es tan complicado, basta con entender que las variables de entorno salen del objeto process.env y de ahí le añades la propiedad que hayas puesto como variable en tu archivo de configuración, así en vez de tener a=3 tienes que a=proccess.env.variableA y en el archivo de configuracion tienes que variableA = 3.
<br>
Además de que se utiliza la librería uuid que por lo que revisé y comprendí, es una forma más eficiente de darles números totalmente únicos a la identificación de nuestras entradas a bd.

Es buena idea porque da un número totalmente único a diferencia de autonumerarlo.
<br>
por lo que entendí, el parámetro de salt rounds nos da la cantidad de esfuerzo y tiempo gastado en codificar las contraseñas a través de un hash, gracias a esto mientras más esfuerzo se gasta en codificarlas, más complicado es obtener la contraseña a la hora de querer irrumpir en la base de datos.