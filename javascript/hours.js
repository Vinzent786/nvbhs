$(document).ready(() => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    try {
        const date = new Date();
        const currentDay = days[date.getDay()];
        let text;
        switch (currentDay) {
            case 'Sunday':
                text = "Today - Closed";
                break;
            case 'Monday':
                text = "Today - 08:30 am - 08:00 pm";
                break;
            case 'Tuesday':
                text = "Today - 08:30 am - 08:00 pm";
                break;
            case 'Wednesday':
                text = "Today - 08:30 am - 08:00 pm";
                break;
            case 'Thursday':
                text = "Today - 08:30 am - 08:00 pm";
                break;
            case 'Friday':
                text = "Today - 08:30 am - 08:00 pm";
                break;
            case 'Saturday':
                text = "Today - 09:00 am - 05:00 pm";
                break;
            default:
                break;
        }
        $('#today-hours').text(`${text}`);
    } catch (err) {
        $('#today-hours').text(`There was an error getting today's hours :( - ${err}`);
    }

    $('#hours-container').on('mouseenter touchstart click', () => {
        $('#today-hours').css('display', 'none');
        $('#hours-list li').css('display', 'block');
        $('#hours-list').removeClass('slideDown');
        $('#hours-list').addClass('slideDown');
    });

    $('#hours-container').on('mouseleave', () => {
        $('#hours-list').removeClass('slideDown');
        $('#today-hours').css('display', 'block');
        $('#hours-list li').css('display', 'none');
        $('#hours > img').addClass('rotateBack');
        setTimeout(() => $('#hours > img').removeClass('rotateBack'), 300);
    });
});