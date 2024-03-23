export function CreateToDo(){
    return <div>
        <input style={{
            padding:10,
            margin:10
        }} type="text" placeholder="Title" id="title"></input>
        <br/>
        <input style={{
            padding:10,
            margin:10
        }} type="text" placeholder="Description" id="desc"></input>
        <br/>
        <button style={{
            padding:10,
            margin:10
        }}>Add to do</button>
        
    </div>
}