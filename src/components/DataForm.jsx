import React, { useEffect, useState} from "react"

const DataForm = ({ onCreate, onCancel, onUpdate, data, update=false }) => {
    const [name, setName] = useState("")
    const [age, setAge] = useState(18)
    const [gender, setGender] = useState("Male")

    useEffect(() => {
        if( update){
            setName(data.name)
            setAge(data.age)
            setGender(data.gender)
        } else {
            setName("")
            setAge(18)
            setGender("Male")
        }
    }, [update, data])

    const onSubmitCallback = function(e) {
        e.preventDefault()
        if ( update ) {
            onUpdate({name, age, gender})

        }else {
            onCreate({name, age, gender})
        }
    }
    return (
        <div className="data-form">
            <form onSubmit={onSubmitCallback}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input type="Number" min="18" max="65" name="age" id="age" value={age} onChange={e => setAge(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="gender">Gender</label>
                    <select id="gender" name="gender" defaultValue={gender} onChange={e => setGender(e.target.value)}>
                         <option value="Male" selected={ gender === "Male"}>Male</option>
                         <option value="Female" selected={ gender === "Female"}>Female</option>
                    </select>
                </div>
                <div>
                    <button className="submit"  type="submit">{
                        update ? "Update" : "Add"
                    }</button>
                    {
                        update ? 
                        <button className="cancel" onClick={onCancel}>Cancel</button>
                        : null
                    }
                </div>
            </form>
        </div>
    )
}

export default DataForm;