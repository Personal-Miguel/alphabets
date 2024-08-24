import { Button, Card, Form, ListGroup, Modal, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { AddCharacter, ICharacter, IReducedState } from "../store/actions/action"
import { useState } from "react";

function CharacterChart() {
    var alphabets = useSelector((state: IReducedState) => state.mem.alphabets)
    var selectedAlphabet = useSelector((state: IReducedState) => state.mem.selectedAlphabet)
    var characters = useSelector((state: IReducedState) => state.mem.characters.filter(char => char.alphabet.localeCompare(selectedAlphabet) === 0))
    const dispatch = useDispatch()


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [foreignChar, setFC] = useState('');
    const [englishTranslation, setT] = useState('');

    const handleAddChar = () => {
        let newChar: ICharacter = {
            originalChar: foreignChar,
            englishChar: englishTranslation,
            alphabet: selectedAlphabet
        }
        console.log("kaka")
        dispatch(AddCharacter(newChar))
        handleClose()
    }

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Character to {selectedAlphabet}.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" >
                        <Form.Label>Foreign Character</Form.Label>
                        <Form.Control value={foreignChar} onChange={e => setFC(e.target.value )} placeholder="日本語" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>English Translation</Form.Label>
                        <Form.Control value={englishTranslation} onChange={e => setT(e.target.value )} placeholder="Apple" />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAddChar}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
            <Row style={{ margin: "0" }}>
                <Button onClick={handleShow} style={{ width: "10%", display: "block", marginLeft: "auto", marginRight: "10px", marginTop: "10px", marginBottom: "10px"  }}>Add Character</Button>
            </Row>
            <Card style={{ height: "89vh", borderRadius: "0", backgroundColor: "#212529" }}>
            <ListGroup style={{ height: "95vh", overflow: "scroll", overflowX: "hidden" }}>
                <Row style={{ margin: "0", paddingLeft: "120px", paddingTop: "20px"}}>
                    { characters.map(character =>
                        <Card key={character.originalChar} 
                        style={{ backgroundColor: "white",
                                color: "black",
                                borderColor: "#808080",  width:"10%", padding: "25px", margin: "2px" }}>
                        {character.originalChar} <hr></hr> {character.englishChar}
                        </Card>
                    )}
                </Row>

            </ListGroup>
            </Card>
        </div>
    )
}

export default CharacterChart
