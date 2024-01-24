
# **API Integration and Database Management**

## Project Overview
This Node.js application integrates with a third-party API, fetches data, and stores it in a database. The application provides endpoints to interact with the integrated API and manage data in the database.

## Requirements
For development, Node should be installed in your system and To configure project setup update the `.env` file and add your credentials

```ini
GITHUB_ACCESS_TOEKN=
MONGODB_URI=
```
## Endpoints

1. **/api/fetchData**: Fetch data from the Github API and store it in the database.
2. **/api/getData/:id**: Retrieve a specific record from the database based on the provided ID.
3. **/api/getAllData**: Retrieve all records from the database.

## Getting Started

1. **Clone the Repository:**

   ```ini
   git clone https://github.com/MdAmir-99/atdrive-github.git
   ```

2. Install dependencies:

```bash
npm install
```

3. Configure your database connection in the .env file.

4. Start the application:
```bash
npm run dev 
```
or
```bash
npm start 
```

## Usage
### Fetch Data

Send a GET request to /api/fetchData to fetch data from the integrated API and store it in the database.

### Get Specific Data
Send a GET request to /api/getData/:id to retrieve a specific record from the database based on the provided ID. where id represent your profile name `userProfile`

### Get All Data
Send a GET request to /api/getAllData to retrieve all records from the database.

## Technologies Used
- Node.js
- Express.js
- Typescript
- MongoDB
- Axios (for API requests)

## License
Copyright (c) 2024 Md Amir. See the [LICENSE](./LICENSE) file for license rights and limitations (MIT).

