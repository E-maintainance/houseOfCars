let data=localStorage.getItem("rent_info")
let parse=JSON.parse(data)

let payment = [];
payment=parse;
console.log(payment)
console.log("okkk")
let k =document.getElementById("product")
let kk=document.getElementById("pri")
// let kkk=document.getElementById("price")
k.textContent=`${payment[0].car}`
kk.textContent=`${payment[0].price}`
// kkk.textContent=`${payment[0].price}`



let b = document.getElementById("b")
b.addEventListener("click",handle)

function handle (event){
       event.preventDefault();
       swal.fire({
        title: `It was pleasure serving you `,
        text: 'would you like to do a feed back',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
        
    }).then((result) => {
        if (result.isConfirmed) {
                window.location.pathname = '../pages/feedback.html'
              } else if (result.isDismissed) {
                window.location.pathname = '../index.html'
                
              }});
     }



