
export default function handler(req, res)
{
    const { uid } = req.query
    res.end(`User: ${uid}`)
}