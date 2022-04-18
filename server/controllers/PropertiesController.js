const Properties = require('../models/PropertiesData')

module.exports = {

    async create(request, response) {
        const { type, title, description } = request.body

        if (!type || !title) {
            return response.status(400).json({
                error: "Dados incompletos."
            })
        }

        const propertieCreated = await Properties.create({
            type,
            title,
            description
        })

        return response.json(propertieCreated)

    },

    async read(request, response) {
        const propertiesList = await Properties.find()
        return response.json(propertiesList)
    },

    async update(request, response) {

        const { id } = request.params
        const { type, title, description } = request.body
        const propertie = await Properties.findOne({ _id: id })

        if (!propertie) {
            return response.status(401).json({
                error: "Imóvel não encontrado"
            })
        } else {
            if (type || title || description) {
                propertie.type = type ? type : propertie.type
                propertie.title = title ? title : propertie.title
                propertie.description = description ? description : propertie.description
                await propertie.save()
            } else {
                return response.status(400).json({
                    error: "Dados incompletos."
                })
            }
        }

        return response.json(propertie)

    },

    async delete(request, response) {

        const { id } = request.params
        const propertie = await Properties.findByIdAndDelete({ _id: id })

        if (!propertie) {
            return response.status(401).json({
                error: "Imóvel não encontrado"
            })
        } else {
            response.json(propertie)
        }

    }

}