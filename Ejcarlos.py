## Estudiantes y edad

"""prom = int(input("ingrese el numero de estudiantes totales "))
sumatoria = 0
Masculino = 0
Femenino = 0
edad = 0
mayor = 0
menor = 0
mejor = 0
peor = 0
menor = 999999

for n in range(prom):
    nombre = input("digite el nombre del estudiante: ")
    edadE = int(input("Digite la edad del estudiante: "))
    edad = edad + edadE
    
    nota = float(input("digite la nota del estudiante: ")) 
    sumatoria = sumatoria + nota
    
    sexo = input("si es sexo masculino poner m, si es femenimo pon f: ")
    
    if sexo == "m" or sexo == "M":
        Masculino = Masculino +1
    elif sexo == "f" or sexo == "F":
        Femenino = Femenino + 1

    if nota > mayor:
        mayor = nota
        mejor = nombre

    if nota < menor:
        menor = nota
        peor = nombre


promedio = sumatoria/prom
edadprom = edad/prom
print("el promedio de los estudiantes es: ", promedio)
print("en el grupo hay ", Masculino," hombres")
print("en el grupo hay ", Femenino," mujeres")
print ( " el promedio de la edad de todos los estudiante es: ", edadprom)
print("La peor nota del salon es de", peor ," y saco: ", menor)
print("La mejor nota del salon es de", mejor ," y saco: ", mayor)"""

# N estudiantes de la facultad

prom = int(input("ingrese el numero de estudiantes totales "))
sumatoria = 0
Masculino = 0
Femenino = 0
notaE = 0
notaf = 0
edad = 0
mayor = 0
menor = 0
mejor = 0
peor = 0
menor = 999999

for n in range(prom):

    nombre = input("digite el nombre del estudiante: ")
    for z in range(3):
        materia = float(input("digite la nota del estudiante"))
        notaE = notaE + materia
    

    notaf = notaf + (notaE/3)
    edadE = int(input("Digite la edad del estudiante: "))
    edad = edad + edadE

    sexo = input("si es sexo masculino poner m, si es femenimo pon f: ")
    if sexo == "m" or sexo == "M":
        Masculino = Masculino +1
    elif sexo == "f" or sexo == "F":
        Femenino = Femenino + 1

    
    if notaE/3 > mayor:
        mayor = notaE/3
        mejor = nombre

    if notaE/3 < menor:
        menor = notaE/3
        peor = nombre


definitiva = notaE/3
promf = notaf/prom
edadprom = edad/prom


print("en el grupo hay ", Masculino," hombres")
print("en el grupo hay ", Femenino," mujeres")
print("el promedio de la edad de todos los estudiante es: ", edadprom)
print("el promedio la facultad es: ", promf)
print("La peor nota del salon es de", peor ," y saco: ", menor)
print("La mejor nota del salon es de", mejor ," y saco: ", mayor)