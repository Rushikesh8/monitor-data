import React,{useEffect,useState} from "react";
import axiosInstance from "../axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Dashboard = () => {
    const [paCodeMissingData,setPaCodeMissingData] = useState()
    const [updatedAt,setUpdatedAt] = useState("")
    
    const getDataFromSheet = () => {
        // axios.get("https://script.google.com/macros/s/AKfycbzvM8IA_E6pF3ttUCJkymDgiU78uG9_ZG4gp0LY8c2fHQ3AzPBP0K9rnKYHP_a3APDH/exec")
        // .then((response) => {
        //     if(response.status == 200){
        //     setPaCodeMissingData(response.data)
        //     setUpdatedAt(new Date().toLocaleString())
        //     }
        // })
        // axiosInstance.get("/inventory/get-dashboard-stats")
        // .then((response) => {
       
        //   console.log(response)
        //   setPaCodeMissingData(response.data)
          
        // })
    }
    useEffect(() => {
        getDataFromSheet()
    },[])
    const timerId = setInterval(() => {
        getDataFromSheet()
      }, 300000);
    
    const colums = [
        "Material",
        "Plant",
        "Plant MRP Block",
        "SPT",
        "Source",
        "Vendor Name",
        "Vendor Material",
        "Packing Code",
        "MPG"
    ]
    const DataTable = ({rows}) => {
    return <>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                {colums.map((col) => <TableCell key={col}>{col}</TableCell>)}    
            </TableRow>
        </TableHead>
        <TableBody>
          {rows && rows.map((row) => (
            <TableRow key={row.material}>
            <TableCell>{row.material}</TableCell>
              <TableCell>{row.plant}</TableCell>
              <TableCell>{row.plant_mrp_block}</TableCell>
              <TableCell>{row.spt}</TableCell>
              <TableCell>{row.source}</TableCell>
              <TableCell>{row.vendor_name}</TableCell>
              <TableCell>{row.vendor_material}</TableCell>
              <TableCell>{row.packing_code}</TableCell>
              <TableCell>{row.mpg}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
    }
    const Card = ({title,count}) => {
        return <div class='flex flex-wrap flex-row sm:flex-col justify-center items-center w-10/12 md:w-4/12 p-5 bg-white rounded-md shadow-xl border-l-4 border-teal-600 mx-auto my-4'>
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
				{count}
			</div>
			<div class="font-bold text-sm">
				{title}
			</div>
		</div>
       
	</div>
    }
    return (
    <>
    
    <div className="mx-auto">
    <Card title={"Missing Packing Code"} count={paCodeMissingData ? paCodeMissingData.total_records_with_pa_missing : 0}/>
    <div className="mx-10 mt-20 table-override">
    <p className="text-right text-sm mb-1">Data Updated at : {updatedAt}</p>
    <DataTable rows={paCodeMissingData ? paCodeMissingData.data : []} />
    </div>
    </div>
    </>
    );
}
export default Dashboard;