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
    setUser: function(loggedInId) {
      currentId = loggedInId;
      console.log("factory user ", currentId);
    },
    getUser: function() {
      return currentId;
    },
    setAuthor: function(loggedInName) {
      currentName = loggedInName;
      console.log("factory user ", currentName);
    },
    getAuthor: function() {
      return currentName;
    }
  }
}]);
