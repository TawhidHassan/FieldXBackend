const catchAsync = require('../../utils/catchAsync')
const OfficeModel = require('../../models/Officemodel/officeModel')

exports.saveOffice=catchAsync(async(req,res,next)=>{
    const office = await OfficeModel.create({
        name: req.body.name,
        address: req.body.address,
        org: req.body.org,
        lat: req.body.lat,
        lon: req.body.lon,
        startTime: req.body.startTime,
        offTime: req.body.offTime,
        workingDay: req.body.workingDay,
        active: req.body.active,
    });

res.status(200).json({
        status: 'success',
        office
    })

})


exports.getallOffice = catchAsync(async (req, res, next) => {
    const office = await OfficeModel.find()
    res.status(200).json({
        status: 'success',
        office
    })
})

exports.getsingleOffice = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const singleoffice = await OfficeModel.findOne({ _id: id })
    if (!singleoffice) {
        res.status(200).json({
            status: 'success',
            message: 'office not found'
        })
    }
    res.status(200).json({
        status: 'success',
        singleoffice
    })
})

exports.updateOffice = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const updatesingleOffice = await OfficeModel.updateOne({ _id: id }, req.body, { new: true })
    if (!updatesingleOffice) {
        res.status(200).json({
            status: 'success',
            message: 'office not found'
        })
    }
    res.status(200).json({
        status: 'success',
        updatesingleOffice
    })
})

exports.deleteOffice = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const deletesingleOffice = await OfficeModel.deleteOne({ _id: id })
    if (!deletesingleOffice) {
        res.status(200).json({
            status: 'success',
            message: 'office not found'
        })
    }
    res.status(200).json({
        status: 'success',
        message: 'office Deleted'
    })
})