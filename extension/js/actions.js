var onLoad = function(){
	$('#login').click(function(){
		var name = $('#uname').val();
		var psw = $('#psw').val();
        localStorage.setItem('tw_user_name',name);
		$.post("http://localhost:8000/timecardEntry/creds",{name:name,psw:psw}, function(data, status){ 
        	if (data.hasDefault) {
        		window.location.href = '../html/entrySheet.html';
            }else{
                window.location.href = '../html/config.html';      
        	}
        });
	});
}

$(onLoad);