app.service('CompanyService', ['$http', function($http){
    var self = this; //this self refers to service, not something else in project

    self.companies = { list: [] };  //empty array for companies to go into, use object
    self.newCompany = {};

    self.getCompanies = function () {
        $http({
            method: 'GET',
            url: '/companies',
        }).then(function (response) {
            console.log('response', response.data); ///response.data will just send back the array of objects, not all the extra info
            self.companies.list = response.data;
        });
    };

    self.addNewCompany = function (newCompany) {
        $http({
            method: 'POST',
            url: '/companies',
            data: newCompany,
        }).then(function (response) {
            console.log('response', response);
            self.newCompany = {}; //this clears our the input fields 
            self.getCompanies();
        });
    }
    self.getCompanies();//you MUST call the function here to get the result to show up!!!


}]);