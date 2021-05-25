$(document).ready(function () {
    let slideIndex = 0

    showPhotos()

    function showPhotos() {

        let slides = $('.photo img')

        console.log(slides)

        for (let i = 0; i < slides.length; i++) {
            $(slides[i]).hide()

        }
        if (slideIndex > slides.length) {
            slideIndex = 1
        }
        slideIndex++
        console.log(slideIndex)
        $(slides[slideIndex - 1]).show()
        setTimeout(showPhotos, 500)
    }


})