import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Base from "../../Base/Base";


function AddTeacher({teacherdata,setTeacherdata}) {
    const [name, setName] = useState("")
    const [gender, setGender] = useState("")
    const [qualification, setQualification] = useState("")
    const [skills, setSkills] = useState("")
    const history = useHistory()


    const createTeacher = () => {
        //creating object from input states
        const newUser = {
            name:name,
            gender,
            qualification,
            skills
        }
        //console.log(newUser)
        setTeacherdata([...teacherdata, newUser])
        setName("")
        setGender("")
        setQualification("")
        setSkills("")
        history.push("/teachers")
    }

    return (
        <Base>
        <div className="addentry">
            
            <input className="input"
            placeholder="Enter Name"
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            <input className="input"
            placeholder="Enter Gender"
            type="text"
            value={gender}
            onChange={(e)=>setGender(e.target.value)}
            />
            <input className="input"
            placeholder="Enter Qualification"
            type="text"
            value={qualification}
            onChange={(e)=>setQualification(e.target.value)}
            />
            <input className="input"
            placeholder="Enter Skills"
            type="text"
            value={skills}
            onChange={(e)=>setSkills(e.target.value)}
            />

            <button className="add-button"
            onClick={createTeacher}
            >Add new Teacher</button>
        </div>
        </Base>
        
    );
}

export default AddTeacher