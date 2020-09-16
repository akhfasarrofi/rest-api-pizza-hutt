$('#search-button').on('click', function () {
    $.ajax({
        url: 'http://ombdapi.com',
        type: 'get',
        datatype: 'json',
        data: {
            'apikey': '562cd889',
            's': $('search-input').val()
        },
        success: function (result) {
            if (result.Response == "True") {

            } else {
                $('#movie-list').html('<h1 class="text-center">' + result.Error + '</h1>')
            }
        }
    });
});