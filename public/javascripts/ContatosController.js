function ContatosController($scope, $http) {

	function Contato() {
		this.nome = '';
		this.telefone = '';
	}

	$scope.contato = new Contato();

	$scope.contatos = [];
	
	$scope.listarContrato = function() {
		$http.get('/contato').success(function(retorno) {
			$scope.contatos = retorno.contatos;
		});
	};

	$scope.adicionaContato = function() {
		$http.post('/contato', $scope.contato).success(function() {
			$scope.contatos.push($scope.contato);
			$scope.contato = new Contato();
		});
	};
	
	$scope.deletarContato = function(id) {
		$http({method: 'DELETE', url: '/deletar/'+id}).then(function(response){
            $scope.listarContrato();
        }, function errorCallback(response) {

		});
		
	};
	
	$scope.listarContrato();
}