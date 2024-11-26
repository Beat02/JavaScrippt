

function unionString(string1, string2) {

    if (string1 < string2) {
        alert("La cadena " + string2 + " es la más larga.")

    } else {
        alert("La cadena " + string1 + " es la más larga.")
    }
    alert("La cadena " + string1 + " tiene " + length(string1) + " caracteres.")
    alert("La cadena " + string2 + " tiene " + length(string2) + " caracteres.")
    alert("Entre ambas cadenas, la longitud total es de: " + (length(string1) + length(string2)))
    return string1 + " " + string2
}

console.log(unionString("Hola", "caracola"))