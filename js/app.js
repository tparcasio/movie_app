$(document).ready(function() {

	$(document).on("click", "#movie-search-button", function(event){
		//include since the click event is tied to an anchor tag
		event.preventDefault();

		//seach field value
		var input = $("#movie-title").val();
		var movieSearch = input.replace(" ", "+");
		var movieLink = "http://www.omdbapi.com/?t=" + movieSearch;

		//information request
		$.ajax({
			type: "GET",
			url: movieLink,
			success: function(movies) {
				//seach box should hide only if successful
				$("#search-input-box").hide();

				//handlebars template
				HANDLE.renderTemplate({
					templateSource: "#movie-template",
					data: movies,
					where: "#movie-card-container",
					clearOriginal: true
				});
			},
			error: function() {
				alert("Error getting movie");
			}
		});

		//removed since it's taken care of by handlebars
		// $(".movie-card").show();
		
	});


});