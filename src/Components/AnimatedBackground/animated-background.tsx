import './styles.scss'

function AnimatedBackground(){

  const list = (): JSX.Element[] => {
    let listArray: JSX.Element[] = []

    for(let i = 0; i < 300; i++){
      listArray.push(<li/>)
    }

    return listArray
  }
  return (
    <div className="area" >
      <ul className="circles">
        {list()}
      </ul>
    </div >
  )
}

export default AnimatedBackground;