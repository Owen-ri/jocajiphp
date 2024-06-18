function togglePDF(pdfId) {
    var overlay = document.getElementById('overlay');
    var pdfContainer = document.getElementById(pdfId);

    if (pdfContainer.style.display === 'none' || pdfContainer.style.display === '') {
        overlay.style.display = 'block';
        pdfContainer.style.display = 'block';
    } else {
        overlay.style.display = 'none';
        pdfContainer.style.display = 'none';
    }
}

document.getElementById('overlay').addEventListener('click', function() {
    var overlay = document.getElementById('overlay');
    var pdfContainers = document.querySelectorAll('.pdf-container');

    overlay.style.display = 'none';
    pdfContainers.forEach(function(container) {
        container.style.display = 'none';
    });
});