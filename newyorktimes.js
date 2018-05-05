 function call(){




   var search = $("#searchTerm").val().trim();
   var beginDate = $("#startYear").val().trim();
   var endDate = $("#endYear").val().trim();
   var records = $("#records").val().trim();


   var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
       url += '?' + $.param({
       'api-key': "8925e30c86c74a4e8082909b87e21289",
       'q': search,
       'begin_date': beginDate,
       'end_date': endDate,

       });


   $.ajax({
   url: url,
   method: 'GET',
   }).then(function(response) {
       var results = response.response.docs
                   //Change results.length to number user selects
   for(var i = 0; i < results.length; i++){
       console.log(results[i]);

       

   }

   

   });

 }
   //HIT the api with an ajax call
    // api.js
        //functions that call the api
        //function that return information
        //

