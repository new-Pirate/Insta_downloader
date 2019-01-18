const saveButton = document.querySelector('.savePhoto-button');
saveButton.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { greeting: "getPhoto" });
    });
});

const saveVideo = document.querySelector('.saveVideo-button');
saveVideo.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { greeting: "getVideo" });
    });
});