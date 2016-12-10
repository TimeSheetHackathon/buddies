var getConfigs = function(){
	var p = $('#pname option:selected').text();
	var sp = $('#spname option:selected').text();
	var loc = $('#loc option:selected').text();
	var b = $('#billable').val();
	return { project : p, subProjet : sp, location : loc ,billable :b };
}

var onLoad = function(){
	$('#save-conf').click(function(){
		var data = {name : localStorage.getItem('tw_user_name'),
					configs : getConfigs()};

		$.post('http://localhost:8000/timecardEntry/config',data,function(data,status){
			localStorage.setItem(localStorage.getItem('tw_user_name'),data.configs);
			window.location.href = '../html/entrySheet.html';
		});
	});
}








$(onLoad);