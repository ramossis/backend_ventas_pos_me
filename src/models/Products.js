const db=require('../config/db')

const Products={}

Products.getAll=async()=>{
    const [rows]= await db.query("SELECT * FROM ")
}