const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../keys/authKey');
const helperMessage = require('../helpers/messageHelper');

const Client = require('../models/client');
const Employee = require('../models/employee');


function generateToken(params = {}){
   return jwt.sign(params , authConfig.secret, {
        expiresIn: 86400,
    });
}

exports.authClient = async(req, res, next) => {
    const { cpf, password } = req.body;

    const client = await Client.findOne({ cpf }).select('+password');

    if (!client){
        helperMessage.message(res, 400, 'Client not found');
    }
    
    if (!await bcrypt.compare(password, client.password)){
        helperMessage.message(res, 400, 'Invalid password');
    }

    client.password = undefined;

    return res.send({ 
        client, 
        token: generateToken({ id: client.id })
    });
};

exports.authEmployee = async(req, res, next) => {
    const { cpf, password } = req.body;

    const employee = await Employee.findOne({ cpf }).select('+password');

    if (!employee){
        helperMessage.message(res, 400, 'Client not found');
    }
    
    if (!await bcrypt.compare(password, employee.password)){
        helperMessage.message(res, 400, 'Invalid password');
    }

    employee.password = undefined;

    return res.send({ 
        employee, 
        token: generateToken({ id: employee.id })
    });
};
