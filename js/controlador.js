/**
*	Variables Globales
*/
var userEmpleado;
var userAdministrador;
var sistema = new Sistema();

/**
* Login User
*/
$("#login").click(login);
function login(){
	document.getElementById("load").innerHTML = "<div style='text-align:center'><img src='img/ajax-loader.gif'></div>";
	var user = document.getElementById("exampleInputEmail1").value;
	var password = document.getElementById("exampleInputPassword1").value;
	if (user == ''|| password == ''){
		document.getElementById("load").innerHTML = " ";
		document.getElementById("result").innerHTML = "<div class='alert alert-danger'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>Error!</strong> Llenar todos los campos</div>";
	}
	else
		sistema.login(user,password);
}