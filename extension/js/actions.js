var onLoad = function(){
	$('#login').click(function(){
		var name = $('#uname').val();
		var psw = $('#psw').val();
		$.post("localhost:8000/timecardEntry/creds",{name:name,psw:psw}, function(data, status){
        	if (data.hasDefault) {
        		window.location.href = '../html/defaultConf.html';		
        	}else{
        		window.location.href = '../html/entrySheet.html';
        	}
        });
	});
}

$(onLoad);