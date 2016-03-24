app.factory('basketWorks', [function(){

  const currentShop = {
    shops: []
  };
  const currentUser  = {
    user: []
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
      currentUser.user = loggedInUser;
      console.log("factory user ", currentUser.user);
    },
    getUser: function() {
      return currentUser.user;
    // },
    // setAuthor: function(loggedInName) {
    //   currentName = loggedInName;
    //   console.log("factory user ", currentName);
    // },
    // getAuthor: function() {
    //   return currentName;
    }
  }
}]);
