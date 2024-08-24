import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch, useSelector } from 'react-redux';
import { AddAlphabet, IReducedState, SelectAlphabet } from '../store/actions/action';

function AlphabetList() {
  var alphabets = useSelector((state: IReducedState) => state.mem.alphabets)
  var selectedAlphabet = useSelector((state: IReducedState) => state.mem.selectedAlphabet)

  const dispatch = useDispatch()
  const SelectAlphabetBtn = (alphabet: string) =>{
     dispatch(SelectAlphabet(alphabet))
  }

  const AddAlphabetBtn = () =>{
    const newAlphabetElement = document.getElementById("newAlphabet") as HTMLInputElement
    dispatch(AddAlphabet(newAlphabetElement.value))
  }

  return (
    <div>
      <Card style={{ height: "95vh", width: "15%", backgroundColor: "#212529" }}>
        <form  className="form-inline" style={{ padding: "10px", borderRadius: "0" }}>
          <input id="newAlphabet" placeholder="New Alphabet Name" style={{ width: "65%", margin: "10px" }}/>
          <Button onClick={AddAlphabetBtn} style={{ backgroundColor: "black", borderColor: "black" }}>
            Add
          </Button>
        </form >
        <ListGroup style={{ height: "100%", overflow: "scroll", overflowX: "hidden" }}>
          { alphabets.map(alphabet => 
            <Button key={alphabet} onClick={() => SelectAlphabetBtn(alphabet)}
              style={{ backgroundColor: selectedAlphabet.localeCompare(alphabet) ? "#212529" : "white",
                      color: selectedAlphabet.localeCompare(alphabet) ? "white" : "black",
                      borderColor: "#808080",  width:"100%", padding: "25px", borderRadius: "0" }}>
              {alphabet}
            </Button>
          )}
        </ListGroup>
      </Card>
    </div>
  )
}

export default AlphabetList;
