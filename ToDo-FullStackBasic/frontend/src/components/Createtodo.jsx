export function Createtodo(){
return(
    <div style={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
       
       
    
    }}>
        <input style={{
            padding:10,
            margin:10
        }} type="text" placeholder="title" onChange={function(e){
            console.log(e.target.value)
        }}></input>
        <br/>
        <input style={{
            padding:10,
            margin:10
        }} type="text" placeholder="description" onChange={function(e){
            console.log(e.target.value)
        }}></input>
        <br/>
        <button
        
        >Add to do</button>
    </div>
)
}

