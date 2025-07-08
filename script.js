// Select the form
const bookingForm = document.querySelector("form");

// Add submit event
bookingForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent actual form submission

  // Get form values
  const name = document.getElementById("name").value.trim();
  const carType = document.getElementById("car-type").value;
  const date = document.getElementById("date").value;

  // Validation
  if (!name || !carType || !date) {
    alert("Please fill in all fields to confirm your booking.");
    return;
  }

  // Format booking message
  const formattedCar = carType.charAt(0).toUpperCase() + carType.slice(1);
  const message = `
✅ Booking Confirmed!
Name: ${name}
Car Type: ${formattedCar}
Pickup Date: ${date}
  
Thank you for choosing DriveNow! 🚗
`;

  // Show confirmation
  alert(message);

  // Optional: Reset form after submission
  bookingForm.reset();
});
