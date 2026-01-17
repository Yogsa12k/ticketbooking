document.getElementById('form').addEventListener('submit', function(e){
  e.preventDefault();
})

function bookTicket() {
  const data = {
    passengerName: passengerName.value,
    age: age.value,
    gender: gender.value,
    trainNumber: trainNumber.value,
    journeyDate: journeyDate.value,
    seatsBooked: seatsBooked.value
  };
  let conofdetails = document.getElementById('conofdetails')
  conofdetails.innerHTML = ""
  conofdetails.style.backgroundColor="#f4f4f4"
  const allbookings = document.createElement('div')
  allbookings.innerHTML = " "
  allbookings.innerHTML = `
    <h1<Passenger Details</h1>
    <h2>Name : ${passengerName.value}</h2>
    <h2>Age : ${age.value}</h2>
    <h2>Gender : ${gender.value}</h2>
    <h2>Journey-Date : ${journeyDate.value}</h2>
    <h2>Seats : ${seatsBooked.value}</h2>
  `
  if(trainNumber.value == 1){
    allbookings.innerHTML += `<h2>Train : Garib_Rath</h2>`
  }
  else if(trainNumber.value == 2){
     allbookings.innerHTML += `<h2>Train : Ahmedabad Express</h2>`
  }
  else if(trainNumber.value == 3){
     allbookings.innerHTML += `<h2>Train : Rajshani Express</h2>`
  }
  else {
       allbookings.innerHTML += `<h2>Train : Wrong Train Chosen</h2>`
  }

  const seats = document.getElementById('seatsBooked').value
  const username = document.getElementById('passengerName').value

  const container = document.getElementById('ContainerOfParagragh')
  container.innerHTML = " "
  
  const conofbutton = document.getElementById('conofbutton')
  conofbutton.innerHTML = " "
  fetch("http://3.110.194.86:2000/bookticket", {
    // console.log(val)
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
  .then(res => {
    const val = res.json()
    return val
}) 


  container.style.backgroundColor = "#007bff"
  container.style.borderRadius = "8px"
    const p = document.createElement('p')
    p.setAttribute('id' , 'paragraph')
    
    if(seats == "" || seats <= 0){
      p.innerText =  `Please Book Atleast One Seat`
      container.appendChild(p);
      return;
    }
    else if(seats == 1){
      p.innerText =  `Seat Booked for ${username}`
    }
    else{
      p.innerText =  `Seats Booked for ${username}`
    }

    container.appendChild(p);
    
    const button = document.createElement('button')
    button.innerText = "See Details"
    conofbutton.appendChild(button);

    button.addEventListener('click' , function(){
      conofdetails.style.color = "white"
      conofdetails.style.backgroundColor = "#007bff"
      conofdetails.style.borderRadius = "10px"
      conofdetails.appendChild(allbookings)
    })
}