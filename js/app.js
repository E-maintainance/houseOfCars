
/* eslint-disable no-undef */
'use strict';

const custumer_form = document.getElementById('form');
let but=document.getElementById('sub');
let convert;

let b1=document.getElementById('b1');
b1.addEventListener('click',hand);
function hand(event){
  event.preventDefault();
  window.location.pathname='../pages/orders.html';

}
let b2=document.getElementById('b2');
b2.addEventListener('click',hand2);
function hand2(event){
  event.preventDefault();
  window.location.pathname='../pages/rent.html';

}


function Custumer_Data(fname,lname,phone,email,year,brand,model,area,rent,date){
  this.fname = fname;
  this.lname = lname;
  this.phone = phone;
  this.email =email;
  this.year = year;
  this.brand = brand;
  this.model = model;
  this.area=area;
  this.rent=rent;
  this.date=date ;

  Custumer_Data.alldata.push(this);

}

  Custumer_Data.alldata=[]


  custumer_form.addEventListener("submit",handleSubmit)
 
  function handleSubmit(event){
    event.preventDefault();
    console.log(event)
    let holder = event.target;
    let fname = holder.fname.value;
    let lname = holder.lname.value;
    let phone = parseInt(holder.phone.value);
    let email  = holder.email.value;
    let year = parseInt(holder.year.value);
    let brand = holder.brand.value;
    let model = holder.model.value;
    let area = holder.cars.value;
    let rent = holder.rent.value;
    var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
let date=today

  
    
   new Custumer_Data(fname,lname,phone,email,year,brand,model,area,rent,date)

   saving();
   if(rent=="yes"){
//     swal.fire({
//       title: `Lets go to the rent page?`,
//       text: '',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes'
      
//   }).then((result) => {
//       if (result.isConfirmed) {
        
          window.location.pathname = '../pages/rent.html'}
//   }});
//    }
  
//   }
   
  











  new Custumer_Data(fname,lname,phone,email,year,brand,model,area,rent,date);

  saving();

}


console.log(Custumer_Data.alldata);


function saving(){
  convert=JSON.stringify(Custumer_Data.alldata);
  localStorage.setItem('Custmer_info',convert);

}



function getFromLs(){
  let data=localStorage.getItem('Custmer_info');
  let parse=JSON.parse(data);
  if(parse !=null){
    Custumer_Data.alldata=parse;
  }

}