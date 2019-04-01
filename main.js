const display =document.querySelector("#output")

const emailContacts = customers.map(customers => {
    return customers.contacts.email.forEach(email => {
        display.innerHTML +=
        `<h3>${email}</h3>`
    });
})