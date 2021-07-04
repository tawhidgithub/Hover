var crnter = document.querySelector("#curcle");

crnter.addEventListener('mouseover', function () {
    if (!crnter.classList.contains('hover')) {
        crnter.classList.add('hover');
    }
})


crnter.addEventListener('mouseout', function () {
    if (crnter.classList.contains('hover')) {
        crnter.classList.remove('hover');
    }
})

