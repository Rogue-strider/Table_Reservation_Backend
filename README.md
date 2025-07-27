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
server/<br>
├── controllers/<br>
│ └── table.controller.js<br>
├── models/<br>
│ └── lock.model.js<br>
├── routes/<br>
│ └── lock.routes.js<br>
├── utils/<br>
│ └── db.js<br>
├── .env<br>
├── index.js<br>


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
   
4. **Start the Server**
   ```bash
     npm start

## 📡 API Endpoints

### **🔐 POST /api/tables/lock**
Locks a table for a specified duration (in seconds).<br><br>
**Request Body:**
```json
{
  "tableId": "table-123",
  "userId": "user-abc",
  "duration": 60
}
```
**Response:**
```json
{
  "success": true,
  "message": "Table locked successfully."
}
```

### **🔐 POST /api/tables/unlock**
Unlocks a table if the requesting user is the one who originally locked it.<br><br>
**Request Body:**
```json
{
  "tableId": "table-123",
  "userId": "user-abc"
}
```
**Response:**
```json
{
  "success": true,
  "message": "Table unlocked successfully."
}
```

### **📊 GET /api/tables/:tableId/status**
Checks whether the table is currently locked or not.<br><br>
**Response:**
```json
{
  "isLocked": true
}
```
or
```json
{
  "isLocked": false
}
```

## 🧪 Postman Collection
A Postman collection is provided to demonstrate testing procedures for all endpoints.<br>
**✅ To Use:** <br>
1.Open Postman<br>
2.Import the file: TableReservation.postman_collection.json<br>
3.Test the following:<br>
   - Lock a table
   - Unlock a table
   - Check table lock status
   - Verify lock expiry handling

## 📬 Contact
For any queries or contributions, feel free to open issues or pull requests. Happy coding! 🎉
