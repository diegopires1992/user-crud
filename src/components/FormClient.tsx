import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";
import EntryClient from "./EntryClient";

interface FormClientProps {
    client: Client
}


export default function FormClient(props: FormClientProps) {
    const id = props.client?.id
    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? 0)
    return (
        <div>
            {id ? (
                <EntryClient
                    readOnly
                    type="text"
                    text="Code"
                    valueInput={id}
                    className="m-4"
                />

            ) : false}
            <EntryClient
                type="text"
                text="Name"
                valueInput={name}
                onChange={setName}
                className="m-4"
            />
            <EntryClient
                type="number"
                text="Age"
                valueInput={age} 
                onChange={setAge}
                className="m-4"
            />
            <div className="flex justify-end">
                <Button cor='blue' className="mr-2">
                {id ? 'Edit' : 'Save'}
                </Button>
                <Button>
                    Cancel
                </Button>
            </div>

        </div>
    )
}