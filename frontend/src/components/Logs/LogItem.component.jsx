import React from "react";

const LogItem = ({ log }) => {
    const LogStatus = (status) => {
        switch (status) {
            case "resolved":
                return "bg-green-400";
            case "pending":
                return "bg-yellow-400";
            case "needs attention":
                return "bg-red-400";
            default:
                return "";
        }
    };

    return (
        <tr className="bg-gray-800">
            <td className="p-3 text-center">{log.id}</td>
            <td className="p-3">
                <div className="flex align-items-center">
                    <div className="ml-3">
                        <div className="">{log.message}</div>
                        <div className="text-gray-500">mail@rgmail.com</div>
                    </div>
                </div>
            </td>
            <td className="p-3">{log.tech}</td>
            <td className="p-3 text-center">
                <span
                    className={`${LogStatus(
                        log.status
                    )} text-gray-50 rounded-full px-3 py-1 inline-flex items-center`}
                >
                    {log.status}
                </span>
            </td>
            <td className="p-3"></td>
        </tr>
    );
};

export default LogItem;
