document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    receivedEvent('deviceready');
}

function receivedEvent(id) {
    // let parentElement = document.getElementById('deviceready').classList.add('ready');
    // let parentElement = document.getElementById('deviceready');


    // let listeningElement = parentElement.querySelector('.listening');
    // let receivedElement = parentElement.querySelector('.received');

    // listeningElement.setAttribute('style', 'display:none;');
    // receivedElement.setAttribute('style', 'display:block');

    let cardPaymentButton = document.getElementById('cardPayment');
    let payByTransferButton = document.getElementById('payByTransfer');
    let cardPlusPBTButton = document.getElementById('cardPlusPBT');
    let printReceiptButton = document.getElementById('printReceipt');
    let retrieveDeviceInfoButton = document.getElementById('retrieveDeviceInfo');

    cardPaymentButton.addEventListener('click', triggerCardPayment);
    payByTransferButton.addEventListener('click', triggerPayByTransfer);
    cardPlusPBTButton.addEventListener('click', triggerCardPlusPBT);
    printReceiptButton.addEventListener('click', triggerPrintReceipt);
    retrieveDeviceInfoButton.addEventListener('click', getDeviceInfo);
}

function success(result) {
    console.log("result: ", result);
    alert(JSON.stringify(result));
}

function error(err) {
    console.log("error: ", err);
    alert(JSON.stringify(err));
}

function triggerCardPayment() {
    let receiptData = {
        email: true,
        sms: true,
        print: true,
    };

    cordova.exec(success, error, "NombaAndroidTerminalPlugin", "terminalRequest", ["triggerCardPayment", "200", "1234567890", JSON.stringify(receiptData)]);
}

function triggerPayByTransfer() {
    let receiptData = {
        email: true,
        sms: true,
        print: true,
    };
    
    cordova.exec(success, error, "NombaAndroidTerminalPlugin", "terminalRequest", ["triggerPayByTransfer", "2", "1234567890", JSON.stringify(receiptData)]);
    
}

function triggerCardPlusPBT() {
    let receiptData = {
        email: true,
        sms: true,
        print: true,
    };
    
    cordova.exec(success, error, "NombaAndroidTerminalPlugin", "terminalRequest", ["triggerCardAndPBT", "200", "1234567890", JSON.stringify(receiptData)]);

}

function triggerPrintReceipt() {
    let customPrintData = [
        {
            content: "imageBitmap",
            contentType: "IMAGE",
            alignment: "CENTER"
        },
        {
            content: "REPRINT",
            contentType: "TEXT",
            alignment: "CENTER",
            fontSize: "NORMAL"
        },
        {
            content: "MERCHANT COPY",
            contentType: "TEXT",
            alignment: "CENTER",
            fontSize: "NORMAL"
        },
        {
            content: "MERCHANT NAME: The Horseman",
            contentType: "TEXT",
            alignment: "LEFT",
            fontSize: "NORMAL",
            isBold: true
        }
    ];
    
    cordova.exec(success, error, "NombaAndroidTerminalPlugin", "terminalRequest", ["triggerPrintCustomReceipt", JSON.stringify(customPrintData)]);
}

function getDeviceInfo() {
    cordova.exec(success, error, "NombaAndroidTerminalPlugin", "terminalRequest", ["getDeviceInfo"]);
}
