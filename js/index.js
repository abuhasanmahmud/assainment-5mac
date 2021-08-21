
//best price
const bestPrice=document.getElementById('best-price');

//Memory
const memorySize8gb=document.getElementById('8gb-memory');
const memorySize16gb=document.getElementById('16gb-memory');

//extra-memory-cost
const extraMemoryCost=document.getElementById('extra-memory-cost');

//extra memory-cost calculation
function memoryCost(cost){
    extraMemoryCost.innerText=cost;
    calculation();
}
memorySize16gb.addEventListener('click',function(){
    memoryCost('180')
})
memorySize8gb.addEventListener('click',function(){
    memoryCost('0');
})

//storage
const storage256=document.getElementById("storage-256gb");
const storage512=document.getElementById("storage-512gb");
const storage1tb=document.getElementById(id="storage-1tb");

//extra-store-cost
const extraStoreCost=document.getElementById('extra-store-cost');

//extra storage cost calculation
function storageCost(cost){
    extraStoreCost.innerText=cost;
    calculation();
}
storage256.addEventListener('click',function(){
    storageCost('0');   
})

storage512.addEventListener('click',function(){
    storageCost('100');
})
storage1tb.addEventListener('click',function(){
    storageCost('180');
})

//delivery fee
const deliveryFree=document.getElementById('delivery-free');
const deliverWithCharge=document.getElementById('delivery-with-charge');
//extra-delivery-cost
const extraDeliveryCost=document.getElementById('extra-delivery-cost');

//delivery cost calculation
function deliveryCost(cost){
    extraDeliveryCost.innerText=cost;
    calculation();
}

deliveryFree.addEventListener('click',function(){
    deliveryCost('0');
})
deliverWithCharge.addEventListener('click',function(){
    deliveryCost('20');
})

//total price
const totalPrice=document.getElementById('total-price');
const finalTotal=document.getElementById('final-total');

const pomoInput=document.getElementById('pomo-input');
const pomoApply=document.getElementById('pomo-apply-btn');

function calculation(){
    const bestPriceValue=bestPrice.innerText;
    const extraMemoryCostValue=extraMemoryCost.innerText;
    const extraStorageCostValue=extraStoreCost.innerText;
    const  extraDeliveryCostValue=extraDeliveryCost.innerText;

    const totalCostValue=parseInt(bestPriceValue)+parseInt(extraMemoryCostValue)+parseInt(extraStorageCostValue)+parseInt(extraDeliveryCostValue);
    totalPrice.innerText=totalCostValue;

    finalTotal.innerText=totalCostValue;
    const finalTotalPrice=parseInt(finalTotal.innerText);
    return finalTotalPrice;
}


// pomo appaly
pomoApply.addEventListener('click',function(){
    const finalTotalProductPric=calculation();
    const pomoCode='stevekaku';
    const pomoInputCode=pomoInput.value;
    if(pomoCode.toLowerCase() == pomoInputCode.toLowerCase() ){
       const dis=(finalTotalProductPric*20)/100;
     const finalTotalpriceWithDiscount= finalTotalProductPric-dis;
      finalTotal.innerText=finalTotalpriceWithDiscount;
      pomoInput.value='';
    }
    else{
        pomoInput.value='';
    }
})