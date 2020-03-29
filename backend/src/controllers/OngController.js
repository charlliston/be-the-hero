const crypto = require('crypto'); //usado para gerar id
const connection = require('../database/connection');


module.exports = {
//método GET
    async index (request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs); //retorna array de ongs
    },

//método POST
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
    
        //inserção no BD
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
            
        return response.json({ id });
    }
}