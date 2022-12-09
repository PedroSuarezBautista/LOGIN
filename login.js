let user = (prompt("Inserte su usuario"))

if (user != "PEDROSUAREZ")
{
    do
    {
        alert("El Usuario está incorrecto");
        user = prompt("Inserte su Usuario")
    
    }
    while (user !="PEDROSUAREZ")
}
else (user == "PEDROSUAREZ")
{
    alert("HOLA!, El Usuario esta correcto")
}

let pass = (prompt("Inserte su contrasena"))

if (pass != "12345")
{
    do
    {
        alert("La contraseña esta incorrecta");
        pass = prompt("Inserte su Contraseña")
    }
    while (pass !="12345")
}
else (pass == "12345")
{
    alert("HOLA!, La Contraseña esta correcta")
}