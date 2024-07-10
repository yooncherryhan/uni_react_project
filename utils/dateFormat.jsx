
const currentDate = new Date();

// Options for formatting
const options = { year: 'numeric', month: 'long', day: 'numeric' };

// Format the date
const formattedDate = new Intl.DateTimeFormat('en-US', options).format(currentDate);

// console.log(formattedDate); // Output: "July 10, 2024"
export default formattedDate