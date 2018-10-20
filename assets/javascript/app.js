function search() {
    var query = "trump";
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "cbf747ce70f54428af804e20560ceb26",
        'q': query
    });
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function (result) {
        
        for (var i = 0 ; i<result.length; i++){
            var headline = result.docs[i];
            console.log(headline)
        }
        // $("#well-section").append(url);
        // console.log(result)
    }).fail(function (err) {
        throw err;
    });
    
}