const crypto = require('crypto');
require('dotenv').config()
const secret = crypto.randomBytes(Number(process.env.SECRET_LEN)).toString('hex')

function encrypt(stringToEncrypt) {
  const iv = Buffer.from(crypto.randomBytes(Number(process.env.IV_LEN)))
  const cipher = crypto.createCipheriv(process.env.ALGORITHM_TYPE, Buffer.from(secret), iv)
  let encrypted = cipher.update(stringToEncrypt)
  encrypted = Buffer.concat([encrypted, cipher.final()])
  return `${iv.toString('hex')}:${encrypted.toString('hex')}`

};
function decrypt(stringToDecrypt) {
  const [iv, contentMessage] = stringToDecrypt.split(':')
  const ivBuffer = Buffer.from(iv, 'hex')
  const decipher = crypto.createDecipheriv(process.env.ALGORITHM_TYPE, Buffer.from(secret), ivBuffer)
  let content = decipher.update(Buffer.from(contentMessage, 'hex'))
  content = Buffer.concat([content, decipher.final()])

  return content.toString();
};

module.exports = { encrypt, decrypt }

