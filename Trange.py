#Ciclos Range Code

"Range 1st (fin) - Ej: Range(5) -> (0,1,2,3,4)"
"Range 2d (Inicio,fin) - Ej: Range(1,5) -> (1,2,3,4)"
"Range 3d (Inicio,fin,saltos) - Ej: Range(1,10,2) -> (1,3,5,7,9)"

"El fin siempre es obligatorio pero nunca se cuenta"

"{For} = Conozco el fin"
"{While} = No conozco el fin"
#Ej
n = input("Ingrese el valor de n: ")
range, n in range(1,6): print(n)