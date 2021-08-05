
// taken from module 20 from MVC unit
module.exports = {
    time: (date) => {
      return date.toLocaleTimeString();
    },
    date: (date) => {
      
      return `${new Date(date).getMonth()}/${new Date(date).getDate()}/${
        new Date(date).getFullYear() 
      }`;
    },
  };