import '../App.css';
import React from "react";
import Card from 'react-bootstrap/Card';
import data from './data';
import Map from './Map';

function BoroughItem(props) {
  var numb = 0;
  const boroughName = props.borough;

  switch(boroughName) {
    case "chelsea":
      numb=0;
      break;
    case "fulham":
      numb=1;
      break;
    case "camden":
      numb=2;
      break;
    case "islington":
      numb=3;
      break;
    default:
      break;
  }

  return (
    <div className="boroughItem">
      <h2>{data[numb].borough}</h2>

      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <Card className="borough-card">
              <Card.Body>
                <Card.Title>Mansion blocks, flats or estates...</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{data[numb].card1_title}</Card.Subtitle>
                <Card.Text>
                  {data[numb].card1_body}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div class="col-sm-12 col-md-6">
            <Card className="borough-card">
              <Card.Body>
                <Card.Title>If your recycling is collected outside your property...</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{data[numb].card2_title}</Card.Subtitle>
                <Card.Text>
                  {data[numb].card2_body}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div>
            <img className="yesno" src={process.env.PUBLIC_URL + "/images/Yes.png"} alt="Yes"></img>
          </div>

          <h3 className="space">What can I recycle?</h3>
          <div className="items">
            {data[numb].recycle.map((item) => ( <p>{item}</p> ))}
          </div>

          <div>
            <img className="yesno" src={process.env.PUBLIC_URL + "/images/No.png"} alt="No"></img>
          </div>

          <h3>What not to recycle?</h3>
          <div className="items">
            {data[numb].noRecycle.map((item) => ( <p>{item}</p> ))}
          </div>

        </div>
      </div>

    <Map/>

    </div>
  );
}

export default BoroughItem;
