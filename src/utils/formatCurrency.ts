// jshint esversion:6

const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "NGN",
    style: "currency"
})

function formatCurrency(number: number) {
    return CURRENCY_FORMATTER.format(number)
}

export { formatCurrency };