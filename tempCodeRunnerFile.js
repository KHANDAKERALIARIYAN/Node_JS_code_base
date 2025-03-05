const cipher = crypto.createCipheriv(algo, key, iv);
let encrypted = cipher.update('This is a secret message', 'utf-8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);