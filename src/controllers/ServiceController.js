const { encrypt, decrypt } = require('../services/cryptografer')

const knex = require('../database/connection')

module.exports = {
  async store(request, response) {
    const { name } = request.body
    if (name.trim().length === 0) {
      return response.status(400).json({
        "code": "E_VALIDATION_FAILURE",
        "message": "O campo \"name\" é obrigatório"
      })
    }

    try {
      await knex('text').insert({ name: encrypt(name) });
      const lastIdOnDatabase = await knex.select('id').from('text').limit(1).orderBy('id', 'desc')

      return response.json({
        'id': lastIdOnDatabase[0].id,
        'encrypted_name': "SHAZAM!"
      })
    } catch (error) {
      console.log(error)
    }
  },

  async index(request, response) {
    const { id } = request.params;
    const selectedItem = await knex.select('name').from('text').where('id', '=', id)



    if (selectedItem.length === 0) {
      return response.status(406).json({
        "code": "E_VALIDATION_FAILURE",
        "message": "O ID informado não está cadastrado"
      })
    }

    const decryptedName = decrypt(selectedItem[0].name)

    response.status(200).json({
      "name": decryptedName
    })


  }
};