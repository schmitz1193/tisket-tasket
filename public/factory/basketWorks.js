app.factory('basketWorks', [function(){

  const currentShop = {
    shops: []
  };

  // const currentUser = '';


  return {
    setShop: function(selectedShop) {
      currentShop.shops = selectedShop;
      console.log("factory shops ", currentShop.shops);
    },
    getShop: function() {
      return currentShop.shops;
    },
    setUser: function(loggedInUser) {
      currentUser = loggedInUser;
      console.log("factory user ", currentUser);
    },
    getUser: function() {
      return currentUser;
    }
  }
}]);
