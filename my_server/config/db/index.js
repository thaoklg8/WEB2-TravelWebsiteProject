const mongoose = require('mongoose');
require('dotenv/config')
async function connect() {

    try {
        const uri = "mongodb+srv://admin:admin@cluster0.fvbyi9r.mongodb.net/?retryWrites=true&w=majority";
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connect successfully!")
    } catch (err) {
        console.log("Error: ", err.message)
    }
}
module.exports = { connect }
    // const mongoose = require('mongoose');
    // require('dotenv/config')
    // async function connect() {

//     try {

//         await mongoose.connect(process.env.DB_URL, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log("Connectt successfully!")
//     } catch (err) {
//         console.log("Error: ", err.message)
//     }
// }
// module.exports = { connect }