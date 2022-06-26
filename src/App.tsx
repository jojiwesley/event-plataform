import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { client } from "./lib/apollo"
import { Router } from "./Router"

function App() {
  return (
    /* ApolloProvider puxa o client que criamos na pasta lib*/
    < ApolloProvider client={client} >
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider >
  )
}

export default App
