let startTime;

function submit() {
    const inputList = Array.from($('input, textarea'));
    let readyToSend = true;
    let name, email, message;
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;
    c(elapsedTime)
    
    if (elapsedTime < 300) {
        alert('Possible bot detected. Take your time filling out the form.');
        readyToSend = false;
        return;
    }

    inputList.forEach(element => {
            if (element.value.length > 0) {
                switch ($(element).attr('name')) {
                    case 'name':
                        name = element.value;
                        break;
                    case 'email':
                        email = element.value;
                        break;
                    case 'message':
                        message = element.value;
                        break;
                    default:
                        break;
                }
        } else {
            readyToSend = false;
            $(element).addClass('err');
            setTimeout(()=> $(element).removeClass('err'), 1000);
            switch ($(element).attr('name')) {
                case 'name':
                    $(element).attr('placeholder', 'Must enter your Name');
                    break;
                case 'email':
                    $(element).attr('placeholder', 'Must enter your Email');
                    break;
                case 'message':
                    $(element).attr('placeholder', 'Must enter a Message');
                    break;
                default:
                    break;
            }
        }
    });

    if (readyToSend) {
        emailjs.send('service_8pl1o1h', 'template_8ianm4o', {
            name: name,
            email: email,
            message: message
        })
        .then((response, err) => {
            if(response){
                $('section').css('display', 'none');
                $('address').css('display', 'none');
                $('dialog').attr('open', 'true');
                $('dialog').text(`Message sent successfully! You will hear back from us soon at ${email}`);
            } else {
                $('dialog').attr('open', 'true');
                $('dialog').text(`There was an error processesing your message. Error: ${err}`);
            }
        });
    }
}

$(document).ready(() => {
    startTime = new Date().getTime();
    $('form').submit((event) => {
        event.preventDefault();
        submit();
    });
    emailjs.init('Qmj-x8EzmOhgBtNF5');
});

