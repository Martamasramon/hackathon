import '../App.css';
import React from "react";
import Card from 'react-bootstrap/Card';

function BoroughItem(props) {
  const data = {
    chelsea: {
      card1_title: "Mixed bank",
      card1_body: "To use the banks: you don't need to separate items. Don't use recycling bags - put items straight into the bank.",
      card2_title: "Clear bag recycling",
      card2_body: "22 clear recycling bags are distributed per property every three months. If you don’t receive these, please call Streetline on 020 7361 3001."      
    }

  }

  const borough = props.borough;

  return (
    <div className="boroughItem">
      <h2>{borough}</h2>

      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <Card className="borough-card">
              <Card.Body>
                <Card.Title>Mansion blocks, flats or estates...</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Mixed bank</Card.Subtitle>
                <Card.Text>
                  To use the banks: you don't need to separate items. Don't use recycling bags - put items straight into the bank.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div class="col-sm-12 col-md-6">
            <Card className="borough-card">
              <Card.Body>
                <Card.Title>If your recycling is collected outside your property...</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Clear bag recycling</Card.Subtitle>
                <Card.Text>
                  22 clear recycling bags are distributed per property every three months. If you don’t receive these, please call Streetline on 020 7361 3001.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

        </div>
      </div>

    </div>
  );
}

export default BoroughItem;
