import { useNavigate } from 'react-router-dom';


const Header = (props) => {
  const navigate = useNavigate();

  function handleSubmit(event){
    event.preventDefault();
    const searchValue = event.target[0].value;
    props.onSubmit(searchValue);
    
    navigate('/');  // Precisei do useNavigate para conseguir pesquisar filmes tambem na pagina MovieDetail e ser direcionado automaticamente para a pagina Home para ver os cards do filme pesquisado.
    
    event.target[0].value = "";

        
  }

  return (
  <div className="Header"> 
    <h1>Gabizola, escolha um filme!</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Pesquise aqui, filha" />
    </form>
  </div> 
  )
}

export default Header
