const http = require('http');
const mongoose = require('mongoose')
const app = require('./app');

const port = process.env.port || 8000 ;

const MONGO_URI = 'mongodb+srv://ahkam-user:9e1iNxvZJpIESEo8@cluster0.peugx4w.mongodb.net/ahkam?retryWrites=true&w=majority&appName=Cluster0';

const server = http.createServer(app);

mongoose.connection.once('open',()=>{
    console.log('MongoDb Connection Ready!');
});

mongoose.connection.on('error',(err)=>{
    console.error('MongoDB connection error:', err);
});

async function startServer() {
    try {
        await mongoose.connect(MONGO_URI);

        server.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err);
    }
};

startServer();


