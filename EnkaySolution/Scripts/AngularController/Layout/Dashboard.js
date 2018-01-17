app.controller("LayoutDashboardCtrl", function ($scope) {

     $scope.openNav=function() {
        var show= document.getElementById("mySidenav").style.width;
          if(show!="150px")
          {
            document.getElementById("mySidenav").style.width = "150px";
            document.getElementById("maincontant").style.marginLeft = "150px";
            
        //   document.getElementById("main").style.marginLeft = "150px";
          }
          else
          {
            document.getElementById("mySidenav").style.width = "50";
            document.getElementById("maincontant").style.marginLeft = "50px";
        //   document.getElementById("main").style.marginLeft= "50";    
          }
          
      }
      

});