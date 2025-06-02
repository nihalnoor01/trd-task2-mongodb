# Person API with Node.js + MongoDB

A simple RESTful API for managing person records (CRUD operations) built with Node.js, Express, and MongoDB.

## Features

- **Create** new person records
- **Read** all person records or filter by ID
- **Update** existing records
- **Delete** records
- Data validation for required fields

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose ODM)
- Postman (for API testing)

## Setup Instructions

### 1. Prerequisites

- Node.js (v18+ recommended)
- MongoDB (local or Atlas cloud)
- Postman (or similar API client)

### 2. Installation

```bash
# Clone the repository
git clone https://github.com/your-username/person-api.git

# Navigate to project directory
cd person-api

# Install dependencies
npm install
```

### 3. Configuration

Create a `.env` file in the root directory and add your MongoDB connection string:

```env
MONGO_URI=mongodb://localhost:27017/personDB
```

### 4. Running the Server

```bash
node server.js
```

Server will run at: http://localhost:3000

## API Endpoints

| Method | Endpoint | Description | Request Body Example |
|--------|----------|-------------|---------------------|
| POST | `/person` | Create new person | `{ "name":"John", "age":30, ... }` |
| GET | `/person` | Get all people | - |
| PUT | `/person/:id` | Update person by ID | `{ "age":31 }` |
| DELETE | `/person/:id` | Delete person by ID | - |

## Testing with Postman

1. Import the Postman Collection (link your collection if available)
2. Test endpoints:
   - **Create**: POST `/person` with JSON body
   - **Read**: GET `/person`
   - **Update**: PUT `/person/:id`
   - **Delete**: DELETE `/person/:id`

## Project Structure

```
person-api/
├── server.js          # Main server file
├── models/            # MongoDB schemas
│   └── Person.js      
├── routes/            # API routes
│   └── personRoutes.js
├── controllers/       # Business logic
│   └── personController.js
└── .env               # Environment variables
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
