const crypto = require('crypto');
const secret = 'asdasasdasdasdasdasdfasdfasdfasd'


function encrypt(string) {
  const iv = Buffer.from(crypto.randomBytes(16))
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(secret), iv)
  let encrypted = cipher.update(string)
  encrypted = Buffer.concat([encrypted, cipher.final()])
  return `${iv.toString('hex')}:${encrypted.toString('hex')}`

};

function decrypt(stringToDecrypt) {
  const [iv, contentMessage] = stringToDecrypt.split(':')
  const ivBuffer = Buffer.from(iv, 'hex')
  const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(secret), ivBuffer)
  let content = decipher.update(Buffer.from(contentMessage, 'hex'))
  content = Buffer.concat([content, decipher.final()])

  return content.toString();
};

module.exports = { encrypt, decrypt }