var prompt = require('prompt-sync')();
const tickets = [{
    id: 1,
    passengerName: "Ahmed",
    tripId: 2,
    seatNumber: 1,
    price: 90
},
{
    id: 2,
    passengerName: "Sara",
    tripId: 8,
    seatNumber: 2,
    price: 40
},
{
    id: 3,
    passengerName: "Youssef",
    tripId: 3,
    seatNumber: 1,
    price: 140
},
{
    id: 4,
    passengerName: "Amina",
    tripId: 5,
    seatNumber: 3,
    price: 110
},
{
    id: 5,
    passengerName: "Karim",
    tripId: 2,
    seatNumber: 4,
    price: 90
}];
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
do {
    console.log(`
=================================
        RAILWAY MANAGER
=================================
`);

    console.log("1. Afficher les trajets");
    console.log("2. Acheter un ticket");
    console.log("3. Afficher les tickets");
    console.log("4. Annuler un ticket");
    console.log("5. Rechercher un ticket");
    console.log("6. Filtrer les trajets");
    console.log("7. Trier les trajets");
    console.log("0. Quitter");
    choix = +prompt("Votre choix :");

    switch (choix) {
        case 1:
            showAllTrips();
            break;
        case 2:
            buyTickets(findTrip, creatTicket, decreaseSeat);
            break;
        case 3:
            showAllTickets(findTrip);
            break;
        case 4:
            cancelTicket(findTicket, findTrip, deleteTicket, increaseSeat);
            break;
        case 5:
            findTravlerByName();
            break;
        case 6:
            filterByCity()
            break;
        case 7:

            break;
        default:
            console.log('Mercie pour votre viste. ');
            break;


    }
} while (choix !== 0);

function showAllTrips() {
    console.log("=== TRAJETS DISPONIBLES ===");
    for (let i = 0; i < trips.length; i++) {
        console.log(`
        #${trips[i].id} ${trips[i].departure} → ${trips[i].destination}
        Départ : ${trips[i].departureTime}
        Arrivée : ${trips[i].arrivalTime}
        Prix : ${trips[i].price} DH
        Places disponibles : ${trips[i].availableSeats}
        ===========================`);
    }
}
function findTrip(id) {
    for (let i = 0; i < trips.length; i++) {
        if (id == trips[i].id) {
            return trips[i]
        }
    }
    return null
}
function creatTicket(nom, trajet) {
    let user = {
        id: tickets.length + 1,
        passengerName: nom,
        tripId: trajet.id,
        seatNumber: 51 - trajet.availableSeats,
        price: trajet.price
    }
    tickets[tickets.length] = user
    return user
}
function decreaseSeat(trip) {
    trip.availableSeats--;
}
function buyTickets(findTrip, creatTicket, decreaseSeat) {
    let nom = prompt("Entrer le Nom du passager :");
    let Identifiant = prompt("Entrer l'Identifiant du trajet:");
    let trip = findTrip(Identifiant);
    if (trip == null) {
        console.log("Trajet introuvable");
        return;
    }
    if (trip.availableSeats <= 0) {
        console.log("Aucune place disponible");
        return;
    }
    let ticket = creatTicket(nom, trip);
    decreaseSeat(trip);
    ticketDisplayPurchase(ticket, trip);
}
function ticketDisplayPurchase(ticket, trip) {
    console.log(`
Ticket acheté avec succès.

Ticket #${ticket.id}
Passager : ${ticket.passengerName}
Trajet : ${trip.departure} → ${trip.destination}
Place : ${ticket.seatNumber}
Prix : ${ticket.price} DH
`);
}
function showAllTickets(findTrip) {
    console.log("=== TICKETS ===");
    for (let i = 0; i < tickets.length; i++) {
        let trip = findTrip(tickets[i].tripId);
        console.log(`
Ticket #${tickets[i].id}
Passager : ${tickets[i].passengerName}
Trajet : ${trip.departure} → ${trip.destination}
Place : ${tickets[i].seatNumber}
Prix : ${tickets[i].price} DH
===========================
        `);
    }
}
function findTicket(id) {
    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].id == id) {
            return tickets[i];
        }
    }
    return null;
}
function increaseSeat(trip) {
    trip.availableSeats++;
}
function deleteTicket(ticketIndex) {
    for (let i = ticketIndex; i < tickets.length - 1; i++) {
        tickets[i] = tickets[i + 1];
    }
    tickets.length = tickets.length - 1;
}
function cancelTicket(findTicket, findTrip, deleteTicket, increaseSeat) {
    let Identifiant = prompt("Entrer l'Identifiant de votre ticket :");
    let ticket = findTicket(Identifiant);
    if (ticket == null) {
        console.log("Ticket introuvable");
        return;
    }
    let trip = findTrip(ticket.tripId);
    increaseSeat(trip);
    let ticketIndex = findTicket(Identifiant);
    deleteTicket(ticketIndex);
    console.log("Ticket supprimé avec succès.");
}
function findTravlerByName(nom) {
    nom = prompt("Entrer votre nom:");
    for (let i = 0; i < tickets.length; i++) {
        let trip = findTrip(tickets[i].tripId);
        if (tickets[i].passengerName == nom) {
            console.log(`
Ticket #${tickets[i].id}
Passager : ${tickets[i].passengerName}
Trajet : ${trip.departure} → ${trip.destination}
Place : ${tickets[i].seatNumber}
Prix : ${tickets[i].price} DH`)
        }
    }
}
function filterByCity() {
    let city = prompt("Entrer la ville de départ:");
    let found = false;
    for (let i = 0; i < trips.length; i++) {
        if (trips[i].departure == city) {
            console.log(`${trips[i].departure} → ${trips[i].destination} : ${trips[i].price} DH`);
            found = true;
        }
    }
    if (!found) {
        console.log("Ville introuvable");
    }
}
