const gettimeZone = (req,res)=>{
    const result = []
    const demoObj = [
        ['en-GB','UTC'],
        ['en-AF','Asia/Kabul'],
        ['en-AD','Europe/Andorra'],
        ['en-AQ','Antarctica/Davis'],
        ['en-AQ','Antarctica/Troll']
    ]
    demoObj.map(value=>{
        result.push(new Date().toLocaleString(value[0], { timeZone: value[1] }))
    })
    res.send(result)
}

module.exports = {gettimeZone}


// https://timezonedb.com/time-zones










module.exports = {gettimeZone}