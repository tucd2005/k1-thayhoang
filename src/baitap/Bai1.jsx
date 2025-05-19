import React from 'react'

const Bai1 = () => {
  return (
    <> <table border={1}>
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>math</th>
        <th>literature</th>
        <th>english</th>
        <th>Diem trung binh</th>
        <th>hoc luc</th>
        <th>thao tac</th>
      </tr>
    </thead>

    <tbody>
      {students.map((s) =>(
        
        <tr>
          <th>{s.id}</th>
          <th>{s.name}</th>
          <th>{s.math}</th>
          <th>{s.literature}</th>
          <th>{s.english}</th>
          <th>s.diemtrungbinh</th>
          <th>s.hocluc</th>
          <th>
            <button>xoa</button>
            <button>sua</button>
          </th>
      </tr>
      
      ))}
    </tbody>
  </table></>
  )
}

export default Bai1