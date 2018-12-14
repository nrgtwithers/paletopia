// var username = 'zoesaldana'
// var clientid = '2e72ac5683df40c9bc8c202b429b1d48'

// var urlGetUserId = ``
// var urlGetUserMedia = `https://api.instagram.com/v1/users/${userid}/media/recent/?client_id=${clientid}`

 
$.ajax({
    url: "https://api.instagram.com/v1/users/search?q=zoesaldana&client_id=2e72ac5683df40c9bc8c202b429b1d48",
    method: "GET"
}).then(function (response) {
    console.log(response);
})
