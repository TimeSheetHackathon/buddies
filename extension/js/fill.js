var onLoad  = function(){
	$('#fill').click(function(){
		var data = {name : localStorage.getItem('tw_user_name')};

		$.post('http://localhost:8000/timecardEntry/submit',data,function(data, status){
			if(data.status){
				$('#tbl').remove();
				$('body').html('<h1 align="center">Request sent successfully</h1><button id="close">close</button>');
				$('#close').click(function(){
					window.close();
				})
			}
		});
	});
}

$(onLoad);