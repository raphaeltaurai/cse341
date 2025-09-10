const fs = require('fs');
const path = require('path');
const { getDatabase, closeConnection } = require('./database');

async function seedDatabase() {
    try {
        const db = await getDatabase();
        const collection = db.collection('professional');

        //Read the data.json file
        const dataPath = path.join(__dirname, '../data.json');
        const jsonData = fs.readFileSync(dataPath, 'utf8');
        const data = JSON.parse(jsonData);

        // Insert the data into MongoDB
        const result = await collection.insertOne(data);
        console.log(`Inserted document with ID: ${result.insertedId}`);
        
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        await closeConnection();
    }
}

seedDatabase();