(function() {
    $('#login-form').submit(function() {
        var username = $('#username').val();
        var password = $('#password').val();
        if (username === 'user1' && password === 'p@ssword') {
            $('#message').html('<div class="alert alert-success" role="alert"><strong>Success!</strong></div>');
            window.location.href = './comment.html';
        } else {
            $('#message').html('<div class="alert alert-danger" role="alert"><strong>Fail!</strong></div>');
        }
        return false;
    });
})();
