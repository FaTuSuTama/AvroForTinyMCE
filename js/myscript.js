
LS = window.localStorage,

avro = new AvroPhonetic(
  function () {
    if (LS.AvroCandidateSelection) {
      return JSON.parse(LS.AvroCandidateSelection);
    } else {
      return {};
    }
  },
  function (cS) {
    LS.AvroCandidateSelection = JSON.stringify(cS);
  }
);

function test(queryString){
  //console.log(queryString);
  var suggestions = avro.suggest(queryString);
  console.log(suggestions.words);
}
