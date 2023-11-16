const c = (x) => console.log(x);

function scroll(direction) {
    let currentImgs = Array.from($('#gallery').find('> div > img')); //Array current children of #gallery
    switch (direction) {
        case 'left':
            for (let i = 0; i < currentImgs.length; i++) {
                let srcNum = parseInt(currentImgs[i].src.split('gallery')[1].split('.')[0]); //number after 'gallery' in src
                if (srcNum === 6) {
                    let src = `/nvbhs/assets/images/gallery0.webp`; //Loops back to first image
                    currentImgs[i].src = src;
                } else {
                    let src = `/nvbhs/assets/images/gallery${srcNum + 1}.webp`; //Changes src to next image to be displayed
                    currentImgs[i].src = src;
                }
                $(currentImgs[i]).addClass('fadeIn');
                setTimeout(() => $(currentImgs[i]).removeClass('fadeIn'), 200);
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
                $(currentImgs[i]).addClass('fadeIn');
                setTimeout(() => $(currentImgs[i]).removeClass('fadeIn'), 200);
            }
            break;
        default:
            break;
    }
}

function adjustGallery(gallery) {
    let currentImgs = Array.from($('#gallery').find('> div > img')); //Gets array of current children of #gallery
    if ($(window).width() > 1600) { //This makes sure that there are 4 images displayed at once on this screen size
        if (currentImgs.length === 4) return;
        const newDiv = $('<div></div>');
        const newImg = $('<img />');
        let srcNum = parseInt($('#gallery div:last > img')[0].src.split('gallery')[1].split('.')[0]);
        let num;
        if (srcNum === 6) {
            num = 0;
        } else {
            num = srcNum + 1;
        }
        newImg.attr('src', `assets/images/gallery${num}.webp`);
        newImg.attr('alt', 'Room Image');
        newImg.attr('loading', 'lazy');
        newDiv.append(newImg);
        gallery.append(newDiv);
    } else if ($(window).width() > 600 && $(window).width() < 1600) { //This makes sure that there are three images displayed at once on this screen size
        if (currentImgs.length === 4) {
            c('removing')
            $('#gallery div:last').remove();
        } else if (currentImgs.length === 3) {
            return;
        } else if (currentImgs.length === 2) {
            const newDiv = $('<div></div>');
            const newImg = $('<img />');
            let srcNum = parseInt($('#gallery div:last > img')[0].src.split('gallery')[1].split('.')[0]);
            let num;
            if (srcNum === 6) {
                num = 0;
            } else {
                num = srcNum + 1;
            }
            newImg.attr('src', `assets/images/gallery${num}.webp`);
            newImg.attr('alt', 'Room Image');
            newImg.attr('loading', 'lazy');
            newDiv.append(newImg);
            gallery.append(newDiv);
        }
    } else if ($(window).width() < 600) { //This makes sure that there are two images displayed at once on this screen size
        if (currentImgs.length === 2) {
            return;
        } else if (currentImgs.length > 2) {
            $('#gallery div:last').remove();
        }
    }
}

$(document).ready(() => {
    adjustGallery($('#gallery'));
    $(window).on('resize', () => adjustGallery($('#gallery')));
    $('#left').on('click', () => scroll('left'));
    $('#right').on('click', () => scroll('right'));
});
