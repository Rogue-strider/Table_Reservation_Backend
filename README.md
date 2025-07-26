# 🪑 Table Reservation API

A simple Node.js + Express REST API to manage table locks for reservation purposes. This project simulates locking/unlocking a table by a user for a certain duration, preventing conflicts from multiple users.

---

## 🚀 Features

- Lock a table for a user for a limited duration
- Prevent multiple users from locking the same table simultaneously
- Unlock table only by the user who locked it
- Check the lock status of a table
- MongoDB for storing table lock state
- Postman collection included for testing all endpoints

---

## 📦 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- Postman (for API testing)

---

## 📁 Project Structure
server/
├── controllers/
│ └── table.controller.js
├── models/
│ └── lock.model.js
├── routes/
│ └── lock.routes.js
├── utils/
│ └── db.js
├── .env
├── index.js


---

## ⚙️ Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/Table_Reservation_Backend.git
   cd Table_Reservation_Backend
2. **Install Dependencies**   
   ```bash
   npm install
3. **Configure Environment Variables**
     Create a .env file in the root and add:
   ```ini
   MONGODB_URI=your_mongodb_connection_string
   ```b
4. **Start the Server**
     npm start

## 📡 API Endpoints
**🔐 POST /api/tables/lock
Locks a table for a specified duration (in seconds).
**Request Body:
```json
{
  "tableId": "table-123",
  "userId": "user-abc",
  "duration": 60
}

`**Response:`.
```json
{
  "success": true,
  "message": "Table locked successfully."
}

