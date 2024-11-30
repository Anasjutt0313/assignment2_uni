# Library Management System

This is a simple Library Management System built with **Node.js**, **Express**, and **MongoDB**. The system allows you to manage books, members, and transactions. It provides basic RESTful API endpoints for performing operations such as creating new books, adding members, and recording transactions.

## Prerequisites

- **Node.js**: Version 14 or higher.
- **MongoDB**: A running instance of MongoDB, either locally or hosted.
- **Postman** or any other tool to test the API endpoints.

## Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/yourusername/library-management-system.git
    ```

2. Navigate to the project directory:

    ```bash
    cd library-management-system
    ```

3. Install the required dependencies:

    ```bash
    npm install
    ```

4. Ensure that MongoDB is running. You can run MongoDB locally with the following command:

    ```bash
    mongod
    ```

5. Start the server:

    ```bash
    npm start
    ```

    The server will now be running on `http://localhost:4000`.

## API Endpoints

### 1. **Create a Book**

- **Endpoint**: `POST /book`
- **Request body**:
    ```json
    {
      "title": "Book Title",
      "author": "Author Name",
      "genre": "Genre",
      "yearPublished": 2021,
      "availableCopies": 10
    }
    ```
- **Response**:
    ```json
    {
      "message": "Book data created successfully",
      "obj": { ...book data... }
    }
    ```

### 2. **Create a Member**

- **Endpoint**: `POST /member`
- **Request body**:
    ```json
    {
      "name": "Member Name",
      "membershipNumber": "123456",
      "email": "member@example.com",
      "membershipType": "Regular",
      "contactNumber": 1234567890
    }
    ```
- **Response**:
    ```json
    {
      "message": "Member data created successfully",
      "obj": { ...member data... }
    }
    ```

### 3. **Create a Transaction**

- **Endpoint**: `POST /transaction`
- **Request body**:
    ```json
    {
      "transactionId": "T123",
      "bookId": "60adf6f3d7b15c001fbbc12f",
      "memberId": "60adf6f3d7b15c001fbbc123",
      "issueDate": "2024-11-01",
      "returnDate": "2024-11-30",
      "status": "Completed"
    }
    ```
- **Response**:
    ```json
    {
      "message": "Transaction created successfully",
      "obj": { ...transaction data... }
    }
    ```

### 4. **Show All Books**

- **Endpoint**: `GET /showbooks`
- **Response**: 
    ```json
    [
      { ...book data... }
    ]
    ```

### 5. **Show All Members**

- **Endpoint**: `GET /showmembers`
- **Response**:
    ```json
    [
      { ...member data... }
    ]
    ```

### 6. **Show All Transactions**

- **Endpoint**: `GET /showtransactions`
- **Response**:
    ```json
    [
      { ...transaction data... }
    ]
    ```

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend.
- **Express**: Web framework for Node.js to handle routing.
- **MongoDB**: NoSQL database to store data.
- **Mongoose**: MongoDB object modeling tool for Node.js.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-xyz`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-xyz`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- This project was inspired by common library management systems.
- Thanks to the MongoDB documentation for its useful resources.
