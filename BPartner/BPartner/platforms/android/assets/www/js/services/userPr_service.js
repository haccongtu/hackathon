(function () {
    'use strict';

    angular
        .module('services')
        .service('userPr', userPr);


    function userPr() {

 
        var services = {};
        var profileTemp = { ten: '', sn: '', email: '' };
       
        services.getProfile;
        services.editProfile;
        function getProfile()
        {
            services.profile = profileTemp;
        }
         function editProfile()
        {
            
        }
        return services;
    }


})();