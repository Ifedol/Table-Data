import React from "react"
const DataRow = ({rowData,index, onDelete, onEdit}) => {
    return (
        <tr>
        <td>{rowData.name}</td>
        <td>{rowData.age}</td>
        <td>{rowData.gender}</td>
        <td>
            <button className="edit" onClick={() => {
                onEdit(index)
            }}>Edit</button>
            <button className="delete" onClick={() => {
                onDelete(index)
            }}>Delete</button>
        </td>
    </tr>
    )
}

export default DataRow