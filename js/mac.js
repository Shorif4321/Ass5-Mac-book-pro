//memory section
const memory = document.getElementById('memory16');
memory.addEventListener('click', function () {
    document.getElementById('memory-cost').innerText = '180';
    netPrice();
});

const memory2 = document.getElementById('memory8');
memory2.addEventListener('click', function () {
    document.getElementById('memory-cost').innerText = '0';
    netPrice();
});

//Memory storage
//256gb button
const storage = document.getElementById('storage256');
storage.addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = '0';
    netPrice();
});

//512gb button
const storagee = document.getElementById('storage512');
storagee.addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = '100';
    netPrice();
});

//1tb button
const lastStorage = document.getElementById('storage1tb');
lastStorage.addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = '180';
    netPrice();
});

//delivery section
const freeDelivery = document.getElementById('free-delivery');
freeDelivery.addEventListener('click', function () {
    document.getElementById('delivery-const').innerText = '0';
    netPrice();
});

const delivery = document.getElementById('delivery');
delivery.addEventListener('click', function () {
    document.getElementById('delivery-const').innerText = '20';
    netPrice();
});

// sum of all the prices
function netPrice() {
    const bestPriceCost = parseInt(
        document.getElementById('best-price').innerText
    );

    const deliveryCost = parseInt(
        document.getElementById('delivery-const').innerText
    );

    const memoryCost = parseInt(document.getElementById('memory-cost').innerText);

    const storageCost = parseInt(
        document.getElementById('storage-cost').innerText
    );

    let netCostPrice = bestPriceCost + deliveryCost + memoryCost + storageCost;

    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = netCostPrice;

    const lastTotal = document.getElementById('lastTotal');
    lastTotal.innerText = netCostPrice;
    return netCostPrice;

}

//promocode function
cupponCode();
function cupponCode() {
    document.getElementById('promo-btn').addEventListener('click', function () {
        const input = document.getElementById('promo-input').value;
        console.log(input);

        if (input == 'stevekaku') {
            const promoBonus = document.getElementById('lastTotal');
            const BonusAmount = parseInt(promoBonus.innerText);
            const finish = (BonusAmount) * 80 / 100;
            promoBonus.innerText = finish;


        }

    })

}
