let searchQueryInput = $("input[name='searchQuery']"),
    searchEngineInput = $("select[name='searchEngine']");

$("#search-form").submit(() => {
    let searchEngine = searchEngineInput.val(),
    searchQuery = searchQueryInput.val(),
    searchAlgorithm = (searchEngine === 'ask.com') ? "/web?q=" : "/search?q=";

    if(!searchEngine && !searchQuery) {
        searchQueryInput.addClass("is-invalid");
        searchEngineInput.addClass("is-invalid");
    } else if(!searchEngine) {
        searchEngineInput.addClass("is-invalid");
    } else if(!searchQuery) {
        searchQueryInput.addClass("is-invalid");
    } else {
        $("#error").text("");
        window.open("https://" + searchEngine + searchAlgorithm + searchQuery);
    } 
});

$(document).on(("input"), "input, select", (e) => {    
   $(e.target).removeClass("is-invalid");
});