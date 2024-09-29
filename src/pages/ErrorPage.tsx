import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
      <h1>404 - გვერდი არ არსებობს</h1>
      <p>
        <Link to="/">დაბრუნება მთავარ გვერდზე</Link>
      </p>
    </div>
  )
}

export default ErrorPage
