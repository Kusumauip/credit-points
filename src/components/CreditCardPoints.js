import React from 'react';
import {connect} from 'react-redux';
import {fetchTransactionDetails} from '../actions'
import { Table } from 'semantic-ui-react';
import { evalPoints } from '../utils/converter';


class CreditCardPoints extends React.Component{


    componentDidMount() {
        this.props.fetchTransactionDetails(); 
    }

    renderPointsTableData=(monthToPointsMap) => {
        let dataToRender = []; 
        Object.entries(monthToPointsMap).forEach((entry) => {
            const [key, value] = entry;
           dataToRender = [...dataToRender,
           <Table.Row key={key}>
            <Table.Cell>{key} </Table.Cell>
            <Table.Cell>{value}</Table.Cell>
       </Table.Row>]
        })
    return dataToRender;
    };
          


    renderPoints() {
    return(
        <div>
            <Table celled padded>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Transaction Month</Table.HeaderCell>
                        <Table.HeaderCell>Points Earned</Table.HeaderCell>
                    </Table.Row>
                 </Table.Header>
                <Table.Body>
                    {this.renderPointsTableData(evalPoints(this.props.data.data ))}
                </Table.Body>
            </Table>
        </div>
        )
    }

    

    render(){
       var divStyle = {
            color: 'green',
            marginTop: '50px',
            border: '1px solid black'
          };

        return(
            <div style={divStyle}>
            {this.props.isSignedIn? 
            <div>
            <h2>Data rendering using redux</h2>
            <h4>Welcome {this.props.userId} {this.renderPoints()}</h4>
            </div>
            :<h1>Please Sign In to view your points using react redux</h1>}
            
            </div>
        )
    }
}

const mapStatetoProps=(state)=>(
    {isSignedIn: state.authObject.isSignIn,
        userId: state.authObject.userId,
        data: state.transactionData
      }
)
export default connect(mapStatetoProps, {fetchTransactionDetails})(CreditCardPoints)