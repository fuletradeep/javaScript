// import reddit from 'redditapi';
alert('1');
const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');

searchForm.addEventListener('submit', e => {
    const searchTerm = searchInput.value;
    console.log(searchTerm);
    const sortBy = document.querySelector('input[name="sortBy"]:checked').value;
    const searchLimit = document.querySelector('#limit').value;
    // chech input
    if(searchTerm === ''){
        showItem('PLS Enter Something','alert-danger');
    }

    //clear input
    // searchInput.value == '';

    //search raddit
    /*function search (searchTerm , searchLimit , sortBy){
        return  fetch(`http://www.reddit.com/search.jason?q=${searchTerm}&limit=${searchLimit}&sort=${sortBy}`)
          .then(res => res.json())
          .then(data => data.data.children.map(data => data.data));
      }
      */
    search (searchTerm,searchLimit,sortBy);

    e.preventDefault();
});


function showItem(msg,className){
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(msg));
    div.className = `alert ${className}`;
    const searchContainer = document.querySelector('#Search-container');
    const search = document.querySelector('#Search');
    searchContainer.insertBefore(div , search);
    setTimeout(() => document.querySelector('.alert').remove(),3000);
}

async  function search (searchTerm,searchLimit,sortBy)  {
   const res = await fetch(`http://www.reddit.com/search.json?q=${searchTerm}&limit=${searchLimit}&sort=${sortBy}`)
   const data = await res.json();
   console.log(res,data);

   const mydata = data.data.children.map(obj=>obj.data)
    console.log('maro data print tha',mydata)
    
   
    
            var output = `<div class="card-columns">`;
            mydata.forEach(post =>{
                let image = post.preview ? post.preview.images[0].source.url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSt9Xqom-Cug5f58ToCDwcsFRiahGWICeHpdA&usqp=CAU'
                output +=
                `
                <div class="card" style="width: 18rem;">
                <img src="${image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${post.title}</h5>
                  <p class="card-text">${post.selftext}</p>
                  <a href="${post.url}" class="btn btn-primary">Read More</a>
                </div>
              </div>
                `;
            })
            output += `</div>`
            document.getElementById('results').innerHTML = output;
        
    }

    

  //   const users = [

  //     {
  //       name:'dip',
  //       age:22
  //     },
  //     {
  //       name:'di',
  //       age:22
  //     },
  //     {
  //       name:'dp',
  //       age:22
  //     },
  //     {
  //       name:'dp',
  //       age:22
  //     },
  //     {
  //       name:'dipsdgd',
  //       age:22
  //     },{
  //       name:'dipcxvxc',
  //       age:22
  //     }
  //   ]

  //  const mydata =  users.map(obj=>{
  //    if(obj.name==='dip')
  //    return obj.name
  //    else 
  //    return 'nikdha;'
  //   })

  //   console.log(mydata)