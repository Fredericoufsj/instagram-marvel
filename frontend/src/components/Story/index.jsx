import './style.css'
import axios from 'axios';
import { useState, useEffect } from 'react';

export function Story() {

    const [personagens, setPersonagens] = useState([])
    

  useEffect(() => {
    axios.get('https://gateway.marvel.com:443/v1/public/characters?limit=5&ts=1&apikey=b94a591bdcd3277566a2311d62df5ac2&hash=72aae658886a166ca58b9bd3c3ce402b').then(res => {

      setPersonagens(res.data.data.results)


    }).catch(error => console.log(error))
  }, [])

  console.log(personagens)

    return (

        
        <div className="container"  >
            {personagens.map(per => (
                <div  key={per.id}>
            <div className="user-elements"  >                 
                <div>
                    <img className="image-user-story" alt='imagem ney' src={`${per.thumbnail.path}.${per.thumbnail.extension}`}  />
                </div>
                <p>{per.name}</p>
            </div>                 
            </div>       

))
}
        </div>
    )

}