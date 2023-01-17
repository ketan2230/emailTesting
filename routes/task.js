const express = require('express')
const router = express.Router()
const { sendEmail } = require('../services/mail')

router.post('/update', async (request, response, next) => {
    try {
    const { taskTitle, name, email } = request.body
    const message = "Task is Updated Successfully"
    await sendEmail(taskTitle, name, email, message)
        return response.status(200).json({
            message: 'Task Updated Mail Send.',
            status: 200,
            success: true
        })
    } catch (error) {
        next(error)
        return response.status(500).send({
            message: 'Something went Wrong',
            status: 500,
            success: false
        })
    }
})
router.post('/create', async (request, response) => {
    const { taskTitle, name, email } = request.body
    const message = "Task is Created Successfully"
    await sendEmail(taskTitle, name, email, message)

    try {
        response.status(200).json({
            message: 'Task Created Mail Send.',
            status: 200
        })
    } catch (error) {
        response.status(400).send(error)
    }
})
router.post('/complete', async (request, response) => {
    const { taskTitle, name, email } = request.body
    const message = "Task is Completed Successfully"
    await sendEmail(taskTitle, name, email, message)

    try {
        response.status(200).json({
            message: 'Task Created Mail Send.',
            status: 200
        })
    } catch (error) {
        response.status(400).send(error)
    }
})
router.post('/comment', async (request, response) => {
    const { taskTitle, name, email, comment } = request.body
    const message = "Comment '"+comment+"' Added Successfully"
    await sendEmail(taskTitle, name, email, message)

    try {
        response.status(200).json({
            message: 'Task Created Mail Send.',
            status: 200
        })
    } catch (error) {
        response.status(400).send(error)
    }
})
router.post('/exceedEstimate', async (request, response) => {
    const { taskTitle, name, email } = request.body
    const message = "You Exceeded the time in this Task"
    await sendEmail(taskTitle, name, email, message)

    try {
        response.status(200).json({
            message: 'Task Created Mail Send.',
            status: 200
        })
    } catch (error) {
        response.status(400).send(error)
    }
})

module.exports = router
