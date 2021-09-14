var mysql = require('mysql')

const db = mysql.createConnection({
  host: "162.248.93.113",
  user: "airline_user",
  password: "b^G4D$GDyV%2v7",
  database: "sdp_airline_database",
})
    
connectDB(db)

async function connectDB(conn)
{
  try
  {
    await conn.connect(function (err) {
      if (err)
      {
        connectDB(db)
      }
    })
  }
  catch(e)
  {
    connectDB(db)
  }
}

export {db}