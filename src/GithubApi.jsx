import { useState } from 'react'
import './App.css'
export default function GithubApi() {

    const [users, setUsers] = useState([])
    const [name, setName] = useState("")
    console.log(users)

    const getusers = async () => {
        try {
            const Response = await fetch(`https://api.github.com/users/${name}`)
            const ResponseJson = await Response.json();
            console.log(ResponseJson)
            setUsers(ResponseJson);
        } catch (error) {
            console.log(error)
        }

    }




    const handlechange = (e) => {
        setName(e.target.value)
    }

    const handlesubmit = (e) => {
        e.preventDefault()
        getusers()
        setName("")

    }
    return (
        <div className='githubApi'>
            <h2>List of GitHub Users</h2>
            <form onSubmit={handlesubmit}>
                <input type="text" value={name} onChange={handlechange} />
                <button type='submit'>search</button>
            </form>
            <div className='count'>


                <div className='githubdetails'>
                    <div className="image"> <img src={users.avatar_url} className="rounded" width="155" /> </div>
                    <div>


                        <div>
                            <div>
                                <span className="articles">Username:</span> <span className="number1">{users.login}</span> </div>
                            <div>
                                <span className="followers">Followers:</span> <span className="number2">{users.followers}</span> </div>
                            <div>
                                <span className="rating">num repo:</span> <span className="number3">{users.public_repos}</span> </div>
                        </div>

                    </div>
                </div>






            </div>


        </div>
    )
}