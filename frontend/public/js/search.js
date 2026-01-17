async function searchTrains() {
  const source = document.getElementById("source").value;
  const destination = document.getElementById("destination").value;
  let con = document.getElementById('con')
  if((source === "Mumbai"&& destination === "Ahmedabad") || (source === "Ahmedabad" && destination === "Mumbai")){
    const val = await fetch(`http://ec2-3-110-194-86.ap-south-1.compute.amazonaws.com:2000/${source}`)
    const finalval = await val.json();
    con.style.backgroundColor = "#007bff"
    con.style.border = "2px solid brown"
    con.innerHTML = ""   
    con.innerHTML = `<h1>Availalbe Trains</h1>`

    // console.log(finalval)
    finalval.alltrains.forEach(t => {
      con.innerHTML += `
        <div class = 'card'>
        <h2>Train_Name : ${t.Name}</h2>
        <p>Train_Number : ${t.TrainNumber}</p>
        <p>Seats_Available : ${t.Seats}</p>
        <h3>Time : ${t.Time}</h3>
      `
    })
    document.querySelectorAll(".card").forEach(t =>{
      t.addEventListener('click' , function(){
        window.open("./booking.html" , '_blank')
      })
    })
  }
  else alert('Please Enter right source and destination')

}