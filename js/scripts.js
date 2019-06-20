document.getElementById('my-age').innerHTML = calculateAge(new Date(1989, 6, 6));

function calculateAge(birthday) {
    let ageDiff = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDiff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
