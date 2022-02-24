import './LastFrostDate.css'

function LastFrostDate({setLastFrostDate, lastFrostDate}) {

    function handleOnchangeLastFrostDate(e) {
        setLastFrostDate(e.currentTarget.value)
    }

    return (
        <div className={"LastFrostDate"}>
            <label htmlFor="lastFrostDate">Last Frost Date&nbsp;</label>
            <input type="date" name="lastFrostDate" id="lastFrostDate" value={lastFrostDate} onChange={handleOnchangeLastFrostDate}/>
        </div>
    )
}

export default LastFrostDate;