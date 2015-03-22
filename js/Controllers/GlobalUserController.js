application.controller('GlobalUserController', function ($scope, $sce, UserService,  $location, LocalStorageService ){
		//alert("passe par la 2");
		$scope.GLuser=(verfierConnection())?LocalStorageService.get('user')[0]:"";
		$scope.statusCo=verfierConnection();
		console.log('user :', $scope.GLuser);
		
	$scope.afficherUser = function(){
		//alert("affuser"+$scope.GLuser.pseudo+LocalStorageService.isKey('user'));
		//return $scope.user.pseudo;
		$scope.GLuser=(verfierConnection())?LocalStorageService.get('user')[0]:"";
		if(LocalStorageService.isKey('user')){
			$scope.statusCo=verfierConnection();
			//alert("statusCo : "+$scope.statusCo);
			return $sce.trustAsHtml("Bienvenue "+$scope.GLuser.pseudo);
		}else{
			$scope.statusCo=verfierConnection();
			//alert("statusCo2 : "+$scope.statusCo);
			return $sce.trustAsHtml("<a href='#/login'>se Connecter</a>");
		}
		
		
	}

	function verfierConnection(){
		return (LocalStorageService.isKey('user'))?true:false;
	}
	


	$scope.showHtml = function(stringHtml){
		return $sce.trustAsHtml(stringHtml);
	}


	$scope.deconnecter = function(){
		console.log("ici");
		alert('deco');
		LocalStorageService.flush();
		$scope.GLuser=null;
		$scope.statusCo=verfierConnection();
		alert('deco'+$scope.statusCo);
		afficherUser();
		return true;
	}

	



});





/*	//Methode ou on recoit les données qu'on vt
	$scope.submit = function(){
		$scope.searchs = UserService.authentification($scope.inputMail, $scope.inputPassword ).success(
			function(data){
				console.log("controlleur valeur recu", data);

			}
		).error(
			function(data){
				console.log("controlleur error valeur recu", data);
			}
		);
		console.log('apres :', $scope.searchs);
	} 
	
	$scope.showHtml = function(stringHtml){
		return $sce.trustAsHtml(stringHtml);
	}*/