const c = (x) => console.log(x);

function scroll(direction) {
    let currentImgs = Array.from($('#gallery').find('> div > img'));

    switch (direction) {
        case 'left':
            for (let i = 0; i < currentImgs.length; i++) {
                let srcNum = parseInt(currentImgs[i].src.split('gallery')[1].split('.')[0]);
                if (srcNum === 6) {
                    let src = `/nvbhs/assets/images/gallery0.webp`;
                    currentImgs[i].src = src;
                } else {
                    let src = `/nvbhs/assets/images/gallery${srcNum + 1}.webp`;
                    currentImgs[i].src = src;
                }
                $(currentImgs[i]).addClass('fadeIn');
                setTimeout(() => $(currentImgs[i]).removeClass('fadeIn', 5000));
            }
            break;
        case 'right':
            for (let i = 0; i < currentImgs.length; i++) {
                let srcNum = parseInt(currentImgs[i].src.split('gallery')[1].split('.')[0]);
                if (srcNum === 0) {
                    let src = `/nvbhs/assets/images/gallery6.webp`;
                    currentImgs[i].src = src;
                } else {
                    let src = `/nvbhs/assets/images/gallery${srcNum - 1}.webp`;
                    currentImgs[i].src = src;
                }
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



// const imgsArr = ['assets/images/gallery0.webp', 'assets/images/gallery1.webp', 'assets/images/gallery2.webp', 'assets/images/gallery3.webp', 'assets/images/gallery4.webp', 'assets/images/gallery5.webp', 'assets/images/gallery6.webp'];
// let currentImgs = Array.from($('#gallery').find('> div > img'));

// switch (direction) {
//     case 'left':
//         for (let i = 0; i < currentImgs.length; i++) {
//             c(i)
//             c(`current src - ${currentImgs[i].src}\nchanging src to - ${imgsArr[i + 1]}`);
//             currentImgs[i].src = imgsArr[i + 1];
//         }
//         break;
//     default:
//         break;
// }