function openBooking() { document.getElementById('bookingModal').style.display = 'block'; }
function closeBooking() { document.getElementById('bookingModal').style.display = 'none'; }
function openContact() { document.getElementById('contactModal').style.display = 'block'; }
function closeContact() { document.getElementById('contactModal').style.display = 'none'; }
function confirmBooking() {
    alert("Payment Received! Send your M-Pesa code to 0794771937 to receive your Google Meet link.");
    closeBooking();
}
window.onclick = function(e) { if (e.target.className === 'modal') { e.target.style.display = 'none'; } }
