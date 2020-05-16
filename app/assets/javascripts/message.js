$(function(){
  function buildHTML(message){
    if ( message.image ) {
      var html =
     `<div class="mainchat__message">
          ${message.user_name}
        <a class="mainchat__Times-of-Day">
          ${message.created_at}
        <br>
        </a>
        <a class="mainchat__message-form">
          ${message.content}
        </a>
        <p class="lower-message__image">
          ${message.image}
        </p>
      </div>`
    return html;
  } else {
    var html =
    `<div class="mainchat__message">
          ${message.user_name}
        <a class="mainchat__Times-of-Day">
          ${message.created_at}
        <br>
        </a>
        <a class="mainchat__message-form">
          ${message.content}
        </a>
      </div>`
    return html;
  };
}
  $('#new_message').on('submit', function(e){
    e.preventDefault()
   var formData = new FormData(this);
   var url = $(this).attr('action');
   $.ajax({
     url: url,
     type: "POST",
     data: formData,
     dataType: 'json',
     processData: false,
     contentType: false
   })
   .done(function(data){
     var html = buildHTML(data);
     $('.mainchat__chat-display').append(html);
     $('form')[0].reset();
     $('.mainchat__chat-display').animate({ scrollTop: $('.mainchat__chat-display')[0].scrollHeight});
   })
  })
});