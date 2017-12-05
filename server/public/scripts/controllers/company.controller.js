app.controller('CompanyController', ['CompanyService', function(CompanyService){ //bring the service into the controller
    var self = this;
    self.message = 'What up homie??';
    self.company = CompanyService.companies //CompanyService.companies comes from Service company.service.js
}]);