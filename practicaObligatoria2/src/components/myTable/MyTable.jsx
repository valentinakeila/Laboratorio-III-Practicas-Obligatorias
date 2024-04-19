import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";

const MyTable = (props) => {

    const average = props.netIncomesArray
        .map(item => item.income)
        .reduce((value1, value2) => {
            return value1 + value2/props.netIncomesArray.length
        },0);
  
    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th> </th>
                        <th>BRAND NAME</th>
                        <th> NET INCOME</th>
                    </tr>
                </thead>
                <tbody>
                    {props.netIncomesArray.map(company => {
                        return (
                            <tr key={props.netIncomesArray.indexOf(company)}>
                                <th>{props.netIncomesArray.indexOf(company) + 1}</th>
                                <td>{company.brand}</td>
                                <td>{company.income}</td>
                            </tr>
                        )})
                    }
                </tbody>
            </Table>
            <br />
            <p>Average net income: {Number(average.toFixed(2))}</p>
        </> 
    )
};
  
MyTable.propTypes = {
    netIncomesArray: PropTypes.array
};

export default MyTable;