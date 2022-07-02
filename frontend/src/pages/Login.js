import React, { useEffect, useRef, useState } from 'react'
import { useLoginMutation } from '../features/auth/authApiSlice'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from '../features/auth/authSlice'

const Login = () => {

    const [credential, setCredential] = useState({
        username: '',
        password: ''
    })

    const userRef = useRef()
    const [login, { isLoading }] = useLoginMutation()
    const [error, setError] = useState('')
    const Dispatch = useDispatch()
    const navigate = useNavigate()
    const token = useSelector(selectCurrentToken)


    // to make username input focus onload
    useEffect(() => {
        userRef.current.focus()

    }, [])

    // navigate to dashboard if access token is available in store
    useEffect(() => {
        if (token) {
            navigate("/dashboard")
        }
    }, [token, navigate])


    // destructuring credentials
    const { username, password } = credential

    // handling submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // we send post request to login
            const userData = await login(credential).unwrap()
            // store the response sent back by backend in redux store
            Dispatch(setCredentials(userData))
            navigate('/')
            e.target.reset()
            setCredentials({ username: '', password: '' })
        } catch (err) {
            setError(err.data.detail)
            e.target.reset()
            setCredentials({ username: '', password: '' })
        }

    }

    // handle change
    const handleChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }





    return (

        isLoading ? <h1>Loading.....</h1> :
            <form onSubmit={handleSubmit}>
                {error && <h1>{error}</h1>}
                <div className='form-control'>
                    <label>Username</label> &nbsp;
                    <input type="text" name="username"
                        ref={userRef}
                        value={username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br />
                <div className='form-control'>
                    <label>Password</label> &nbsp;
                    <input type="password" name="password"
                        value={password}
                        onChange={handleChange}
                        required
                    />
                </div> <br />
                <input type="submit" value="Login" />

            </form>
    )
}

export default Login