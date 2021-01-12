const repositoryClient = require('../repositories/clientRepository');
const repositoryEmployee = require('../repositories/employeeRepository');
const helperMessage = require('../helpers/messageHelper');

exports.permissionClient = async(req, res, next) => {
    const client = await repositoryClient.getValidate(req.userId);
    
    if (client) {
        if (client.role != 0 || client.active != true) {
            helperMessage.message(res, 401, "No permission or cliente inactive");
        } else {
            return next();
        }
    } else {
        helperMessage.message(res, 401, "No Permission");
    }
}

exports.permissionEmployee = async(req, res, next) => {
    const employee = await repositoryEmployee.getValidate(req.userId);
    
    if (employee) {
        if (employee.role < 1 || employee.role > 2 || employee.active != true) {
            helperMessage.message(res, 401, "No permission or employee inactive");
        } else {
            return next();
        }
    } else {
        helperMessage.message(res, 401, "No Permission");
    }
}
