let numProducts = parseInt(prompt("عدد المنتجات"));
let totalSum = 0;
let discountedItemsCount = 0;
let productNames = []; 

for (let i = 1; i <= numProducts; i++) {
    let name = prompt(`اسم المنتج رقم ${i}:`);
    let price = parseFloat(prompt(`سعر ${name}:`));
    let quantity = parseInt(prompt(`كمية ${name}:`));

    let productTotal = price * quantity;

    if (quantity > 10) {
        productTotal *= 0.90;
        discountedItemsCount++;
    }

    productNames.push(name); 
    totalSum += productTotal;
}

let finalTotal = totalSum;


let namesList = productNames.join(" - ");

if (totalSum > 500 && discountedItemsCount < 2) {
    finalTotal *= 0.80;
    alert(`المنتجات التي اخترتها: ${namesList}\n\nتهانينا! حصلت على خصم إضافي 20%.\nالإجمالي النهائي: ${finalTotal.toFixed(2)}`);
} else {
    alert(`المنتجات التي اخترتها: ${namesList}\n\nالإجمالي النهائي للمشتريات: ${finalTotal.toFixed(2)}`);
}




