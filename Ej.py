#Facultad|Numero Estudiantes sexo Masculino y Femenino|Edad Promedio
#Leer 3 notas de estudiantes y calcular definitiva|Promedio de notas general
#Estudiantes con mayor nota|Estudiante con menor nota

f = input("Cual es el nombre de la facultad? ")
e = int(input("Introduzca el numero de Estudiantes que tiene en su clase: "))
ch = 0
cm = 0
mayor = 0
menor = 99999
snota = 0
notaf = 0
pnota = 0
sedad = 0


for p in range(e):
    nombre = input("Introduzca el nombre del Estudiante: ")
    edad = int(input("Introduzca la edad del Estudiante: "))
    sexo = input("Introduzca el sexo del Estudiante: ")
    for n in range(3):
        nota = float(input("Introduzca las notas del estudiante: "))
        snota = snota + nota
        
    notaf = notaf + (snota/3)
    gnota = notaf/e
    sedad = sedad+edad
    pedad = sedad/e
    if sexo == 'M' or sexo =='m':
        ch = ch + 1
    elif sexo == 'F' or sexo =='f':
        cm = cm + 1
    if notaf > mayor:
        mayor = notaf
        mejor = nombre
    if notaf < menor:
        menor = notaf
        peor = nombre

print(f"En la Facultad de {f}.")
print(f"El promedio General en las notas es de {gnota} habiendo {ch} estudiante(s) masculino(s) y {cm} femenina(s).")
print(f"El promedio de las edades es de {pedad}.")
print(f"El mejor promedio de la facultad fue de {mejor} con una nota de {mayor}.")
print(f"El peor promedio fue de {peor} con un promedio de {menor}.")