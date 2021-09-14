import {useState, useEffect} from 'react'

import LogItem from './LogItem.component'

const Logs = () => {

    const [logs, setLogs] = useState([])
    const [loading, setLoading] = useState([])

    useEffect(() => {
        getLogs()
        // eslint-disable-next-line
    }, [])

    const getLogs = async() => {
        setLoading(true)
        try {
            const res = await fetch("http://localhost:5000/logs")
            const data = await res.json()
            setLogs(data)        
            setLoading(false)
        } catch (err) {
            setLoading(false)
            console.log("here",err)
        }
    }

    if (loading) {
        return ( <h4> Loading ...</h4>)
    }

    return (
        <div>
            <h2>System Logs</h2> 
            {
                !loading && logs.length === 0 ?
                    (<h4>No logs as of now.</h4>)
                :
                    logs.map((log) => 
                        <LogItem log = {log} key={log.id}/>
                    )

            }
            
        </div>
    )
}

export default Logs
