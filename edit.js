function showAllTickets() {
    console.log("=== TICKETS ===");
    for (let i = 0; i < tickets.length; i++) {
        console.log(`
Ticket #${ticket.id}
Passager : ${ticket.passengerName}
Trajet : ${trip.departure} → ${trip.destination}
Place : ${ticket.seatNumber}
Prix : ${ticket.price} DH}
        ===========================`);
    }
}