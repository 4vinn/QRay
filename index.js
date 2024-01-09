var qrcode = new QRCode(document.querySelector(".qrcode"));

qrcode.makeCode("Welcome");

function generateQr() {
  qrcode.makeCode(document.querySelector("input").value);
}

function downloadQr() {
  var a = document.createElement("a");
  dataUrl = document.querySelector(".qrcode").querySelector("img").src;
  a.href = dataUrl;
  a.download = "QRcode.png";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// var qrcode = new QRCode(document.querySelector(".qrcode"));
// function generateQr() {
//     qrValue= (document.querySelector("input").value);
//     qrImg= document.querySelector(" .qrcode img");
//     qrImg.src= `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${qrValue}`;

// }
