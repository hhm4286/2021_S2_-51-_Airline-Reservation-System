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
                <tr style={{textAlign:'center'}} {...row.getRowProps()}>
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

  const data = React.useMemo(() => [
    {
      "bookingID": "AGHDA586",
      "flightID": "APS788",
      "departureCity": "Auckland",
      "destinationCity": "Wellington",
      "departureDate": "12-12-21 17:30",
      "seatNum": "G7",
      "seatType": "Economy",
      "ticketType": "Adult"
    },
    {
      "bookingID": "PABJY563",
      "flightID": "BNM510",
      "departureCity": "Auckland",
      "destinationCity": "Queenstown",
      "departureDate": "01-01-22 09:15",
      "seatNum": "B2",
      "seatType": "Business",
      "ticketType": "Adult"
    },
    {
      "bookingID": "HMAOP123",
      "flightID": "PES728",
      "departureCity": "Dunedin",
      "destinationCity": "Christchurch",
      "departureDate": "15-11-21 13:45",
      "seatNum": "F2",
      "seatType": "Business",
      "ticketType": "Adult"
    },
    {
      "bookingID": "HAIPA010",
      "flightID": "AIH297",
      "departureCity": "Rotorua",
      "destinationCity": "Invercargill",
      "departureDate": "01-12-21 16:30",
      "seatNum": "D1",
      "seatType": "Premium Economy",
      "ticketType": "Child"
    },
    {
      "bookingID": "NTAUS511",
      "flightID": "KTB852",
      "departureCity": "Hastings",
      "destinationCity": "Auckland",
      "departureDate": "22-11-21 20:15",
      "seatNum": "C5",
      "seatType": "Economy",
      "ticketType": "Adult"
    },
    {
      "bookingID": "DGUHS585",
      "flightID": "BAT222",
      "departureCity": "Auckland",
      "destinationCity": "Christchurch",
      "departureDate": "09-10-21 06:30",
      "seatNum": "H1",
      "seatType": "Premium Economy",
      "ticketType": "Adult"
    },
    {
      "bookingID": "HATOG102",
      "flightID": "MON527",
      "departureCity": "Palmerston North",
      "destinationCity": "Christchurch",
      "departureDate": "24-10-21 05:45",
      "seatNum": "A2",
      "seatType": "Business",
      "ticketType": "Adult"
    },
    {
      "bookingID": "YASHH529",
      "flightID": "TKN151",
      "departureCity": "Dunedin",
      "destinationCity": "Napier",
      "departureDate": "04-11-21 10:00",
      "seatNum": "B9",
      "seatType": "Economy",
      "ticketType": "Child"
    }
  ], [])

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

function getBooking()
{
    return [

    ]
}

const fetcher = (url) => fetch(url).then((res) => res.json())

export default App
