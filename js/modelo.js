/**
* Clase Sistema
*/

function Sistema(){

}
Sistema.prototype.login = function(usuario, contra){
	var login = {
		user : usuario,
		password : contra
	};
	login = JSON.stringify(login);
	$.ajax({
		url : "http://192.168.1.3/nominaEmpleadosServer/controlador.php",
		type : "GET",
		data : {"login" : login},
		success : function(data){
			console.log(data);			
		}
	})
}