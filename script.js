function loadImage(event){
var image = document.getElementById('output');
image.src = URL.createObjectURL(event.target.files[0]);
}

function loadPDF(event){
var pdf = document.getElementById('pdf-view');
pdf.src = URL.createObjectURL(event.target.files[0]);
}