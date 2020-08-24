const init = async () => {
  const res = await fetch(`https://api.covid19api.com/summary`);
  const data = await res.json();
  console.log(data);
  // FOR GLOBAL
  var value = data.Global;
  var tc = value.TotalConfirmed;
  console.log(tc);
  document.getElementById("tc").innerHTML = tc;

  var td = value.TotalDeaths;
  console.log(td);
  document.getElementById("td").innerHTML = td;

  var tr = value.TotalRecovered;
  console.log(tr);
  document.getElementById("tr").innerHTML = tr;

  // FOR ANY COUNTRY

  document.getElementById("con").addEventListener("submit", countryData);

  function countryData(e) {
    e.preventDefault();
    var flage =0;
    var con = document.getElementById("txt").value;
    console.log(con);
    var valueI = data.Countries;
    console.log(valueI);

     for (var i = 0; i < valueI.length; i++) {
      if (valueI[i].Country === con) {
         flage=1;
        console.log(valueI[i]);

        var tcI = valueI[i].TotalConfirmed;
        console.log(tcI);
        document.getElementById("tci").innerHTML = tcI;

        var tdI = valueI[i].TotalDeaths;
        console.log(tdI);
        document.getElementById("tdi").innerHTML = tdI;

        var trI = valueI[i].TotalRecovered;
        console.log(trI);
        document.getElementById("tri").innerHTML = trI;
        break;
      }
     
    }if(flage!==1){
      var msg = "COuntry Name is Note Match";
      let div = document.createElement("div");
      div.className = `alert alert-danger`;
      div.innerHTML = msg;
      var container = document.querySelector(".container");
      var h3txt = document.querySelector("#h3txt");
      container.insertBefore(div, h3txt);
    }
  }
};
init();
