import { useState } from "react"
import { DataForm } from "./DataForm"
import { DataRow } from "./DataRow"

const rawData = [
    {
        name: "Mark",
        age: 21,
        gender: "Male"
    },
    {
        name: "John",
        age: 25,
        gender: "Male"
    },
    {
        name: "Serah",
        age: 31,
        gender: "Female"
    }
    {
        name: "Tola",
        age: 21,
        gender: "Female"
    }
]
export const DataTable = () => {
    const [tableData, setTableData] = useState(rawData)
    const [editing, setEditing] = useState(false)
    const [editIndex, setEditIndex] = useState(false)

    const onSave = ({ name, gender, age}) => {
          const newData = tableData.slice(0, tableData.length)
          newData.push({
            name, age, gender
          })
          setTableData(newData)
    }

    const onDelete = ( index) => {
         const newData = tableData.slice(0, tableData.length)
         newData.splice(index, 1)
         newData.splice()
         setTableData(newData)
    }

    const onEdit = (index) => {
        setEditing(true)
        setEditIndex(index)
    }

    const onCancel = () => {
        setEditing(false)
    }

    const onUpdate = ({ name, age, gender}) => {
         const newData = tableData.slice(0, tableData.length)
         newData[editIndex] = {
            name, age, gender
         }
         setTableData(newData)
         setEditing(false)
         editIndex(false)
    }
    
    return (
        <>
        <table>
            <thead>
                <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { tableData.map( (rowData, index) =>(
                   <DataRow rowData={rowData} key={index} index={index} onDelete={onDelete} onEdit={onEdit} />
                ) )}
            </tbody>
        </table>
        <DataForm onCreate={onSave}
         onCancel={onCancel} 
         onUpdate={onUpdate}
         update={editing}
         data={editing ? tableData[editIndex]: {}}
         />
        </>
    )
}