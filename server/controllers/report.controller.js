//const { multiMongooseToObject } = require('../util/mongoose')
//const { mongooseToObject } = require('../util/mongoose')

const Report = require('../models/report.model')


class ReportController {
    
    //[GET]/report/
    show(req, res, next) {
        Report.find({})
            .then(reports => {
                res.json(reports)
        })
            .catch(next) //err => next(err)
    }

    async store(req, res, next)
    {
        try{
            const report = new Report(req.body)
            const saverp = await report.save()
            return res.json({
                status: 'ok',
                elements: saverp
            })
        }
        catch(err)
        {
            next(err)
        }
    }

    async deleteReport(req, res, next)
    {
        try{
            const dele = await Report.deleteOne({_id: req.params.id})
            return res.json({status: "dele finish"})
        } catch(err)
        {
            console.error(`[error] ${e}`)
            next(err)
        }
    }
}


module.exports = new ReportController();
