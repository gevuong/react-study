import MUIDataTable from 'mui-datatables';

const muiDataTable = props => {
    return (
        <MUIDataTable
            title={props.title}
            options={props.options}
            data={props.data}
            columns={props.columns}
        >
            TEST TABLE
        </MUIDataTable>
    )
}

export default muiDataTable;