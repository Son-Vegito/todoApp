export function CreateToDo() {
    return <div>
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="Title" id="title"></input>
        <br />
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="Description" id="desc"></input>
        <br />
        <button style={{
            padding: 10,
            margin: 10
        }}
            onClick={() => {
                
                fetch("http://localhost:3000/todo", {
                    method: "POST",
                    body: JSON.stringify({
                        "title": document.getElementById("title").value,
                        "description": document.getElementById("desc").value
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(() => {
                    alert("todo added")
                })
            }}
        >Add to do</button>

    </div>
}