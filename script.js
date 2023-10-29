<script>
function authenticateUser() {
  const url = 'https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp';
  const data = {
    login_id: 'test@sunbasedata.com',
    password: 'Test@123'
  };

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log('Authentication successful. Bearer token:', data.access_token);
      // Call other API functions here with the received access token
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Function to create a new customer
function createNewCustomer() {
  const url = 'https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=create';
  const data = {
    first_name: 'Jane',
    last_name: 'Doe',
    street: 'Elvnu Street',
    address: 'H no 2',
    city: 'Delhi',
    state: 'Delhi',
    email: 'sam@gmail.com',
    phone: '12345678'
  };

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer token_received_in_authentication_API_call'
    }
  })
    .then(response => {
      if (response.status === 201) {
        console.log('Successfully Created');
      } else if (response.status === 400) {
        console.log('First Name or Last Name is missing');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Add other functions for getting customer list, deleting a customer, and updating a customer

// Call the authentication function to start the process
authenticateUser();

</script>