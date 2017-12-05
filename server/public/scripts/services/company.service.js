app.service('CompanyService', ['$http', function($http){
    var self = this; //this self refers to service, not something else in project

    self.companies = [
        {
            name: 'Ford',
            country: 'USA'
        },
        {
            name: 'Toyota',
            country: 'Japan'
        },
        {
            name: 'Aston Martin',
            country: 'UK'
        },
        {
            name: 'VolksWagon',
            country: 'Germany'
        }
    ];
}]);