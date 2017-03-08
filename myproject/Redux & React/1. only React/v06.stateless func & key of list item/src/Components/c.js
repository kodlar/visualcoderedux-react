import React from 'react'
const LeaguTableList = props => {
        console.log(props.teams)
        return(<div>
              <ul className={'list-group'}>
                {
props.teams.map( team => (
                    <li key={team.id}>
                    <span className={'text-info'}>{team.title}</span><br /><span className={'bg-success'}>{team.body}</span>
                    </li>
                ))
                }

                </ul>
                </div>)
}

 module.exports = {
        LeaguTableList: LeaguTableList
      
    };
 