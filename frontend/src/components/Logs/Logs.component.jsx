import { useState, useEffect } from "react";

import "./Log.css";

import LogItem from "./LogItem.component";

const Logs = () => {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState([]);

    useEffect(() => {
        getLogs();
        // eslint-disable-next-line
    }, []);

    const getLogs = async () => {
        setLoading(true);
        try {
            const res = await fetch("http://localhost:5000/logs");
            const data = await res.json();
            setLogs(data);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.log("here", err);
        }
    };

    if (loading) {
        return <h4> Loading ...</h4>;
    }

    return (
        <div>
            {
                // logs.map((log) => <LogItem log={log} key={log.id} />)
            }
            <h2 className="text-center">Ticket Logs</h2>
            <table className="table text-gray-400 border-separate space-y-10 text-sm">
                <thead className="bg-gray-800 text-gray-500">
                    <tr>
                        <th className="p-3 text-left">Ticket Id</th>
                        <th className="p-3">Subject</th>
                        <th className="p-3">Assigned</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {!loading && logs.length === 0 ? (
                        <h4>No logs as of now.</h4>
                    ) : (
                        logs.map((log) => <LogItem log={log} key={log.id} />)
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Logs;
