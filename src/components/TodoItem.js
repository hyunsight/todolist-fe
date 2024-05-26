import React from 'react'
import { Col, Row } from 'react-bootstrap'

const TodoItem = ({ item, updateTask, deleteTask }) => {
   return (
      <Row>
         <Col xs={12} sm={10}>
            <div
               className={`todo-item ${item.isComplete ? 'item-complete' : ''}`}
            >
               <div className="todo-content">{item.task}</div>
               <div>by {item.author.name}</div>
            </div>
         </Col>
         <Col xs={12} sm={2}>
            <div>
               <div>
                  <button
                     className="button-delete"
                     onClick={() => deleteTask(item._id)}
                  >
                     삭제
                  </button>
                  <button
                     className="button-delete"
                     onClick={() => updateTask(item._id)}
                  >
                     {item.isComplete ? '안끝남' : '끝남'}
                  </button>
               </div>
            </div>
         </Col>
      </Row>
   )
}

export default TodoItem
