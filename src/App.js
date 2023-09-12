import React, { useState } from 'react';
import './App.css';
import students from './Data/StudentData';
import teachers from './Data/TeacherData';
import Students from './Components/Student/Students';
import AddStudent from './Components/Student/AddStudent';
import { Route, Switch, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import UpdateStudent from './Components/Student/UpdateStudent';
import Base from './Base/Base';
import Teachers from './Components/Teacher/Teachers';
import AddTeacher from './Components/Teacher/AddTeacher';
import UpdateTeacher from './Components/Teacher/UpdateTeacher';


function App() {
  const [studentdata, setStudentdata] = useState(students)
  const [teacherdata, setTeacherdata] = useState(teachers)
  
  const history = useHistory()


  return (
    <div className="App">

    
    
    <Switch>

      <Route exact path="/">
        <Base>    
        <div className='line1'>
          <h3>Welcome to the Library Website.</h3>
        </div>
        <div className='line2'>
          <h3>Check our Students & Teachers data here...</h3>
        </div>
        </Base>
      </Route>

      <Route path="/students">
             
        <Students
          studentdata={studentdata}
          setStudentdata={setStudentdata}
        />
      </Route>

      <Route path="/add-student">
        <AddStudent
          studentdata={studentdata}
          setStudentdata={setStudentdata}
        />
      </Route>

      <Route path="/edit-student/:id">
        <UpdateStudent
          studentdata={studentdata}
          setStudentdata={setStudentdata}
        />
      </Route>


      <Route path="/teachers">
             
        <Teachers
          teacherdata={teacherdata}
          setTeacherdata={setTeacherdata}
        />
      </Route>

      <Route path="/add-teacher">
        <AddTeacher
          teacherdata={teacherdata}
          setTeacherdata={setTeacherdata}
        />
      </Route>

      <Route path="/edit-teacher/:id">
        <UpdateTeacher
          teacherdata={teacherdata}
          setTeacherdata={setTeacherdata}
        />
      </Route>


    </Switch>

    </div>
  );
}

export default App;
