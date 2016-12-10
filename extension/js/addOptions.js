var onLoad = function() {
    var rowCount=1;
    $('#add').click(function() {
        var table = $('#tbl');
        var row = $('#row-'+rowCount);
        var newRow = row.clone();
        newRow = $(newRow).attr('id','row-'+ ++rowCount);
        table.append(newRow);
    });
}
$(onLoad);