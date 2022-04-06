function findMatching(drivers, person){
    return drivers.filter(drivers => drivers.toLowerCase() === person.toLowerCase());
}

function fuzzyMatch(source, testString) {
    return source.filter(
      (possibleMatch) =>
        possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    );
  }