import React from "react";
import { useHistory } from "react-router-dom";
import Base from "../../Base/Base";
import { Box, Button, Icon, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


function Teachers({teacherdata,setTeacherdata}) {
    
    const history = useHistory()
    
    //delete 
    const deleteTeacher = (userId)=>{
        const remainingTeachers = teacherdata.filter((user, idx)=> idx !== userId)
        setTeacherdata(remainingTeachers)
    }

    return (
        <Base>
        <Box>
        <div className="newuser">

        <Button
        sx={{bgcolor:"#bdbdbd", color:"#e57373", height:33, width:130, pr:2}}
        onClick={()=>history.push("/add-teacher")}>
            <Icon sx={{mb:1.5}}><AddIcon/></Icon>
            <Typography fontWeight="400">Teacher</Typography>
        </Button>
        
        </div>

        <div className="card-container">
            
            {teacherdata.map((user, idx) => (
                <div className="card2" key={idx}>
                        <div className="content">
                            <h3>{user.name}</h3>
                            <p>{user.gender}</p>
                            <p>{user.qualification}</p>
                            <p>{user.skills}</p>
                        </div>

                        <div className="control">
                            
                            <Button
                                sx={{bgcolor:"#7cb342", color:"white", mr:0.5}}
                                size="small"
                                onClick={() => history.push(`/edit-teacher/${idx}`)}
                            >
                            <EditIcon />
                            </Button>

                            <Button
                                sx={{bgcolor:"#ff5252", color:"white", ml:0.5}}
                                size="small"
                                onClick={() => deleteTeacher(idx)}
                            >
                            <DeleteIcon />
                            </Button>

                        </div>
                        
                </div>
            ))}


        </div>
        </Box>
        </Base>
        
    );
}

export default Teachers;
