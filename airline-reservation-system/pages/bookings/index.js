import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import BTable from 'react-bootstrap/Table';

import { useTable } from 'react-table'

import Header from '../../components/header';
import Footer from '../../components/footer';

function Table({ columns, data }) {
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  })

  return (
    <div className="container">
        <BTable striped bordered hover size="sm" {...getTableProps()}>
        <thead>
            {headerGroups.map(headerGroup => (
            <tr style={{textAlign:'center'}}{...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                </th>
                ))}
            </tr>
            ))}
        </thead>
        <tbody>
            {rows.map((row, i) => {
            prepareRow(row)
            return (
                <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                    return (
                    <td {...cell.getCellProps()}>
                        {cell.render('Cell')}
                    </td>
                    )
                })}
                </tr>
            )
            })}
        </tbody>
        </BTable>
    </div>
  )
}

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Your Bookings',
        columns: [
          {
            Header: 'Booking Number',
            accessor: 'bookingID',
          },
          {
            Header: 'Flight Number',
            accessor: 'flightID',
          },
          {
            Header: 'Departure Location',
            accessor: 'departureCity',
          },
          {
            Header: 'Destination',
            accessor: 'destinationCity',
          },
          {
            Header: 'Departure Date',
            accessor: 'departureDate',
          },
          {
            Header: 'Seat',
            accessor: 'seatNum',
          },
          {
            Header: 'Seat Type',
            accessor: 'seatType',
          },
          {
            Header: 'Passenger Type',
            accessor: 'ticketType',
          },
        ],
      },
    ],
    []
  )

  const data = React.useMemo(() => getBooking(), [])

  return (
      <div className="container">
        <Header></Header>
        <div>
            <Table columns={columns} data={data} />
        </div>
        <Footer></Footer>
    </div>
  )
}

// function getBooking()
// {
//     return
//     (
//         {
//             [
//                 {
//                     bookingID: "543869453",
//                     flightID: "5437AGC",
//                     departureCity: "Auckland",
//                     destinationCity: "Wellington",
//                     departureDate: "07/10/2021",
//                     seatNum: "54B",
//                     seatType: "ECONOMY",
//                     ticketType: "Adult"
//                 }
//             ]
//         }
//     )
// }

export default App
