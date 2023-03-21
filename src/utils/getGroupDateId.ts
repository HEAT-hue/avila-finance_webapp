// jshint esversion:6

function getDateGroupId(): string {
    return new Date().toISOString().split('T')[0]
}

export { getDateGroupId };