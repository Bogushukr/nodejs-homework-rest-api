const express = require('express')

const { contactSchema } = require("../../validation");
const contactsOperations = require("../../model");

const router = express.Router()


router.get("/", async (req, res, next)=> {
    try {
        const contacts = await contactsOperations.listContacts();
        res.json({
            status: "success",
            code: 200,
            data: {
            result: contacts
            }
        });
    }
    catch(error){
        next(error);
    }
});

router.get('/:contactId', async (req, res, next) => {
  try {
    const contact = await contactsOperations.getContactById(req.params.contactId);
    if(!contact) {
      return res.status(404).json({
          "message": "Not found"
          });
      }
    res.json({
        contact
        })
  }
  catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { error } = contactSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        "message": "missing required name field"
      })
    }
    const newContact = await contactsOperations.addContact(req.body);
    return res.status(201).json({
      status: "Success",
      code: 201,
      message: "New contact has been added",
      data: {
        newContact,
      },
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:contactId', async (req, res, next) => {
 try {
    const contact = await contactsOperations.removeContact(req.params.contactId);

    if (contact) {
      return res.json({
        status: "Success",
        code: 200,
        message: "Contact has been deleted",
      });
    } else {
      return res.status(400).json({
        status: "Error",
        code: 404,
        message: "Not found",
      });
    }
  } catch (error) {
    next(error);
  }
});

router.patch('/:contactId', async (req, res, next) => {
  try {
       const { error } = contactSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        "message": "missing required name field"
      })
    }
    const contact = await contactsOperations.updateContact(
      req.params.contactId,
      req.body
    );

    if (contact) {
      return res.json({
        status: "Success",
        code: 200,
        message: "Contact has been updated",
        data: {
          contact,
        },
      });
    } else {
      return res.status(400).json({
        status: "Error",
        code: 404,
        message: "Not found",
      });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router
