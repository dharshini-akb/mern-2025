var details = async () => {
  
    var response = await fetch('https://jsonplaceholder.typicode.com/users');
    var users = await response.json();
    console.log(users);
  
};
details();