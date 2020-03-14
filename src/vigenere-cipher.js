class VigenereCipheringMachine {
  constructor(type) {
    if (type == false) {
      this.type = "reverse";
    } else {
      this.type = "direct";
    }
  }
  
  encrypt(message, key) {
    if (!message || !key) throw new Error();
    message = message.toUpperCase();
    key = key.toUpperCase();
    let buf = "";
    let shift, delta;
    let i, j;
    let a = "A".charCodeAt();
    let z = "Z".charCodeAt();
    for (i = 0, j = 0; i < message.length; i++) {
      
      if (message[i].charCodeAt() < a || message[i].charCodeAt() > z) {
        buf += message[i];
        continue;
      }
      
      if (j == key.length) j = 0;
      shift = key[j].charCodeAt() - a;
      delta = (message[i].charCodeAt() + shift) - z;
      if (delta > 0) {
        buf += String.fromCharCode(a-1 + delta);
      } else {
        buf += String.fromCharCode(message[i].charCodeAt() + shift);
      }
      j++;
    }
    if (this.type == "direct") {
      return buf;      
    } else {
      return buf.split("").reverse().join("");
    }
  }

  decrypt(encryptedmessage, key) {
    if (!encryptedmessage || !key) throw new Error();
    encryptedmessage = encryptedmessage.toUpperCase();
    key = key.toUpperCase();
    let buf = "";
    let shift, delta;
    let i, j;
    let a = "A".charCodeAt();
    let z = "Z".charCodeAt();
    for (i = 0, j = 0; i < encryptedmessage.length; i++) {
      
      if (encryptedmessage[i].charCodeAt() < a || encryptedmessage[i].charCodeAt() > z) {
        buf += encryptedmessage[i];
        continue;
      }
      
      if (j == key.length) j = 0;
      shift = key[j].charCodeAt() - a;
      delta = (encryptedmessage[i].charCodeAt() - shift) - a;
      if (delta < 0) {
        buf += String.fromCharCode(z+1 + delta);
      } else {
        buf += String.fromCharCode(encryptedmessage[i].charCodeAt() - shift);
      }
      j++;
    }
    if (this.type == "direct") {
      return buf;      
    } else {
      return buf.split("").reverse().join("");
    }
  }
}

module.exports = VigenereCipheringMachine;
