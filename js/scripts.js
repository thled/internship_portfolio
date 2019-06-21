const myAgeElement = document.getElementById('my-age');
myAgeElement && (myAgeElement.innerHTML = calculateAge(new Date(1989, 6, 6)));

function calculateAge(birthDate) {
    const currentDate = new Date();

    const currentYear = currentDate.getFullYear();
    const birthYear = birthDate.getFullYear();

    const yearDifference = currentYear - birthYear;

    if (currentDate - currentYear < birthDate - birthYear) {
        return yearDifference - 1;
    }

    return yearDifference;
}
