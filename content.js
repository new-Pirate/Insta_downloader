chrome.runtime.onMessage.addListener(
    function (request) {
        if (request.greeting == "getPhoto") {
            const getImg = document.querySelector('.FFVAD').src;
            window.open(getImg);
        } else if (request.greeting == "getVideo") {
            const getVideo = document.querySelector('.tWeCl').src;
            window.open(getVideo);
        }
    });
