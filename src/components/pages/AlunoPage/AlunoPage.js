import React from "react";
import { useContext } from "react";
import { useState } from "react";
import "./AlunoPage.css";
import { AuthContext } from "../../contexts/auth";



import Guardians from '../../Gauci/Guardians'
import Roles from '../../Gauci/Roles'
import Adresses from '../../Gauci/Adresses'
import Students from '../../Gauci/Students'

const AlunoPage = () => {
  const { authenticated, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      {/* <p> {String(authenticated)} </p> */}

      <div className="AlunoPage">
        <title>Administração</title>

        <div className="AlunoPage--header">
          <button className="btn btn-primary" onClick={handleLogout}>Logout </button>
          <h1>Administração</h1>
        </div>
        <div className="AlunoPage--container">
          <div className="aluno--container">
            <Guardians />
            <Roles />
            <Adresses />
            <Students />
          </div>
        </div>
      </div>
    </>
  );
};

export default AlunoPage;
