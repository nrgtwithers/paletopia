$(function() {
    var params = {
        // Request parameters
        "q": "cats",
        "count": "10",
        "offset": "0",
        "mkt": "en-us",
        "safeSearch": "Moderate",
    };
  
    $.ajax({
        url: "https://api.cognitive.microsoft.com/bing/v7.0/images/search?" + $.param(params),
        beforeSend: function(xhrObj){
            // Request headers
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","eb941abe-cbdc-49ab-a761-0098b5871116");
        },
        type: "GET",
        // Request body
        data: "{body}",
    })
    .done(function(data) {
        alert(JSON.stringify(data));
    })
    // .fail(function() {
    //     alert("error");
    // });
});