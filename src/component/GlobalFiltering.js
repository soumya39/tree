const GlobalFiltering=({filter , setFilter})=> {
    return (
      

<div class="row" style={{marginTop:8 , marginRight:5, marginBottom:-14}}>
<div class="col"> <span>
           Search : {' '}
           <input placeholder="" value={filter || ''} onChange={e=>setFilter(e.target.value)} />
       </span></div>
<div class="col"></div>
<div class="col"></div>
{/* <div class="col ml-auto" align="right">
<button type="button" class="btn btn-primary btn-sm"><i class="fa fa-download" aria-hidden="true"></i>{' '}PDF</button>{' '}
<button type="button" class="btn btn-primary btn-sm">
    <i class="fa fa-download" aria-hidden="true"></i>{' '}Excel</button>
</div> */}

</div>

    )
}

export default GlobalFiltering
