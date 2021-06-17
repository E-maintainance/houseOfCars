let rent = document.getElementsByClassName("tag")
let i;
let x;
console.log(rent)
// let rent2 =document.getElementsByClassName()
// let rent3 =document.getElementsByClassName()
for( i=0;i<rent.length;i++){
rent[i].addEventListener("click",handlclick);

}
console.log(i)
function handlclick(event){
    console.log(event.target.innerHTML)
    
    event.preventDefault();
    if(event.target.innerHTML=="Kia Rio 3"){
        x=14.99;
        
        new pay("Kia Rio 3",x);
        
    }
    else if(event.target.innerHTML=="Renault Clio"){
        x=19.99
        
        new pay("Renault Clio",x)

    }
    else if(event.target.innerHTML=="Honda Civic 1999"){
        x=9.99;
        
        new pay("Honda Civic 1999",x);
    }
    else if(event.target.innerHTML=="BMW 520"){
        x=29.99
        
        new pay("BMW 520",x)

    }
    else if(event.target.innerHTML=="Mercedes CLK"){
        x=34.99;
        
        new pay("Mercedes CLK",x);
    }
    else if(event.target.innerHTML=="Toyota Camry"){
        x=29.99;
        
        new pay("Toyota Camry",x)

    }
    else if(event.target.innerHTML=="Susuki"){
        x=12.99;
        
        new pay("Susuki",x);
    }
    else if(event.target.innerHTML=="H100"){
        x=7.99;
        
        new pay("H100",x);
    }
    
    
    saving();
    swal.fire({
        title: `Are you sure you want ${event.target.innerHTML} ?`,
        text: 'to make sure that every thing safe sign contract',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
        
    }).then((result) => {
        if (result.isConfirmed) {
          
            window.location.pathname = '../pages/sign.html'
    }});
    }
    
    // Swal.fire({
    //     title: 'Are you sure?',
    //     text: "You won't be able to revert this!",
    //     icon: 'warning',
    //     showCancelButton: true,
    //     confirmButtonColor: '#3085d6',
    //     cancelButtonColor: '#d33',
    //     confirmButtonText: 'Yes, delete it!'
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       Swal.fire(
    //         'Approved!',
    //         'We are going to the contract page.',
    //         'success'
    //       )
    //     }
    //   })


    
   
    pay.all=[];
    
    function pay(car,price){
        this.car=car;
        this.price=price;
        console.log(this.price)
        pay.all.push(this);
    
    }

    





    function saving(){
        convert=JSON.stringify(pay.all)
        localStorage.setItem("rent_info",convert);
        
        } 

    


    