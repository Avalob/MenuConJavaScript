const imgLentejas = 'https://imag.bonviveur.com/lentejas-con-chorizo.jpg';
const imgCremaCalabaza = 'https://recetasdecocina.elmundo.es/wp-content/uploads/2024/10/crema-de-calabaza-1024x683.jpg';
const imgEscalope = 'https://gbprodstorage.blob.core.windows.net/files/styles/recipe_main_image_mobile/windowsazurestorage/recipes/1540179645da3f1d822dd2deb8ab6260bc7a105135.jpg?h=289976fd';
const imgLubina = 'https://www.unileverfoodsolutions.es/dam/global-ufs/mcos/SPAIN/calcmenu/recipes/ES-recipes/general/lubina-al-horno-con-patata-panadera-y-vinagreta-de-tomate-yuzu-y-c%C3%ADtricos/main-header.jpg';
const imgFlan = 'https://cocinalh.es/wp-content/uploads/2023/11/web_flan-huevo_air-fryer.jpg';
const imgArrozLeche = 'https://recetasdecocina.elmundo.es/wp-content/uploads/2024/11/arroz-con-leche-1024x683.jpg';

const primerPlatoSelect = document.getElementById('primer-plato');
const segundoPlatoSelect = document.getElementById('segundo-plato');
const postreSelect = document.getElementById('postre');
const descuentoCheckbox = document.getElementById('descuento');
const btnComer = document.getElementById('btn-comer');
const totalAmount = document.getElementById('total-amount');

const imgPrimerPlato = document.getElementById('img-primer-plato');
const imgSegundoPlato = document.getElementById('img-segundo-plato');
const imgPostre = document.getElementById('img-postre');
const totalDiv = document.getElementById('total');  // Referencia al div que contiene el total

function actualizarImagenes() {
    imgPrimerPlato.src = primerPlatoSelect.value == '3' ? imgLentejas : primerPlatoSelect.value == '2' ? imgCremaCalabaza : '';
    imgSegundoPlato.src = segundoPlatoSelect.value == '4' ? imgEscalope : segundoPlatoSelect.value == '5' ? imgLubina : '';
    imgPostre.src = postreSelect.value == '1' ? imgFlan : postreSelect.value == '2' ? imgArrozLeche : '';
}

function calcularTotal() {
    let total = parseFloat(primerPlatoSelect.value) + parseFloat(segundoPlatoSelect.value) + parseFloat(postreSelect.value);
    if (descuentoCheckbox.checked) total *= 0.9;
    totalAmount.textContent = total.toFixed(2);

    // Mostrar el total solo cuando se haga clic en el botón
    totalDiv.style.display = 'block';  // Hacer visible el total
}

primerPlatoSelect.addEventListener('change', () => { actualizarImagenes(); });
segundoPlatoSelect.addEventListener('change', () => { actualizarImagenes(); });
postreSelect.addEventListener('change', () => { actualizarImagenes(); });
descuentoCheckbox.addEventListener('change', () => { });

btnComer.addEventListener('click', calcularTotal);  // Solo muestra el total cuando se hace clic en el botón
