const MapList = require('../data.json')

class AppsControllers {
    login = (req, res) => {
        console.log(req.body)
        const { email, password } = req.body;
        if (email && password) return res.json({
            code: 201,
            status: 'SUCCESS',
            message: 'Login Successfully !!'
        })
        else
            return res.json({
                code: 402,
                status: 'FAILED',
                message: 'Login Failed !!'
            })
    }

    mapList = (req, res) => {
        return res.json({
            code: 201,
            status: 'SUCCESS',
            message: 'map data',
            map_list: MapList
        })
    }

    mapById = (req, res) => {
        // console.log(req.params.map_id)
        const mapId = req.params.map_id;
        var mapList = MapList;
        let result = mapList.filter(item => item.id == mapId)
        if (!(result.length > 0)) {
            return res.json({
                code: 400,
                status: 'FAILED',
                message: 'empty data'
            })
        }
        return res.json({
            code: 201,
            status: 'SUCCESS',
            message: 'map data',
            map_by_id: result[0]
        })
    }
}

module.exports = new AppsControllers;