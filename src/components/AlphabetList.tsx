import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function AlphabetList() {
  var alphabets = [1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,]

  return (
    <Card style={{ height: "95vh", width: '20%' }}>
      <ListGroup style={{ overflow: "scroll"}}>
        {alphabets.map(x => 
          <ListGroup.Item style={{ padding: "0"}}>
            <Button style={{ height: "", width:"100%", padding: "0", borderRadius: "0"}}>
              {x}
            </Button>
          </ListGroup.Item>
        )}
      </ListGroup>
    </Card>
  );
}

export default AlphabetList;
