
const a2p= (amount) =>{    
    let points = 0; 
    let isAmountNegative  = amount <0; 
    amount = isAmountNegative ? Math.abs(amount): amount; 

    if(amount > 100) {
       points = points+ (amount -100)*2; 
        amount  = amount -100; 
    }
    if(amount > 50) {
        points = points +(amount - 50)*1; 
    }
return isAmountNegative ? -1*points: points;
}

const months = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];


export const evalPoints=(transactionData)=>{  
    
   
    let monthToPoints = {}; 
    transactionData.map((td, index) => {
        const date = new Date(td.date); 
        const month = months[date.getMonth()];
        const pointsCaluclated = a2p(td.amount);
        if(!monthToPoints[month]) {
            monthToPoints[month] = 0; 
        }
        monthToPoints[month] = monthToPoints[month]+ pointsCaluclated; 
    });
   return monthToPoints; 
}


