import Client from "../core/Client";
import { IconeEdit, IconeTrash } from "./Iconnes";

interface TableProps {
    client: Client[]
    clientSelect?: (client: Client) => void
    clientTrash?: (client: Client) => void
}

export default function Table(props: TableProps) {

    const displayActions = props.clientSelect || props.clientTrash

    function renderHeader() {
        return (
            <tr>
                <th className="text-center p-4">Code</th>
                <th className="text-center p-4">Name</th>
                <th className="text-center p-4">Age</th>
                {displayActions ?
                    <th className="text-center p-4">Actions</th>
                    : false
                }

            </tr>
        )
    }

    function renderData() {
        return (
            props.client?.map((client, index) => {
                return (
                    <tr key={client.id}
                        className={`${index % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'} `}
                    >
                        <td className="text-center p-4">{client.id}</td>
                        <td className="text-center p-4">{client.name}</td>
                        <td className="text-center p-4">{client.age}</td>
                        {displayActions ? renderAction(client) : false}
                    </tr>
                )
            })
        )
    }

    function renderAction(client: Client) {
        return (
            <td className={`flex justify-center`}>
                {props.clientSelect ? (
                    <button onClick={()=> props.clientSelect?.(client)}className={`
                        flex justify-center items-center
                        text-green-600 rounded-full p-2 m-1
                        hover:bg-purple-50
                        `}>
                        {IconeEdit}
                    </button>
                ) : false}
                {props.clientTrash ? (
                    <button onClick={()=> props.clientTrash?.(client)} className={`
                    flex justify-center items-center
                    text-red-500 rounded-full p-2 m-1
                    hover:bg-purple-50
                `}>
                        {IconeTrash}
                    </button>
                ) : false

                }
            </td>
        )
    }
    return (
        <table className={`
           w-full rounded-xl overflow-hidden
        `}>
            <thead className={`
                text-gray-50
                bg-gradient-to-r from-purple-500 to-purple-800
            `}
            >
                {renderHeader()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}