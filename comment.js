(function() {
    $('#comment-form').submit(function() {
        var commentText = $('#comment-text');
        var text = commentText.val();
        var comment = $('<div class="comment alert alert-info"></div>');
        comment.text(text);
        $('#comments').prepend(comment);
        commentText.val('');
        return false;
    });
})();
