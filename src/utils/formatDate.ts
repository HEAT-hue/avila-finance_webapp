// jshint esversion:6

function getFormattedDate(isoString?: any) {
    const date = new Date(isoString);

    const year = date.getFullYear();

    const month = date.toLocaleString('default', { month: 'short' });

    const day = date.toLocaleString('default', { day: "2-digit" });

    return { year, month, day }
}

export { getFormattedDate }