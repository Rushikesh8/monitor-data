import React,{useEffect,useState} from "react";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Dashboard = () => {
    const [paCodeMissingData,setPaCodeMissingData] = useState()
    
    const getDataFromSheet = () => {
        axios.get("https://script.google.com/macros/s/AKfycbwMsg7RJ1wbdm0FM-Pg6TeyZSQUzb5enYGljLg7kOWUWSNZghFIznlqKIeNsc17B8P2/exec")
        .then((response) => {
            if(response.status == 200){
            setPaCodeMissingData(response.data)
            }
        })
    }
    useEffect(() => {
        getDataFromSheet()
    },[])
    const timerId = setInterval(() => {
        getDataFromSheet()
      }, 300000);
    //   clearInterval(timerId)
    

    // const Table = ({rows}) => {
    // return <>
    //     <TableContainer component={Paper}>
    //         <Table sx={{ minWidth: 650 }} aria-label="simple table">
    //         <TableHead>
    //         <TableRow>
    //             <TableCell>Material</TableCell>
    //             <TableCell align="right">Plant</TableCell>
    //             <TableCell align="right">Plant MRP Block</TableCell>
    //             <TableCell align="right">SPT</TableCell>
    //             <TableCell align="right">Source</TableCell>
    //             <TableCell align="right">Vendor Name</TableCell>
    //             <TableCell align="right">Vendor Material</TableCell>
    //             <TableCell align="right">Packing Code</TableCell>
    //             <TableCell align="right">MPG</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {rows && rows.map((row) => (
    //         <TableRow
    //           key={row.material}
    //           sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    //         >
    //           <TableCell component="th" scope="row">
    //             {row.plant}
    //           </TableCell>
    //           <TableCell align="right">{row.plant_mrp_block}</TableCell>
    //           <TableCell align="right">{row.spt}</TableCell>
    //           <TableCell align="right">{row.source}</TableCell>
    //           <TableCell align="right">{row.vendor_name}</TableCell>
    //           <TableCell align="right">{row.vendor_material}</TableCell>
    //           <TableCell align="right">{row.packing_code}</TableCell>
    //           <TableCell align="right">{row.mpg}</TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
    // </>

   
    // }
    
    return (
        <div className="mx-auto">
        	<div
		class='flex flex-wrap flex-row sm:flex-col justify-center items-center w-full sm:w-1/4 p-5 bg-white rounded-md shadow-xl border-l-4 border-teal-600 mx-auto my-4'>
		<div class="flex justify-between w-full">
			<div>
				<div class="p-2">
					<svg xmlns="http://www.w3.org/2000/svg" fill="None" viewBox="0 0 24 24" stroke-width="1.5"
						stroke="#0d9488" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round"
							d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
					</svg>
				</div>
			</div>
			
		</div>
		<div>
			<div class="font-bold text-5xl text-center">
				{paCodeMissingData ? paCodeMissingData.total_records_with_pa_missing : 0}
			</div>
			<div class="font-bold text-sm">
				Missing PA Code
			</div>
		</div>
	</div>
    <div className="mx-10 mt-20 table-override">
    <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Material</TableCell>
                <TableCell align="right">Plant</TableCell>
                <TableCell align="right">Plant MRP Block</TableCell>
                <TableCell align="right">SPT</TableCell>
                <TableCell align="right">Source</TableCell>
                <TableCell align="right">Vendor Name</TableCell>
                <TableCell align="right">Vendor Material</TableCell>
                <TableCell align="right">Packing Code</TableCell>
                <TableCell align="right">MPG</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paCodeMissingData && paCodeMissingData.data.map((row) => (
            <TableRow key={row.material}>
            <TableCell component="th" scope="row">{row.material}</TableCell>
              <TableCell component="th" scope="row">{row.plant}</TableCell>
              <TableCell align="right">{row.plant_mrp_block}</TableCell>
              <TableCell align="right">{row.spt}</TableCell>
              <TableCell align="right">{row.source}</TableCell>
              <TableCell align="right">{row.vendor_name}</TableCell>
              <TableCell align="right">{row.vendor_material}</TableCell>
              <TableCell align="right">{row.packing_code}</TableCell>
              <TableCell align="right">{row.mpg}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
      </div>
    );
}
export default Dashboard;