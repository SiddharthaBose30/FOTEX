// Import required modules
const mongoose = require('mongoose');

// Define the schema for items
const productSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    description: String,
    // Add more fields as needed
});

// Define the Item model
const Product = mongoose.model('products', productSchema);

// Connect to MongoDB Atlas cluster
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB Atlas");
    createDummyItem(); // After connecting, create a dummy item
}).catch((err) => {
    console.error("Error connecting to MongoDB Atlas", err);
});

// Function to create a dummy item and add it to the collection
async function createDummyItem() {
    try {
        // Create a new item
        const newItem = new Product({
            name: "Dummy Item",
            category: "Miscellaneous",
            price: 9.99,
            description: "This is a dummy item for testing purposes"
        });
        
        // Save the new item to the database
        await newItem.save();
        
        console.log("Dummy item added successfully");
    } catch (err) {
        console.error("Error adding dummy item:", err);
    }
}
