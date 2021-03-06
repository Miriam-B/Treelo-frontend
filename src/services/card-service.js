
import { utils } from './utils-service'
import { boardService } from './board-service';

export const cardService = {
    addCard
}


async function addCard(board, cardTxt, groupId) {
    console.log('groupId',groupId);
    const newBoard = JSON.parse(JSON.stringify(board))
    const newCard = {
        id: utils.makeId(),
        title: cardTxt,
        description: '',
        archivedAt: null,
        members: [],
        labels: [],
        createdAt: Date.now(),
        dueDate: null,
        attachments: null,
        timeAnalysis:{ 
            timeInGroupsMap:{},
            currGroup: {
                groupId,
                enteredAt: Date.now()
            }
         },
        byMember: {
            // add user info here from session storage:
            //                         "byMember": {
            //                             "_id": "u101",
            //                             "username": "Tal",
            //                             "fullname": "Tal Tarablus",
            //                             "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
            //                         },
        }
    }
    newBoard.groups.map(group => {
        if (group.id === groupId) {
            group.cards.push(newCard)
            return group
        }
        return group
    })

    // const partialActivity = {
    //     "txt": 'create this card',
    //     "commentTxt": '',
    //     "card": {
    //       "id": newCard.id,
    //       "title": cardTxt
    //     }
    //   }

      
    // const activity = boardService.createActivity(partialActivity)
    //   if (!newBoard.activities) newBoard.activities = []
    //   newBoard.activities.push(activity)
    // await boardService.updateBoard(newBoard)
    return newBoard
}
