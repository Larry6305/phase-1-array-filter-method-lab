// Code your solution here
// findMatching function
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // fuzzyMatch function
  function fuzzyMatch(drivers, prefix) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(prefix.toLowerCase()));
  }
  
  // matchName function
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  
  // Example Data
  const drivers = [
    { name: 'John' },
    { name: 'Jane' },
    { name: 'john' },
    { name: 'jimmy' },
    { name: 'James' },
  ];
  
  const namesArray = ['John', 'Jane', 'john', 'jimmy', 'James'];
  
  // Test findMatching
  console.log(findMatching(namesArray, 'john')); // ['John', 'john']
  
  // Test fuzzyMatch
  console.log(fuzzyMatch(namesArray, 'ja')); // ['John', 'Jane']
  
  // Test matchName
  console.log(matchName(drivers, 'John')); // [{ name: 'John' }, { name: 'john' }]
  