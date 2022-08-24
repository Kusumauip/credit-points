
import React, {useEffect, useState} from 'react'; 
import axios from 'axios';
import { evalPoints } from '../utils/converter';
import { Table } from 'semantic-ui-react';


export const CreditCardPointsWithHooks=() => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [transactionData, setTransactionData] = useState(null); 
    const [isError, setIsError] = useState(false); 
    
    useEffect(() => {
        axios.get('transactions.json').then((response) =>{
            setTransactionData(response.data.data);
            setIsLoaded(true);
        }).catch(function (error) {
            console.log(error.toJSON());
            setIsError(true)
          });
    }, []);
 
   const renderLoading=() => {
        return (<div>Loading </div>)
    }

    const renderError =() => {
        return (<div> Error occurred while loading transaction data</div>)
    }

    const renderPointsTableData=(monthToPointsMap) => {
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

    const renderData =() => {
        return (
            <Table celled padded>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Transaction Month</Table.HeaderCell>
                        <Table.HeaderCell>Points Earned</Table.HeaderCell>
                    </Table.Row>
                 </Table.Header>
                <Table.Body>
                    {renderPointsTableData(evalPoints(transactionData ))}
                </Table.Body>
            </Table>
        )
    }

    const divStyle = {
        color: 'blue',
        marginTop: '100px',
        border: '1px solid black'
      };
      

    return (

    <div style={divStyle}>
        <h1>Data rendering using hooks</h1>
        {isLoaded ? isError ? renderError() : renderData(): renderLoading()}
    </div>
)
}