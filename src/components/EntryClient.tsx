interface EntryClientProps {
    text: string
    type?: 'text' | 'number'
    valueInput: any
    readOnly?: boolean
    onChange?: (valor:any) => void
    className?:string
}

export default function EntryClient(props: EntryClientProps) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2">
                {props.text}
            </label>
            <input
                type={props.type ?? 'text'}
                value={props.valueInput}
                readOnly={props.readOnly}
                onChange={e => props.onChange?.(e.target.value)}
                className={`
                    border border-purple-500 rounded-lg
                    focus:outline-none bg-gray-200
                    px-2 py-2
                    ${props.readOnly ? '' : 'focus:bg-white'}
                `}
            />
        </div>
    )
}