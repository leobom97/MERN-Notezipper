import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../MainScreen";
import "./RegisterScreen.css";
import ErrorMessage from "../../ErrorMessage";
import axios from "axios";
import Loading from "../../Loading";
import SuccessfullMessage from "../../SuccefulMessage";

function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSucessMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage(
        "Os campos de senha não estão idênticos! Por favor informe senhas iguais em ambos os campos"
      );
    } else {
      setErrorMessage(null);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        setLoading(true);
        const { data } = await axios.post(
          "http://localhost:5000/users/register",
          { name, email, password },
          config
        );
        setLoading(false);
        localStorage.setItem("userInfo", JSON.stringify(data));
        setSucessMessage("Usuário cadastrado com sucesso!!!");
      } catch (error) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <MainScreen title="Cadastro">
      <div className="loginContainer">
        {errorMessage ? (
          <ErrorMessage message={errorMessage}></ErrorMessage>
        ) : (
          successMessage && (
            <SuccessfullMessage message={successMessage}></SuccessfullMessage>
          )
        )}
        {loading && <Loading />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="name"
              placeholder="Informe seu nome"
              value={name}
              onChange={(event) => setName(event.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Informe seu email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Digite uma senha"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirme sua senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirme sua senha"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            ></Form.Control>
          </Form.Group>
          {picMessage && <ErrorMessage>{picMessage}</ErrorMessage>}
          <Button variant="primary" type="submit" className="registerButton">
            Cadastrar
          </Button>
          <Row className="py-3">
            <Col>
              Já Possui conta na NoteZipper? &nbsp;
              <Link to="/login" className="linkToLogin">
                Faça seu login
              </Link>
            </Col>
          </Row>
        </Form>
      </div>
    </MainScreen>
  );
}

export default RegisterScreen;
