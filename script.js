$(function(){  
    $('#search').click( function(){
      var searchTerm = $('#searchTerm').val();
      if(searchTerm.length > 0){
        $('.close').show();
        $(".close").on("click", function(){
          $('.atricle-list').empty();
          $('#searchTerm').val("");
          $('.close').hide();
        });
       }
      var html = ''; 
      var url = "https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search="+ searchTerm +"&format=json";
      
    $.ajax({
      url: url,
      type: "GET",
      async: false,
      datatype: 'json',
      success: function(data, status, jqXHR) {
        var count = data[1].length;
        for(var i = 0; i < count; i++) {
          html+= "<a class='output animated fadeInUp' href="+data[3][i]+"><div><h4 class='title'>"+data[1][i]+"</h4><p>"+ data[2][i] + "</p></div></a>";
            $('.atricle-list').html(html);
          }         
        } 
    })
      .done(function() {
      })
      .fail(function() {
      });
    });
    $('#searchTerm').keypress(function(e){
      if(e.which == 13){
         $('#search').click();
      }
    });
  });