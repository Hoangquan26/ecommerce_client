const numberToEuro = (number) => {
    return new Intl.NumberFormat('en-US', {
        style: "currency",
        minimumFractionDigits: 2,
        currency: "EUR"
    }).format(number)
}

export {
    numberToEuro
}