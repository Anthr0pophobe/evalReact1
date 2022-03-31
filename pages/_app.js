import '../styles/globals.css';
import { UserProvider } from '../context/userContext';
import ResponsiveAppBar from '../src/responsiveAppBar'

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <UserProvider>
        <ResponsiveAppBar/>
        <Component {...pageProps} />
      </UserProvider>
    </div>
  )
}

export default MyApp
