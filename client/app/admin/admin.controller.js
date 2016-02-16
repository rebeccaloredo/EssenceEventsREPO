'use strict';

(function() {

class AdminController {


  Functions = [
    {
      'title': 'New Client',
      'description': 'Create an account for a new client',
      'state': 'signup',
    },
    {
      'title': 'Manage Clients',
      'description': 'Manage existing clients',
      'state': 'manageClients',
    },
    {
      'title': 'Create Event',
      'description': 'Create an event for a existing client',
      'state': 'createEvent',
    },
    {
      'title': 'Manage Event(s)',
      'description': 'Manage an event for a existing client',
      'state': 'manageEvent',
    },
    {
      'title': 'Create Contractor',
      'description': 'Create a contractor entry',
      'state': 'createContractor',
    },
    {
      'title': 'Manage Contractors',
      'description': 'Manage existing contractors',
      'state': 'manageContractors',
    },
  ]

  constructor(User) {
    // Use the User $resource to fetch all users
    this.users = User.query();
  }

  delete(user) {
    user.$remove();
    this.users.splice(this.users.indexOf(user), 1);
  }
}

angular.module('essenceEventsRepoApp.admin')
  .controller('AdminController', AdminController);

})();
