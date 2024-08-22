import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch, useSelector } from 'react-redux';
import { IReducedState, SelectAlphabet } from '../store/actions/action';

function AlphabetList() {

  var alphabets = ["test1", "test2"]
  const dispatch = useDispatch()
  const taskTitle = useSelector((state: IReducedState) => state.mem.selectedAlphabet)

  const SelectAlphabetBtn = (alphabet: string) =>{
     dispatch(SelectAlphabet(alphabet))
  }
  
  return (
    <div>
      <Card style={{ height: "95vh", width: "15%" }}>
        <ListGroup style={{ overflow: "scroll", overflowX: "hidden"}}>
          { alphabets.map(alphabet => 
            <ListGroup.Item key={alphabet} style={{ padding: "0" }}>
              <Button onClick={() => SelectAlphabetBtn(alphabet)} style={{ height: "100%", width:"100%", padding: "0", borderRadius: "0"}}>
                {alphabet}
              </Button>
            </ListGroup.Item>
          )}
        </ListGroup>
      </Card>
    </div>
  )
}

export default AlphabetList;


