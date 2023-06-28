import { TableContainer, Typography, Table, Paper, TableHead, TableBody, TableRow, TableCell } from "@mui/material"
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { useEffect, useState } from "react";
import axios from "axios";

const ListarAlunosAprovados = () => {

    const [alunos,setAlunos] = useState([])

    useEffect(
        ()=>{
            axios.get("http://localhost:3005/alunos/listarAprovados")
            .then(
                // Fizemos a média dos iras e filtramos os alunos que tem ira maior que a média
                (response)=> {
                    // Utilizamos o reduce para somar todos os iras e dividimos pela quantidade de alunos
                    const media = response.data.reduce((total,aluno)=>total+aluno.ira,0)/response.data.length
                    // Filtragem dos alunos que tem ira maior que a média
                    const alunosAprovados = response.data.filter(aluno=>aluno.ira>media)
                    setAlunos(alunosAprovados)
                }
            )
            .catch(error=>console.log(error))
        }
        ,
        []
    )


    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Alunos Aprovados
            </Typography>
            <TableContainer component={Paper} sx={{mt:4,mb:4}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>NOME</StyledTableCell>
                            <StyledTableCell>CURSO</StyledTableCell>
                            <StyledTableCell>IRA</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            alunos.map(
                                (aluno) => {
                                    return (
                                        <StyledTableRow key={aluno._id}>
                                            <StyledTableCell>{aluno.nome}</StyledTableCell>
                                            <StyledTableCell>{aluno.curso}</StyledTableCell>
                                            <StyledTableCell>{aluno.ira}</StyledTableCell>
                                        </StyledTableRow>
                                    )
                                }
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>

    )
}


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



export default ListarAlunosAprovados