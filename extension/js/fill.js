var onLoad  = function(){
	$('#fill').click(function(){
		var data = {hours : 8};
		$.post('http://localhost:8000/timecardEntry/submit',data,function(data, status){
			if(data.status){
				alert('Submitted!!!!');
			}
		});
	});
}

$(onLoad);