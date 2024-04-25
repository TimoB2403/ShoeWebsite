// document.addEventListener('DOMContentLoaded', function() {
//     const paymentIcons = document.querySelectorAll('.payment-icons a');
//     paymentIcons.forEach(function(icon) {
//         icon.addEventListener('click', function(event) {
//             event.preventDefault();
//             const paymentText = this.getAttribute('data-text');
//             // Erstellen eines kleinen Fensters
//             const popup = document.createElement('div');
//             popup.classList.add('payment-popup');
//             popup.textContent = paymentText;
//             // Anhängen des Popups an den Body
//             document.body.appendChild(popup);
//             // Positionieren des Popups relativ zum Klickereignis
//             popup.style.left = event.pageX + 'px';
//             popup.style.top = event.pageY + 'px';
//             // Schließen des Popups, wenn der Benutzer außerhalb des Popups klickt
//             document.addEventListener('click', function closePopup(e) {
//                 if (!popup.contains(e.target) && !icon.contains(e.target)) {
//                     document.body.removeChild(popup);
//                     document.removeEventListener('click', closePopup);
//                 }
//             });
//         });
//     });
// });