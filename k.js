// XOR encryption and decryption (symmetric)
function xorEncryptDecrypt(input, key) {
    let output = '';
    let keyLength = key.length;
    for (let i = 0; i < input.length; i++) {
        output += String.fromCharCode(input.charCodeAt(i) ^ key.charCodeAt(i % keyLength));
    }
    return output;
}

// Convert string to hex (for displaying the encrypted message)
function stringToHex(input) {
    let result = '';
    for (let i = 0; i < input.length; i++) {
        result += input.charCodeAt(i).toString(16).padStart(2, '0');
    }
    return result;
}

// Convert hex back to string (for decryption)
function hexToString(hex) {
    let result = '';
    for (let i = 0; i < hex.length; i += 2) {
        result += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return result;
}

// Function to handle encryption
function encryptMessage() {
    const message = document.getElementById('message').value;
    const key = document.getElementById('key').value;
    
    if (message && key) {
        const encrypted = xorEncryptDecrypt(message, key);
        const encryptedHex = stringToHex(encrypted);
        document.getElementById('encrypted').innerText = encryptedHex;
    } else {
        alert('Please enter both a message and a key.');
    }
}

// Function to handle decryption
function decryptMessage() {
    const encryptedHex = document.getElementById('encrypted').value;
    const key = document.getElementById('key').value;
    
    if (encryptedHex && key) {
        const encryptedMessage = hexToString(encryptedHex);
        const decrypted = xorEncryptDecrypt(encryptedMessage, key);
        document.getElementById('decrypted').innerText = decrypted;
    } else {
        alert('Please enter both the encrypted message and a valid key.');
    }
}
