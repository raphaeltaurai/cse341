exports.getData = async (req, res, next) => {
    try {
        const db = req.app.locals.db;
        const collection = db.collection('professional');
        
        // Find the professional data from MongoDB
        const data = await collection.findOne({});
        
        if (!data) {
            return res.status(404).json({ message: 'Professional data not found' });
        }
        
        res.status(200).json(data.user);
    } catch (error) {
        console.error('Error fetching data from MongoDB:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};