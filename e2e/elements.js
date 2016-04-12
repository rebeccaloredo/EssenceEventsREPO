var elements = {
  //nav bar
  navBarButtons: element.all(by.className('navBarButton')),
  navLoginButton: element(by.id('login')),
  navAdminButton: element(by.id('Admin')),
  //login page
  loginButton: element(by.buttonText('Login')),
  emailInput: element(by.name('email')),
  passwordInput: element(by.name('password')),
  //create customer page
  customerNameInput: element(by.name('name')),
  customerEmailInput: element(by.name('email')),
  customerPasswordInput: element(by.name('password')),
  customerConfirmPasswordInput: element(by.name('confirmPassword')),
  customerPhoneNumberInput: element(by.name('phoneNumber')),
  createAccountButton: element(by.buttonText('Create Account')),
  //admin nav
  adminNavButtons: function(pageName) {return element(by.linkText(pageName));},
  manageClientButton: element(by.id('Manage Clients')),
  //Manage Client
  searchClientInput: element(by.model('searchClients')),
  allClients: element.all(by.repeater('user in mc.alldata')),
  firstClientName: element.all(by.binding('user.name')).first(),
  firstClientPhoneNumber: element.all(by.binding('user.phoneNumber')).first(),
  firstClientEmail: element.all(by.binding('user.email')).first(),
  firstManageButton: element.all(by.buttonText('Manage')).first(),
  manageButton: element(by.buttonText('Manage')),
  modalDeleteButton: element(by.id('delete')),
  modalYesButton: element(by.buttonText('Yes')),
  manageEventsTab: element(by.id('manageEvents')),
  createEventButton: element(by.buttonText('Create Event')),
  //create event
  eventNameInput: element(by.id('eventName')),
  eventDateInput: element(by.id('eventDate')),
  todayButton: element(by.buttonText('Today')),
  hourInput: element(by.model('hours')),
  minuteInput: element(by.css('table[ng-model="eventDate"] input[ng-model="minutes"]')),
  venueInput: element(by.id('venue')),
  budgetGoalInput: element(by.id('exampleInputAmount')),
  itemInput: element(by.model('budgetItem')),
  itemCostInput: element(by.model('itemCost')),
  addItemButton: element(by.id('addItem')),
  itemList: element.all(by.repeater('item in budget')),
  taskInput: element(by.model('todoInput')),
  todoDatePicker: element(by.id('todoDate')),
  addTodoButton: element(by.id('addTodo')),
  todoList: element.all(by.repeater('item in thingsToDo')),
  submitEventButton: element(by.buttonText('Submit')),
  //manage Event
  searchEventInput: element(by.model('searchEvents')),
  firstEventName: element(by.exactBinding('event.name')),
  firstEventVenue: element(by.exactBinding('event.location')),
  manageButton: element(by.buttonText('Manage')),
  //manage event modal
  eventModNameInput: element(by.id('eventName')),
  eventModVenueInput: element(by.id('venue')),
  eventModBudgetInput: element(by.name('budgetGoal')),
  eventModTodoInput: element(by.name('todoInput')),
  eventModTodoList: element.all(by.repeater('item in event.toDoList')),
  eventModSchCalButton: element(by.id('todoCal')),
  eventModAddTodo: element(by.id('addTodo')),
  eventModFirstRemoveTodo: element.all(by.buttonText('Remove')).first(),
  alertBox: element(by.css('.alert')),
  eventModItemInput: element(by.name('budgetItem')),
  eventModCostInput: element(by.name('itemCost')),
  eventModAddItem: element(by.id('addItem')),
  eventModCost: element(by.binding('currentCost')),
  eventModBudgetGoal: element(by.binding('event.budgetGoal')),
  eventModCostList: element.all(by.repeater('item in event.budget')),
  eventModGuestName: element(by.name('guestName')),
  eventModGuestPhone: element(by.name('guestPhone')),
  eventModGuestEmail: element(by.name('guestEmail')),
  eventModGuestSize: element(by.name('guestSize')),
  eventModAddGuestButton: element(by.id('addGuest')),
  eventModGuestList: element.all(by.repeater('item in event.guests')),
  eventModTab: function(tabName) {return element(by.linkText(tabName));},
  eventModSaveChangesButton: element(by.buttonText('Save Changes')),
  eventModDelete: element(by.buttonText('Delete Event'))
}

module.exports = elements;
