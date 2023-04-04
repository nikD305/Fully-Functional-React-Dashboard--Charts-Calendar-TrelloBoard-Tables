import Board, {moveCard,moveColumn, removeCard,addCard} from '@asseinfo/react-kanban'
import '@asseinfo/react-kanban/dist/styles.css'
// import useBoard from '../../stores/BoardPagee'
import useBoard from '../../stores/BoardPagee'
import './BoardPage.css'
import {RxCross2} from 'react-icons/rx'
import {IoMdAdd} from 'react-icons/io'
import AddCardModal from '../AddCardModal/AddCardModal'
import { useState } from 'react'
const BoardPage = () => {
const {board , setBoard} = useBoard();


const handleColumnMove = (_card , source , destinatioin) =>{
  const updatedBoard = moveColumn(board, source, destinatioin)

  // updates the ID i.e the position of particular column
  setBoard(updatedBoard)
}

const handleCardMove = (_card , source , destinatioin) =>{
  const updatedBoard = moveCard(board, source, destinatioin)
  setBoard(updatedBoard)
}


const getColumn = (card)=>{
  // we have passed card as a reference thats why its wroking if wee pass object raw it wont work we should pass the reference for it to work ,
  // here this will filter and give that object which containes that card
  const column = board.columns.filter((column)=>column.cards.includes(card))
 return column[0]


}

const getGradient = (card) =>{
//here there are 4 columns here so we want to give different color for eacgh column so we are here getting that particular which contains that card and addding same color for that particular column.
  const column = getColumn(card)
  const title = column.title
  if (title === "TODO") {
      return {
          background:
              "linear-gradient(65.35deg, rgba(65, 65, 65, 0.67) -1.72%, rgba(48, 189, 220) 163.54%)",
      };
  } else if (title === "Doing") {
      return {
          background:
              "linear-gradient(65.35deg, rgba(65, 65, 65, 0.67) -1.72%, rgba(220, 48, 48) 163.54%)",
      };
  } else if (title === "Completed") {
      return {
          background:
              "linear-gradient(65.35deg, rgba(65, 65, 65, 0.67) -1.72%, rgba(48, 220, 86) 163.54%)",
      };
  } else if (title === "Backlog") {
      return {
          background:
              "linear-gradient(65.35deg, rgba(65, 65,65, 0.67) -1.72%,rgba(134, 48, 220) 163.54%)",
      };
  }
}

  return (
    <div className='board-container'>
      <span>Trello Board</span>

      <Board
      allowAddColumn
      allowRenameColumn
      allowRemoveCard
      onCardDragEnd={handleCardMove}
      onColumnDragEnd={handleColumnMove}
      
      //custom card(just rendered all the objects) , the card object i.e from boardData in index.js from cards what objecet we have that becomes props, here we have cards[{id,title, description}] so here id,title,description will be props for renderCard
    //here we are creating a card similar to previous design so it loos similar ,adn rendering all the card from board by mapping it,
      renderCard = {(props)=>(
        <div className='kanban-card' style={getGradient(props)}>
          <div>
            <span>
              {props.title}
            </span>
      <button className='remove-button' type="button"
      
      // here we are deleting the board using inbuild function removecard bby sending 
      // board = the column of whole data
      // getColumn(props) = the column where the board we want to delete exists
      // props = a board which we want to delete
      // and we send it to zustand(setBoard(updatedBoard)) to update
      onClick={()=>{
        const updatedBoard = removeCard(board,getColumn(props),props)
        setBoard(updatedBoard)
      }}
      >
        <RxCross2 color="white" size={15} />
      </button>
          </div>

          <span>{props.description}</span>

        </div>
      )}
      

      // Previously above renderCard gave card as props, now here in renderColumnHeader it will give whole column as props(id,title,cards)
      renderColumnHeader = {(props)=>{

        const [modalOpened , setModalOpened] = useState(false)
         
        const handleCardAdd = (title,detail) =>{
          const card = {
            id: new Date().getTime(),
            title,
            description:detail
              }
        
              // here we are by calling addCard with full board(which contains all columns),props(contains aparticular column where we want to add card) , card(the one which we want to add)
        const updateBoard = addCard(board,props,card)

        // send the updated columns values to zustand to update
        setBoard(updateBoard)

        // to close the pop-up
        setModalOpened(false)

        }
        
      return (
        <div className='column-header'>
          <span>{props.title}</span>
          <IoMdAdd 
          color='white'
          size={25}
          title="Add card"
          onClick={()=>setModalOpened(true)}
          />
          <AddCardModal
          // make visible ON and OFF
          visible={modalOpened}
          // Closes modal when clicked on Background
          onClose={()=>setModalOpened(false)}

          handleCardAdd={handleCardAdd}
          />
        </div>
      )
     }}
      >

{board}
      </Board>

    </div>
  )
}

export default BoardPage