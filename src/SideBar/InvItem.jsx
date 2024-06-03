import './InvItem.css'
export function InvItem({id,type,adj1,adj2,level,checked,toggleItem}){
    return (
        <>
        <li className="inv-item">
          <button className="item-button" onClick={() => {toggleItem(id)}}> Level {level} {type} {adj1} {adj2} tower</button>
        </li>
        </>
    )
}