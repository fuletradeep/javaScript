document.getElementById('btn').addEventListener('click',save);
fetchIssues();
function save(e){
    e.preventDefault();
    
    var desc = document.getElementById('issueDescInput').value;
    var servarty = document.getElementById('issueServertyInput').value;
    var assignTo = document.getElementById('issueAssignToInput').value;
    var id = chance.guid();
    var head = 'open';

    var issue = {
        description : desc,
        servarty : servarty,
        assignTo : assignTo,
        id : id,
        statuss : head
    }
    console.log(localStorage.getItem('issues1'),JSON.stringify(issue))
    if(localStorage.getItem('issues1')==null){
        var issues1 = [];
        issues1.push(issue);
        localStorage.setItem('issues1',JSON.stringify(issues1));
    }
    else{
        var issues1 = JSON.parse(localStorage.getItem('issues1'));
        issues1.push(issue);
        localStorage.setItem('issues1',JSON.stringify(issues1));
    }
    fetchIssues();
}
function setClosed(id){
   
    var issues1 = JSON.parse(localStorage.getItem('issues1'));
    
    for(let i=0;i<issues1.length;i++){
      

        if(issues1[i].id===id){
            
            issues1[i].statuss='closed';
        }
    }
    console.log(issues1)
localStorage.setItem('issues1',JSON.stringify(issues1));
fetchIssues();
}

function setDelete(id){
    var issues1 = JSON.parse(localStorage.getItem('issues1'));
    console.log(issues1)
    for(let i=0;i<issues1.length;i++){
        if(issues1[i].id===id){
            issues1.splice(i,1);
        }
    }
localStorage.setItem('issues1',JSON.stringify(issues1));
fetchIssues();
}

function fetchIssues(){
    var issues1 = JSON.parse(localStorage.getItem('issues1'));
    var issuesList = document.getElementById('issueList');

    issuesList.innerHTML = '';

    for(let i=0; i<issues1.length;i++){
        var idd = issues1[i].id;
        var desc = issues1[i].description;
        var ser = issues1[i].servarty;
        var assign = issues1[i].assignTo;
        var status = issues1[i].statuss;

        issuesList.innerHTML += '<div class="well">'+
                               '<h6>Issue ID:' + idd + '</h6>' +
                               '<p><span class="label label-info">' + status + '</span></p>'+
                               '<h3>' + desc + '</h3>'+
                               '<p><span class="glyphicon glyphicon-time"></span>' + ser + '</p>'+
                               '<p><span class="glyphicon glyphicon-user"></span>' + assign + '</p>'+
                               '<a href"#" onclick="setClosed(\''+idd+'\')" class="btn btn-warning">' +  'closed</a>'+
                               '<a href"#" onclick="setDelete(\''+idd+'\')" class="btn btn-danger">' +  'Delete</a>'+
                               '</div>';
    }
}