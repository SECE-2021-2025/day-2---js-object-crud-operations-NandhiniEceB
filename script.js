/*
async function fetchData() {
  // return new Promise((resolve,reject) => {
  try{
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const json = await response.json()
  // console.log(json)
  // document.getElementById("ans").innerHTML= JSON.stringify(json);
  return json
  } catch (err) {
      console.error(err)
  }
}


function fetchDataEvent() {
  const ans = document.getElementById('ans');
  fetchData().then(data => {
      var table = `<table border = 1>`;
      var col = '';
      for(var key in data){
          col += `<td>${data[key]}</td>`
      }
      table += `<tr>${col}</tr>`;
      table += `</table>`;
      ans.innerHTML = table;
  });
} 
*/
fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response) => response.json())
  .then((json) => json.forEach(tableElements)
  )

 /* function tableElements (element, index, arr){
    arr[index] = document.getElementById('new').innerHTML +=
    `<tr>
        <td>${element.userId}</td>
        <td>${element.id}</td>
        <td>${element.title}</td>
        <td>${element.completed}</td>
    </tr>`
  } 
  */  

  /* 
  //sort by age 
  const obj= [
  {
    name: "Reshmi",
    age: 19
  },
    {
    name: "Shanthi",
    age: 41
  },
    {
    name: "Nandhini",
    age: 21
  }
] 
obj.sort(
    function(x, y) {
       return x.age - y.age
    }
);
console.log(obj) 
*/
  
