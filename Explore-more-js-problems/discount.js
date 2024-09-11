//1 ta ticket er dam 100....prothom 100 tk aksathe kinle ,per pice 100 kore er por 101 t0 200 ticket er dam rakbe 90 tk....er por 200+ ticket dam rakbe proti pice 70 tk kore.
// first 100 ticket = 100 tk
// 101 to 200 ticket= 90tk
//200+ ticket= 70tk

function ticketPrice(ticketQuantity){
  const first100Rate= 100;
  const second100Rate= 90;
  const restTicketRate= 70;

  if(ticketQuantity <= 100){
    const price= ticketQuantity * first100Rate;
    return price;
  }

  else if(ticketQuantity <= 200){
    const first100Price= 100*first100Rate;
    const restTicketQuantity= ticketQuantity-100;
    const restTicketPrice= restTicketQuantity * second100Rate;
    const totalPrice= first100Price + restTicketPrice;
    return totalPrice;
  }

  else{
    const first100Price= 100 * first100Rate;
    const second100Price= 100 * second100Rate;
    const restTicketQuantity= ticketQuantity-200;
    const restTicketPrice= restTicketQuantity * restTicketRate;
    const totalCost= first100Price + second100Price + restTicketPrice;
    return totalCost;
  }

}

const price= ticketPrice(500);
console.log("price: ",price);