let stockitem = {
    id: 228,
    place: 3,
    weight: "3kg"
}

let shopitem = {
    ...stockitem,
    price: "30azn"
}
delete shopitem.place
console.log(shopitem);