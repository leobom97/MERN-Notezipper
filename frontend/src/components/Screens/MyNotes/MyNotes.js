import React from "react";
import MainScreen from "../../MainScreen";
import { Link } from "react-router-dom";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import notes from "../../../data/notes";

function MyNotes() {
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure about this?")) {
    }
  };

  return (
    <MainScreen title="Welcome back Leonardo Rodrigues">
      <Link>
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create new notes
        </Button>
      </Link>
      {notes.map((note) => {
        return (
          <Accordion defaultActiveKey={["0"]}>
            <Accordion.Item eventKey="0">
              <Card style={{ margin: 10 }}>
                <Card.Header style={{ display: "flex" }}>
                  <span
                    style={{
                      color: "black",
                      textDecoration: "none",
                      flex: 1,
                      cursor: "pointer",
                      alignSelf: "center",
                      fontSize: 18,
                    }}
                  >
                    <Accordion.Button as={Card.Text} variant="link">
                      {note.title}
                    </Accordion.Button>
                  </span>
                  <div>
                    <Button href={`./note/${note._id}`}>Edit</Button>
                    <Button
                      variant="danger"
                      className="mx-2"
                      onClick={() => {
                        deleteHandler(note._id);
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <h4>
                      <Badge bg="success">Category - {note.category}</Badge>
                    </h4>
                    <blockquote className="blockquote mb-0">
                      <p>{note.content}</p>
                      <footer className="blockquote-footer">
                        Created On - date
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion.Item>
          </Accordion>
        );
      })}
    </MainScreen>
  );
}

export default MyNotes;
