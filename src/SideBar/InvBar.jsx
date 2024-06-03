import { InvItem } from './InvItem.jsx';
import './InvBar.css';
export function InvBar({inv,toggleItem}){

    return(
        <>
        <div id="inventory-bar">
            <h1 className="inv-title">Towers</h1>
            <ul className="inv-section">
                {inv.map(item => {
                    return(
                        <InvItem
                        {...item}
                        key={item.id}
                        toggleItem={toggleItem}
                        />
                    )
                })}
            </ul>
        </div>
        </>
    )
}