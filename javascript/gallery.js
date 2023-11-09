const c = (x) => console.log(x);

function scroll(direction) {
    const imgsArr = ['assets/images/gallery1.webp', 'assets/images/gallery2.webp', 'assets/images/gallery3.webp', 'assets/images/gallery4.webp', 'assets/images/gallery5.webp', 'assets/images/gallery6.webp', 'assets/images/gallery7.webp'];
    let currentImgs = Array.from($('#gallery').find('> div > img'));

    switch (direction) {
        case 'left':
            for (let i = 0; i < currentImgs.length; i++) {
                if (i === 0) {
                    currentImgs[i].src = imgsArr[imgsArr.length - 1];
                } else {
                    currentImgs[i].src = imgsArr[i - 1];
                }
            }
            break;
        case 'right':
            for (let i = 0; i < currentImgs.length; i++) {
                currentImgs[i].src = imgsArr[(i + 1) % imgsArr.length];
            }
            break;
        default:
            break;
    }
}


function adjustGallery(gallery) {
    if ($(window).width() > 1600) {
        if ($(gallery).find('#newDiv').length > 0) return;
        const newDiv = $('<div></div>');
        const newImg = $('<img />');
        newImg.attr('src', 'assets/images/gallery4.webp');
        newImg.attr('alt', 'Room Image');
        newImg.attr('loading', 'lazy');
        newDiv.append(newImg);
        newDiv.attr('id', 'newDiv');
        gallery.append(newDiv);
    } else if ($(window).width() <= 1600) {
        if (!$(gallery).find('#newDiv').length > 0) return;
        $('#newDiv').remove();
    }
}

$(document).ready(() => {
    adjustGallery($('#gallery'));
    $(window).on('resize', () => adjustGallery($('#gallery')));
    $('#left').on('click', () => scroll('left'));
    $('#right').on('click', () => scroll('right'));
});