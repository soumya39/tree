import { Button } from '@material-ui/core';

const ActionBtn = () => {
    return (
        <>
            <div style={{marginTop:30, marginBottom:10}} className="text-center">
                <Button style={{marginRight:8}} color="primary" variant="contained"> Excel Export</Button>
                <Button color="primary" variant="contained" style={{marginRight:8}}> PDF Export </Button>
            </div>

        </>
    )
}

export default ActionBtn
