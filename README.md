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

## 📡 API Endpoints

### 🔐 POST `/api/tables/lock`

Locks a table for a specified duration (in seconds).

**Request Body:**
```json
{
  "tableId": "table-123",
  "userId": "user-abc",
  "duration": 60
}
Response:
{
  "success": true,
  "message": "Table locked successfully."
}```

###🔓 POST /api/tables/unlock

Unlocks a table if the requesting user is the one who originally locked it.

**Request Body:**
```json
{
  "tableId": "table-123",
  "userId": "user-abc"
}
Response:
{
  "success": true,
  "message": "Table unlocked successfully."
}```


### 📊 GET /api/tables/:tableId/status

Checks whether the table is currently locked or not.

Response:
{
  "isLocked": true
}
or:
{
  "isLocked": false
}


**🧪 Postman Collection**
A Postman collection is provided to demonstrate testing procedures for all endpoints.

✅ Import the file TableReservation.postman_collection.json into Postman to test:

Locking a table

Unlocking a table

Checking lock status

Lock expiration handling
