export default { 
     search : function(searchTerm , searchLimit , sortBy){
      return  fetch(`http://www.reddit.com/search.jason?q=${searchTerm}&limit=${searchLimit}&sort=${sortBy}`)
        .then(res => res.json())
        .then(data => data.data.children.map(data => data.data));
    }
   .catch(err => console.console.log(err))
};