var getConfigs = function(){
	var p = $('#pname').val();
	var sp = $('#spname').val();
	var loc = $('#loc').val();
	var b = $('#billable').val();
	return { project : p, subProjet : sp, location : loc ,billable :b };
}

var onLoad = function(){
	$('#save-conf').click(function(){
		var configs = {project:'bial'};
		var data = {name : localStorage.getItem('tw_user_name'),
					configs : getConfigs()};

		$.post('http://localhost:8000/timecardEntry/config',data,function(data,status){
			window.location.href = '../html/entrySheet.html';
		});
	});
}








$(onLoad);