var request = require('request');
var cheerio = require('cheerio');
request('http://news.sportbox.ru/Vidy_sporta/Futbol', function(error, response, body) {
    if (!error && response.statusCode == 200) {
        //  console.log(body) // Show the HTML for the Google homepage. 
        var $ = cheerio.load(body);
        //             console.log($('._Sportbox_Spb2015_Components_TopResultsBlock_TopResultsBlock .games .box-left .name').text());
        var leftComand = $('._Sportbox_Spb2015_Components_TopResultsBlock_TopResultsBlock .box-left .name').text();
        var rightComand = $('._Sportbox_Spb2015_Components_TopResultsBlock_TopResultsBlock .box-right .name').text()
        var valueMatch = $('._Sportbox_Spb2015_Components_TopResultsBlock_TopResultsBlock .box-center .score').text()
        console.log(valueMatch + "\r");

    } else {

        console.log(error)
    }
})