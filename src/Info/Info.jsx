import './Info.css'
export function Info({wave,coin,health}){
    return (
    <div id="top">
        <h1 className="top-info" id="wave-count">Wave {wave}</h1>
        <h2 className="top-info" id="money">{coin} coins</h2>
        <h2 className="top-info" id="money">{health} health</h2>
    </div>
    )
}