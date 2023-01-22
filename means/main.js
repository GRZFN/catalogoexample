let datos = [
    ["1", "Top de concha con botón de canesú de encaje de guipur", "0,00"],
    ["2", "Top con estampado de corazón de espalda con lazo", "0,00"],
    ["3", "Blusa de espalda con cordón con encaje", "0,00"],
    ["4", "Camisa de cuello V de cuello profundo con bordado", "0,00"],
    ["5", "Blusa Liso Casual", "0,00"],
    ["6", "Body ajustado sólido cortado alto de lado bajo", "0,00"],
    ["7", "Vestido camisero floral con volantes en el bajo", "0,00"],
    ["8", "Vestido lencero con bajo fruncido con encaje", "0,00"],
    ["9", "Vestido lencero con estampado de bufanda por toda la prenda", "0,00"],
    ["10", "Vestido de tirante con efecto tie dye y muslo dividido", "0,00"],
    ["11", "Vestido de tirantes maxi bajo con fruncido floral", "0,00"],
    ["12", "Vestido halter con cordón en la cintura", "0,00"],
    ["13", "Abrigo con botón de cuello V", "0,00"],
    ["14", "Camiseta corta de espalda con cordón con tiras cruzadas", "0,00"],
    ["15", "Camiseta de cuello alto con volantes en rosa neón", "0,00"],
    ["16", "Camiseta con encaje de manga mariposa", "0,00"],
    ["17", "Camiseta de rayas de manga murciélago", "0,00"],
    ["18", "Camiseta con hombros caídos y aberturas cruzadas en la espalda", "0,00"],
    ["19", "Top de mujeres Drapeado Liso Glamour", "0,00"],
    ["20", "Top bajo asimétrico con inserción con encaje de un hombro", "0,00"],
    ["21", "Top de mujeres Volante rígido Liso Bohemio", "0,00"],
    ["22", "Top con cordón fruncido de un hombro", "0,00"],
    ["23", "Top corto de rayas con cordón delantero de manga farol", "0,00"],
    ["24", "Top halter de espalda con cordón", "0,00"],
    ["25", "Camiseta sin mangas con dobladillo curvo liso", "0,00"],
    ["26", "Top de tirantes unicolor bajo con fruncido", "0,00"],
    ["27", "Top de tirantes unicolor bajo con fruncido", "0,00"],
    ["28", "Top de tirantes peplum de lunares de espalda con fruncido", "0,00"],
    ["29", "Camis Encaje en contraste Liso Bohemio", "0,00"],
    ["30", "Top de tirantes corto fruncido bajo fruncido", "0,00"]
]
var codigo = ""
for (let i = 0; i < datos.length; i++) {
    var ele = datos[i];
    codigo = codigo + "<a href=\"next-page/page" + ele[0] +
        ".html\"><div class=\"card\"><img src=\"means/media/img" + ele[0] +
        ".jpg\"><div class=\"description\"><div class=\"h1\" id=\"title\">" + ele[1] + "</div><div class=\"h2\" id=\"price\">Bs. " + ele[2] +
        " BOB</div></div></div></a>"
}
console.log(codigo)
document.getElementById('gallery1').innerHTML = codigo;



