let style = document.createElement('style');

style.innerHTML = `
.error {
    background: red;
    padding: 20px;
    width: 200px;
    text-align: center;
    color: #fff;
    font-width: bold;
    font-size: 30px;
    border-radius: 20px;
    animation: fadein 2s;
    position: fixed;
    right: 50px;
    top: 20px;
    box-shadow: 0 0 20px black;
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

.alert {
    background: green;
    padding: 20px;
    width: 200px;
    text-align: center;
    color: #fff;
    font-width: bold;
    font-size: 30px;
    border-radius: 20px;
    animation-duration: 3s;
    animation-name: slidein;
    position: fixed;
    right: 50px;
    top: 20px;
    box-shadow: 0 0 20px black;
}

@keyframes slidein {
    from {
      margin-right: 100%;
      width: 300%; 
    }
    to {
      margin-right: 0%;
      width: 200px;
    }
  }

.msg {
    background: #eee;
    padding: 20px;
    width: 200px;
    text-align: center;
    color: black;
    font-width: bold;
    font-size: 30px;
    border-radius: 20px;
    animation-duration: 3s;
    animation: shadow  2s infinite ease-in-out;
    position: fixed;
    right: 50px;
    top: 20px;
    box-shadow: 0 0 20px black;
}

@keyframes shadow {
    from {text-shadow: 0 0 3px black;}
    50% {text-shadow: 0 0 30px black;}
    to {text-shadow: 0 0 3px black;}
    }
`;


document.head.appendChild(style);

function showMessage(type, message) {
    let div = document.createElement('div');
    div.innerText = `${message}`;
    div.classList.add(type);
    console.log(div);
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 5000);
};

function checkLink() {
    if (location.search == '?alert=form-error') {
        document.addEventListener('DOMContentLoaded', () => {
            showMessage('error', 'Ohh! Error Sent!!!');
        });
    } else if (location.search == '?alert=form-sent') {
        document.addEventListener('DOMContentLoaded', () => {
            showMessage('alert', 'Sent Successfully');
        });
    } else if (location.search == '?alert=hello') {
        document.addEventListener('DOMContentLoaded', () => {
            showMessage('msg', 'Welcome to the site!');
        });
    } else if (location.search == '?alert=msg-sent') {
        document.addEventListener('DOMContentLoaded', () => {
            showMessage('alert', 'Letter for you!');
        });
    } else {
        return
    }
};

checkLink();