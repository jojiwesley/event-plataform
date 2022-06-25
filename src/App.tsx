import { gql, useQuery} from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"
import { Event } from "./pages/Event"


const GET_LESSONS_QUERY = gql`
  query {
    lessons{
    id
    title
    }
  }
`
// informando os tipos de dados (string);
interface Lesson{
  id:string;
  title:string;
}


function App() {
  // FORMA DE SE FAZER UMA QUERY PADÃO 
  // useEffect(() => {
  //   client.query({
  //     query: GET_LESSONS_QUERY,
  //   }).then(Response =>{
  //     console.log(Response.data)
  //   })
  // }, [])


 // atuibuindo a query na variavel utilizando o apolloClient 
const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY)

  return (
    
  //  <ul>
  //   {data?.lessons.map(lesson => {
  //      return <li key={lesson.id}>{lesson.title}</li> 
  //   })}
  //  </ul>
  <div>
    <Event/>

  </div>
  )
}

export default App
