import React from 'react';
import {connect} from 'react-redux';
import {fetchTransactionDetails} from '../actions'
import { Table, } from 'semantic-ui-react';
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
        return(
            <div>
            {this.props.isSignedIn? 
            <h1>Welcome {this.props.userId} {this.renderPoints()}</h1>
            :<div>Please Sign In to view your points</div>}
            
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