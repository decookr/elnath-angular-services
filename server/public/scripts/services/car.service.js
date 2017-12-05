app.service('CarService', ['$http', function($http){
    var self = this; //this self refers to service, not something else in project

    self.cars = { list: [] };  //empty array for companies to go into, use object

    self.getCars = function () {
        $http({
            method: 'GET',
            url: '/cars',
        }).then(function (response) {
            console.log('response', response.data); ///response.data will just send back the array of objects, not all the extra info
            self.cars.list = response.data;
        });
    };

    self.addNewCar = function (newCar) {
        $http({
            method: 'POST',
            url: '/cars',
            data: newCar,
        }).then(function (response) {
            console.log('response', response);
            self.newCar = {}; //this clears out the input fields 
            self.getCars();
        });
    }

    self.getCars();//you MUST call the function here to get the result to show up!!!


}]);